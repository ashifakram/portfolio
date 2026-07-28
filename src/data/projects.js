export const flagshipProject = {
  id: 'sahayak',
  tag: 'Google AI Hackathon • AI & Education',
  title: 'Sahayak',
  subtitle: 'Empowering educators with AI tools to simplify lesson planning, assessments, and content generation in regional languages.',
  overview: "Built for the Google AI Hackathon, Sahayak simplifies educational content creation for teachers in regional and government schools. Powered by Google Cloud Platform (GCP) APIs and Gemini API, the platform enables educators to quickly generate structured lesson plans, worksheets, and custom assessments.",
  tech: ['React', 'Node.js', 'Express.js', 'Firebase', 'Cloud Firestore', 'Gemini API', 'GCP APIs'],
  problem: 'Teachers spend considerable time manually drafting lesson plans and educational materials for regional classrooms.',
  solution: 'An intuitive web dashboard that generates customized lesson plans and educational content in seconds.',
  image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop',
  contributions: [
    'Developed Node.js and Express REST APIs hosted on GCP to handle Gemini API requests asynchronously.',
    'Integrated Firebase OAuth 2.0 authentication and Cloud Firestore database for user profile and document storage.'
  ],
  challenges: 'Managing request latency during AI generation while maintaining smooth user interface responsiveness.',
  roadmap: 'Enhancing offline accessibility and expanding voice-to-text capabilities for lesson generation.',
  liveUrl: null,
  githubUrl: 'https://github.com/ashifakram'
};

export const enterpriseProjects = [
  {
    id: 'hrms',
    tag: 'Enterprise System',
    title: 'HRMS Portal',
    description: 'A web portal designed to streamline human resource workflows, employee record management, and operational reporting.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
    icons: ['coffee', 'database'],
    githubUrl: 'https://github.com/ashifakram'
  },
  {
    id: 'bus-reservation',
    tag: 'Logistics',
    title: 'Bus Reservation',
    description: 'A web booking platform featuring real-time seat availability, schedule management, and secure transaction workflows.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop',
    icons: ['directions_bus', 'lock'],
    githubUrl: 'https://github.com/ashifakram'
  },
  {
    id: 'sebex-store',
    tag: 'E-Commerce',
    title: 'SEBEX Store',
    description: 'A full-stack e-commerce application featuring interactive product catalogs, shopping cart management, and order processing.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop',
    icons: ['shopping_cart', 'javascript'],
    githubUrl: 'https://github.com/ashifakram'
  }
];
