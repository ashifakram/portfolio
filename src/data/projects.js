export const flagshipProject = {
  id: 'sahayak',
  tag: 'Case Study • AI & Education',
  title: 'Sahayak',
  subtitle: 'Empowering teachers with Artificial Intelligence to simplify lesson planning, assessments, and multilingual education in rural communities.',
  overview: "Sahayak was built to bridge the gap in rural and government schools where teachers often face heavy administrative loads and language barriers. By leveraging Google's Gemini API and Vertex AI, the platform automates content creation while maintaining pedagogical integrity.",
  tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'Vertex AI'],
  problem: 'Teachers spend over 15 hours weekly on manual lesson planning and lack resources for local dialects.',
  solution: 'An AI-driven dashboard that generates lesson plans in seconds and provides real-time translation support.',
  image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
  contributions: [
    'Architected the Node.js & Express REST API services to handle asynchronous AI requests.',
    'Designed the responsive React dashboard with real-time MongoDB data synchronization.'
  ],
  challenges: 'Managing API latency for multilingual generation in low-bandwidth areas was critical. Implemented aggressive caching and optimistic UI updates.',
  roadmap: 'Adding offline-first capabilities using PWA standards and integrating voice-to-text lesson planning features.',
  liveUrl: null,
  githubUrl: 'https://github.com/ashifakram'
};

export const enterpriseProjects = [
  {
    id: 'hrms',
    tag: 'Enterprise System',
    title: 'HRMS Portal',
    description: 'A centralized portal for managing human resources, payroll, and employee lifecycle within large organizations.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
    icons: ['coffee', 'database'],
    githubUrl: 'https://github.com/ashifakram'
  },
  {
    id: 'bus-reservation',
    tag: 'Logistics',
    title: 'Bus Reservation',
    description: 'High-concurrency booking platform with real-time seat tracking and secure payment integration.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop',
    icons: ['directions_bus', 'lock'],
    githubUrl: 'https://github.com/ashifakram'
  },
  {
    id: 'sebex-store',
    tag: 'E-Commerce',
    title: 'SEBEX Store',
    description: 'A full-stack e-commerce engine featuring dynamic product catalogs and order management workflows.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop',
    icons: ['shopping_cart', 'javascript'],
    githubUrl: 'https://github.com/ashifakram'
  }
];
