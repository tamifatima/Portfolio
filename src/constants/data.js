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
  avatar: '/assests/profile pic.jpeg',
  linkedin: 'https://www.linkedin.com/in/tahreem-fatima-3b1290294?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  stats: [
    { num: '3.74', label: 'CGPA' },
    { num: '10+', label: 'Projects' },
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
    github: 'https://github.com/tamifatima/Al-Hijama-Medical-Centre.git',
    demo: '#',
  },
  {
    num: '02',
    title: 'SQE — Doccano Testing & Automation',
    emoji: '🔍',
    gradient: 'from-blue-600 to-cyan-500',
    description: 'End-to-end software quality assurance on an open-source web application. Deployed with Docker, performed UI automation, API testing, performance & load testing, security scanning, and code quality analysis.',
    stack: ['Docker', 'Selenium', 'Postman', 'JMeter', 'OWASP ZAP', 'SonarQube'],
    github: null,
    demo: null,
  },
  {
    num: '03',
    title: 'Human Activity Recognition (ML & DL)',
    emoji: '🤖',
    gradient: 'from-pink-600 to-purple-600',
    description: 'HAR system using UCI dataset with smartphone accelerometer and gyroscope data. Implemented SVM, Random Forest, FCNN, LSTM, and GRU — comparing feature-based vs sequence-based approaches.',
    stack: ['Python', 'TensorFlow/Keras', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/tamifatima/Human-Acitivty-Recognition-Ml-Project.git',
    demo: '#',
  },
  {
    num: '04',
    title: 'OUTS — Smart Event Ticketing & Reservation Platform',
    emoji: '🎫',
    gradient: 'from-cyan-500 to-purple-600',
    description: 'Android app for event discovery, booking, host management, and admin moderation with role-based authentication, real-time Firebase synchronization, QR-based digital tickets, and analytics dashboard.',
    stack: ['Kotlin', 'Jetpack Compose', 'Firebase Auth', 'Firestore', 'Realtime Database', 'Material Design 3'],
    github: 'https://github.com/tamifatima/OUTS-Smart-Event-Ticketing-Reservation-Platform.git',
    demo: '#',
  },
  {
    num: '05',
    title: 'AI Online Quiz & Assessment System',
    emoji: '🧠',
    gradient: 'from-yellow-500 to-orange-600',
    description: 'Intelligent quiz and assessment platform with AI-powered question generation, automated grading, instant feedback, and full project management contributions for planning, risk mitigation, and sprint delivery.',
    stack: ['React 19', 'TypeScript', 'Supabase', 'PostgreSQL', 'Google Gemini AI', 'Tailwind CSS'],
    github: 'https://github.com/tamifatima/Quiz-Assessment-SPM.git',
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
    id: 'outs',
    title: 'OUTS — Social Ticketing & Event Platform',
    subtitle: 'Mobile App · SOFTEC UI/UX Competition',
    desc: 'Dual-sided event platform connecting hosts and audiences. Full UX with discovery, booking, QR access, and multi-role dashboards.',
    badge: 'Figma · Mobile App',
    accent: 'purple',
    figmaUrl: 'https://www.figma.com/design/kQVhM5ZHtkPA4b1szjRO1d/Outs-APP?node-id=165-2',
    image: '/outs-poster.png',
    features: ['Event Discovery', 'Ticket Booking', 'QR Access', 'Multi-role'],
    tags: ['Mobile UI', 'Figma', 'Competition'],
  },
  {
    id: 'creativecrew',
    title: 'CreativeCrew — SOFTEC UI/UX',
    subtitle: 'Competition Submission · FAST NUCES',
    desc: 'Figma design submitted for the SOFTEC UI/UX Design Competition showcasing advanced prototyping and visual interface craft.',
    badge: 'Figma · Competition',
    accent: 'pink',
    figmaUrl: 'https://www.figma.com/design/TxXX4itRuSCiIM8F6GlaNQ/CreativeCrew?node-id=0-1',
    image: null,
    features: ['Wireframing', 'Hi-Fi Prototype', 'Design System', 'User Research'],
    tags: ['UI/UX', 'Figma', 'SOFTEC'],
  },
  {
    id: 'educare',
    title: 'Educare — Mobile Learning App',
    subtitle: 'Mobile App Design · Figma Make',
    desc: 'Mobile education app with class scheduling, attendance marking, and student-teacher interaction flows.',
    badge: 'Figma Make · Mobile',
    accent: 'cyan',
    figmaUrl: 'https://www.figma.com/make/IRPQ74QNtNLIrAU9gx4Ky2/Mobile-App',
    image: null,
    features: ['Class Scheduling', 'Attendance', 'Student Dashboard', 'Teacher Tools'],
    tags: ['EdTech', 'Mobile UI', 'Figma Make'],
  },
]
