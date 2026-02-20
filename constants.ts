
import { Project, Experience, Skill, Service, Poster } from './types';
import bunaAdminDashboardImage from './picture/image copy.png';
import bunaHomepageImage from './picture/image.png';

export const SERVICES: Service[] = [
  { id: 1, title: 'Full-Stack Web Dev', description: 'Architecting end-to-end web applications with modern frameworks like React and Node.js.', icon: 'fa-code' },
  { id: 2, title: 'System Development', description: 'Building high-performance, low-level software and internal system tools in C and Python.', icon: 'fa-gears' },
  { id: 3, title: 'API & Microservices', description: 'Designing robust REST and GraphQL APIs to power complex distributed systems.', icon: 'fa-network-wired' },
  { id: 4, title: 'Database Architecture', description: 'Optimizing data flow and storage with SQL and NoSQL solutions for high scalability.', icon: 'fa-database' },
  { id: 5, title: 'DevOps & Deployment', description: 'Streamlining CI/CD pipelines and managing cloud infrastructure for seamless scaling.', icon: 'fa-cloud-arrow-up' },
  { id: 6, title: 'Security Engineering', description: 'Integrating security protocols at the system level to protect against vulnerabilities.', icon: 'fa-shield-halved' },
];

export const SKILLS: Skill[] = [
  { id: 1, title: 'React', description: 'Advanced UI component architecture and state management.', icon: 'fa-brands fa-react', color: '#61DAFB' },
  { id: 2, title: 'Node.js', description: 'Scalable backend services and real-time event loops.', icon: 'fa-brands fa-node-js', color: '#339933' },
  { id: 3, title: 'TypeScript', description: 'Strictly typed JavaScript for enterprise-grade safety.', icon: 'svg-typescript', color: '#3178C6' },
  { id: 4, title: 'Python', description: 'Data processing, automation scripts, and rapid prototyping.', icon: 'fa-brands fa-python', color: '#3776AB' },
  { id: 5, title: 'C Programming', description: 'Low-level memory management and system-level performance.', icon: 'svg-c', color: '#A8B9CC' },
  { id: 6, title: 'C++', description: 'High-performance computing and systems architecture.', icon: 'svg-cpp', color: '#00599C' },
  { id: 7, title: 'Rust', description: 'Memory-safe systems programming and WASM high-speed tools.', icon: 'fa-brands fa-rust', color: '#DEA584' },
  { id: 8, title: 'Go', description: 'Concurrent backend services and cloud-native toolsets.', icon: 'fa-brands fa-golang', color: '#00ADD8' },
  { id: 9, title: 'Java', description: 'Enterprise-grade backend systems and JVM optimization.', icon: 'fa-brands fa-java', color: '#007396' },
  { id: 10, title: 'PostgreSQL', description: 'Relational data modeling and complex query optimization.', icon: 'svg-postgresql', color: '#4169E1' },
  { id: 11, title: 'Docker', description: 'Containerization for consistent deployment environments.', icon: 'fa-brands fa-docker', color: '#2496ED' },
  { id: 12, title: 'AWS', description: 'Cloud infrastructure management and serverless scaling.', icon: 'fa-brands fa-aws', color: '#FF9900' },
];

export const EXPERIENCES: Experience[] = [
  { id: 3, role: 'B.Sc. Electrical and Computer Engineering', company: 'Addis Ababa University', date: '2024 - Present', description: 'Currently a 5th year student, focusing on electrical and computer engineering fundamentals and research.', icon: 'fa-graduation-cap' },
  { id: 2, role: 'Software Engineer (Systems)', company: 'INSA', date: 'Present', description: 'Developing secure systems and infrastructure for national projects.', icon: 'fa-shield-halved' },
  { id: 5, role: 'Scholarship System Developer & Admin', company: 'BUNA', date: 'Present', description: 'Developing and administering the BUNA scholarship management system.', icon: 'fa-graduation-cap' },
  { id: 1, role: 'Full Stack Developer & System Architect', company: 'Ayrab Tech Solution', date: 'Present', description: 'Building robust web applications and scalable backend systems for business and education.', icon: 'fa-briefcase' },
  { id: 4, role: 'Freelance Developer & Consultant', company: 'Tech Plus Engineering', date: 'Present', description: 'Freelancing and consulting on projects related to software development and engineering.', icon: 'fa-user-gear' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Buna Scholarship Platform',
    image: bunaHomepageImage,
    images: [bunaHomepageImage, bunaAdminDashboardImage],
    liveUrl: 'https://bunasm.com/',
    description: 'A full scholarship management platform for Buna Scholarship, including public scholarship discovery and an internal admin dashboard for operations.',
    tags: ['Web', 'Admin Panel', 'Education'],
    category: 'Web',
    features: [
      'Student application intake and scholarship listing management',
      'Role-based admin workflows for students, applications, and reports',
      'Content and communication modules for blogs, notifications, and documents'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    achievements: [
      'Unified public website and internal dashboard experience',
      'Improved admin visibility with quick-action and activity views',
      'Live production deployment at bunasm.com'
    ]
  },
  {
    id: 2,
    title: 'Enterprise CMS Engine',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    description: 'A modular content management system built for high-scale enterprise operations.',
    tags: ['Web', 'Architecture', 'Enterprise'],
    category: 'Web',
    features: ['Dynamic schema modeling', 'Role-based access control', 'Asset optimization engine'],
    techStack: ['TypeScript', 'MongoDB', 'Docker'],
    achievements: ['40% reduction in server response time', 'Automated backup systems']
  },
  {
    id: 3,
    title: 'Binary Dissection Suite',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop',
    description: 'Advanced system tool for binary analysis and software integrity verification.',
    tags: ['C', 'Systems', 'Tooling'],
    category: 'System',
    features: ['ELF format parsing', 'Entropy analysis', 'Symbolic execution mapping'],
    techStack: ['C99', 'SQLite', 'Shell Scripting'],
    achievements: ['Integrated into INSA internal workflows', 'High-performance parsing']
  }
];

export const POSTERS: Poster[] = [
  { id: 1, title: 'CYBERPUNK EVENT', url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, title: 'SYSTEM_UPGRADE', url: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1974&auto=format&fit=crop' },
  { id: 3, title: 'NEURAL_NETWORK_V3', url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop' },
  { id: 4, title: 'BINARY_HORIZON', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop' },
];
