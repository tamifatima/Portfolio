export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Awards', href: '#certifications' },
  { label: 'Design', href: '#showcase' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export const PERSONAL = {
  name: 'Tahreem Fatima',
  title: 'Software Engineer | Full-Stack Developer | UI/UX Designer',
  tagline: 'Building Scalable Systems, Beautiful Interfaces, and Intelligent Solutions',
  bio: 'Software Engineering undergraduate with strong foundations in full-stack web development, UI/UX design, software architecture, quality engineering, and scalable systems. Passionate about designing reliable, maintainable software and continuously learning modern technologies.',
  location: 'Lahore, Pakistan',
  email: 'tahreemf274@gmail.com',
  phone: '0321 9444472',
  github: 'https://github.com/tahreemfatima',
  linkedin: 'https://linkedin.com/in/tahreemfatima',
  stats: [
    { num: '3.74', label: 'CGPA' },
    { num: '3+', label: 'Projects' },
    { num: '5+', label: 'Awards' },
    { num: '2', label: 'TA Roles' },
  ],
}

export const SKILLS = [
  {
    category: 'Languages & Frameworks',
    color: 'purple',
    tags: ['C', 'C++', 'C#', 'Python', 'SQL (Oracle)', 'JavaScript', 'HTML', 'CSS',
      'Bootstrap', 'ADO.NET', 'ASP.NET Core Web API', 'Microservices', 'REST APIs',
      'MVC', 'Kotlin', 'Blazor', 'RabbitMQ'],
  },
  {
    category: 'Software Engineering',
    color: 'blue',
    tags: ['Full-Stack .NET', 'Android Dev', 'MVC & Microservices', 'SPA (Blazor)',
      'Design Patterns (GoF)', 'Database Design', 'Algorithms', 'Computer Networks',
      'Machine Learning', 'Software Quality Engineering', 'Security Testing', 'Deployment Strategies'],
  },
  {
    category: 'Tools & Platforms',
    color: 'pink',
    tags: ['Figma', 'Canva', 'Docker', 'Selenium', 'Postman', 'JMeter',
      'Cypress', 'SonarQube', 'OWASP ZAP', 'Vale', 'RedPen', 'Jira', 'Infinity', 'MS Project'],
  },
  {
    category: 'Soft Skills',
    color: 'cyan',
    tags: ['Leadership', 'Communication', 'Teamwork', 'Problem Solving',
      'Critical Thinking', 'Time Management', 'Accountability'],
  },
]

export const PROJECTS = [
  {
    num: '01',
    title: 'Hijama Clinic Appointment Booking System',
    emoji: '🏥',
    gradient: 'from-purple-600 to-blue-600',
    description: 'Full-stack web application for managing Hijama clinic appointments with secure authentication, role-based authorization, real-time notifications, patient booking system, and admin dashboard with real-time statistics.',
    stack: ['ASP.NET Core MVC', 'Entity Framework Core', 'SQL Server', 'SignalR', 'Identity'],
    github: '#',
    demo: '#',
  },
  {
    num: '02',
    title: 'SQE — Doccano Testing & Automation',
    emoji: '🔍',
    gradient: 'from-blue-600 to-cyan-500',
    description: 'End-to-end software quality assurance on an open-source web application. Deployed with Docker, performed UI automation, API testing, performance & load testing, security scanning, and code quality analysis.',
    stack: ['Docker', 'Selenium', 'Postman', 'JMeter', 'OWASP ZAP', 'SonarQube'],
    github: '#',
    demo: '#',
  },
  {
    num: '03',
    title: 'Human Activity Recognition (ML & DL)',
    emoji: '🤖',
    gradient: 'from-pink-600 to-purple-600',
    description: 'HAR system using UCI dataset with smartphone accelerometer and gyroscope data. Implemented SVM, Random Forest, FCNN, LSTM, and GRU — comparing feature-based vs sequence-based approaches.',
    stack: ['Python', 'TensorFlow/Keras', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib'],
    github: '#',
    demo: '#',
  },
]

export const EXPERIENCE = [
  {
    period: 'Jan 2026 — May 2026',
    role: 'Teaching Assistant — Machine Learning',
    org: 'PUCIT, Lahore',
    color: 'purple',
    responsibilities: [
      'Conducted Machine Learning lab sessions',
      'Evaluated student quizzes, assignments, and projects',
      'Guided students on ML algorithms and implementation techniques',
      'Participated in grading, performance assessment, and academic records',
    ],
  },
  {
    period: 'Sep 2025 — Jan 2026',
    role: 'Teaching Assistant — ICT',
    org: 'PUCIT, Lahore',
    color: 'blue',
    responsibilities: [
      'Conducted lab sessions for 50+ students',
      'Evaluated quizzes and managed class activities',
      'Developed strong communication and mentoring skills',
      'Provided academic support and ensured smooth course operations',
    ],
  },
]

export const EDUCATION = [
  {
    badge: '🎓 Current',
    degree: 'BS Software Engineering',
    school: 'Punjab University College of Information and Technology (PUCIT)',
    period: '2023 — Expected 2027',
    stats: [
      { val: '3.74', label: 'CGPA / 4.00' },
      { val: '2023', label: 'Started' },
    ],
    color: 'purple',
  },
  {
    badge: '📚 Completed',
    degree: 'FSc Pre Medical',
    school: 'Punjab Group of Colleges',
    period: '2021 — 2023',
    stats: [
      { val: '999', label: 'Score / 1100' },
      { val: '90.8%', label: 'Percentage' },
    ],
    color: 'blue',
  },
]

export const CERTIFICATIONS = [
  { icon: '🏆', title: 'Code Fest 4.0', org: 'Certificate of Participation · PUCIT' },
  { icon: '🎨', title: 'SOFTEC UI/UX Design Competition', org: 'Certificate of Participation · FAST' },
  { icon: '🥇', title: 'Code Bees 2.0 — 4th Position', org: 'Certificate of Achievement · PUCIT' },
  { icon: '💻', title: 'SOFTEC Programming Competition', org: 'Certificate of Participation · FAST' },
  { icon: '🌟', title: 'Campus Ambassador', org: 'Softronix 4.0 · GCU' },
]

export const SHOWCASE = [
  {
    title: 'Clinic Booking App UI',
    desc: 'Patient-facing mobile interface for appointment scheduling',
    badge: 'Figma',
    accent: 'purple',
  },
  {
    title: 'SOFTEC UI/UX Entry',
    desc: 'Competition submission showcasing multi-screen app design',
    badge: 'Figma · Canva',
    accent: 'pink',
  },
  {
    title: 'Dashboard UX Design',
    desc: 'Admin dashboard interface with data visualization components',
    badge: 'Figma · Prototype',
    accent: 'cyan',
  },
]
