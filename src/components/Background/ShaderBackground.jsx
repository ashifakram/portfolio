import React, { useEffect, useRef } from 'react';

const ShaderBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function syncSize() {
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(syncSize);
      resizeObserver.observe(canvas);
    }
    syncSize();

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

    const fs = `precision highp float;
varying vec2 v_texCoord;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 uv = v_texCoord;
    
    // Google colors
    vec3 blue = vec3(0.2588, 0.5216, 0.9569);   // #4285F4
    vec3 red = vec3(0.9176, 0.2627, 0.2078);    // #EA4335
    vec3 yellow = vec3(0.9843, 0.7373, 0.0196); // #FBBC05
    vec3 green = vec3(0.2039, 0.6588, 0.3255);  // #34A853

    float t = u_time * 0.2;
    
    // Create organic movement using sine waves
    float n1 = sin(uv.x * 3.0 + t) * 0.5 + 0.5;
    float n2 = sin(uv.y * 2.0 - t * 1.2) * 0.5 + 0.5;
    float n3 = sin((uv.x + uv.y) * 1.5 + t * 0.8) * 0.5 + 0.5;
    
    // Mix colors based on UV and time-based noise
    vec3 color = mix(blue, red, n1 * n2);
    color = mix(color, yellow, n2 * n3);
    color = mix(color, green, n3 * n1);
    
    // Soften the effect with dark background
    color = mix(color, vec3(0.02, 0.02, 0.05), 0.85);
    
    gl_FragColor = vec4(color, 1.0);
}`;

    function createShader(type, src) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      return shader;
    }

    const prog = gl.createProgram();
    gl.attachShader(prog, createShader(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, createShader(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animId;
    function render(t) {
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animId = requestAnimationFrame(render);
    }
    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 w-full h-full opacity-40">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
      {/* Background Blobs matching Stitch */}
      <div className="fixed top-1/4 -left-20 w-96 h-96 bg-[#4f378a]/20 blur-[120px] rounded-full z-0 pointer-events-none" />
      <div className="fixed bottom-1/4 -right-20 w-96 h-96 bg-[#63597c]/20 blur-[120px] rounded-full z-0 pointer-events-none" />
    </div>
  );
};

export default ShaderBackground;
