/**
 * Central portfolio data — generated from Erick Lusungu Msola's resume and portfolio documents.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Erick Lusungu Msola',
  displayName: 'Erick Msola',
  firstName: 'ERICK',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'AN ERICK MSOLA ORIGINAL',
  role: 'Business IT Specialist & Systems Analyst',
  tagline: ['Business IT', 'Systems & Networks', 'Finance & Cybersecurity'],
  intro:
    'A Bachelor of Business Information Technology graduate from the University of Dar es Salaam with practical experience in systems administration, ICT technical troubleshooting, cybersecurity business development, and enterprise finance operations across PwC, GCLA, and Infosec.',
  location: 'Dar es Salaam, Tanzania',
  email: 'erickmsolla0@gmail.com',
  phone: '+255 623 700 877 | +255 704 017 917',
  links: {
    github: 'https://github.com/Msollajr5',
    instagram: 'https://www.instagram.com/official_msollajr',
    whatsapp: 'https://wa.link/91cxgk',
    threads: 'https://www.threads.net/official_msollajr',
    tiktok: 'https://www.tiktok.com/@msollajr',
    facebook: 'https://www.facebook.com/ericques.msollah?mibextid=LQQJ4d',
    snapchat: 'https://www.snapchat.com/add/msollajr',
    linktree: 'https://linktr.ee/Msollajr',
  },
  resumePdf: '/assets/Erick_L_Msola_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Erick Lusungu Msola',
  },
  interests: [
    'Technology-Driven Business Solutions',
    'Systems Administration & Cloud',
    'Cybersecurity & Risk Management',
    'Enterprise IT Architecture & Finance',
  ],
};

export const education = [
  {
    school: 'University of Dar es Salaam',
    place: 'Dar es Salaam, Tanzania',
    degree: 'Bachelor of Business Information Technology',
    period: '2023 – 2026',
    score: 'BBIT Graduate',
  },
  {
    school: 'Arusha Technical College',
    place: 'Arusha, Tanzania',
    degree: 'Ordinary Diploma in Information Technology',
    period: '2020 – 2023',
    score: 'Diploma Graduate',
  },
  {
    school: 'Padre Pio Secondary School',
    place: 'Tanzania',
    degree: 'Certificate of Secondary Education (O-Level)',
    period: '2016 – 2019',
    score: 'CSEE Division I/II',
  },
];

export const experience = [
  {
    company: 'PricewaterhouseCoopers (PwC)',
    role: 'Finance Associate',
    place: 'Dar es Salaam, Tanzania',
    period: 'Sept 2026 – Present',
    points: [
      'Executes corporate financial operations and enterprise data analytics within one of the Big Four professional services firms.',
      'Applies systems administration and data validation methodologies to audit workflows, corporate schedules, and internal controls.',
      'Collaborates with advisory and cross-functional teams to streamline business processes and uphold stringent data confidentiality.',
    ],
  },
  {
    company: 'Infosec',
    role: 'Cyber Security Business Development Specialist',
    place: 'Dar es Salaam, Tanzania',
    period: 'Jul 2026 – Sept 2026',
    points: [
      'Spearheaded business development and technical client consultations for enterprise cybersecurity and defensive solutions.',
      'Evaluated organizational threat landscapes and structured risk mitigation blueprints tailored to client business infrastructure.',
      'Bridged cyber defense technical requirements with executive corporate strategy, risk governance, and regulatory standards.',
    ],
  },
  {
    company: 'Government Chemist Laboratory Authority (GCLA)',
    role: 'IT Support & Systems Environment (Practical Training)',
    place: 'Dar es Salaam, Tanzania',
    period: 'Aug 2021 – Oct 2021 · Jul 2024 – Sept 2024 · Jul 2025 – Sept 2025',
    points: [
      'Completed three successive practical training tours maintaining mission-critical public sector laboratory IT infrastructure.',
      'Configured local area network (LAN) topologies, workstation deployments, and operating systems while preserving high system uptime.',
      'Administered relational MySQL database maintenance, automated routine backups, and provided rapid-resolution technical troubleshooting.',
    ],
  },
  {
    company: 'Mtibwa Sugar Estates Limited',
    role: 'IT Support (Practical Training)',
    place: 'Morogoro, Tanzania',
    period: 'Jul 2022 – Sept 2022',
    points: [
      'Delivered frontline hardware, software, and networking support across industrial manufacturing and administrative units.',
      'Configured operating systems, printers, and network connections while adhering to industrial safety and preventive maintenance schedules.',
      'Handled routine systems maintenance and user data handling with strict attention to corporate data confidentiality.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'ambulance-emergency-system',
    title: 'Ambulance — Emergency Response System',
    year: '2025',
    genre: 'Android • Java • Google Maps • Firebase',
    logline: 'Smart emergency ambulance booking and live GPS tracking application for Android powered by Google Maps and GeoFire.',
    stack: ['Java', 'Android SDK', 'Firebase Realtime DB', 'Google Maps API', 'GeoFire', 'FCM'],
    build: [
      'Architected a full-stack Android emergency response system connecting patients in critical situations with the nearest available ambulance drivers.',
      'Integrated GeoFire real-time geospatial queries with Google Maps SDK and Firebase Cloud Messaging for sub-second driver dispatch and continuous GPS tracking.',
    ],
    features: [
      'Real-time GPS ambulance tracking on live map via GeoFire',
      'Multi-role architecture (Patient, Driver, and Admin portals)',
      'One-tap emergency request with dynamic route calculation',
      'Instant push notifications via Firebase Cloud Messaging (FCM)',
      'Secure authentication with Email/Password & Google Sign-In',
    ],
    metrics: [
      { value: 'Real-Time', label: 'GeoFire GPS tracking' },
      { value: '<1s', label: 'driver notification alert' },
      { value: '3 Roles', label: 'Patient • Driver • Admin' },
      { value: 'SDK 24-34', label: 'Android compatibility' },
    ],
    github: 'https://github.com/Msollajr5/Ambulance',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'flow',
  },
  {
    id: 'neilos-partner-portal',
    title: 'Neilos — Enterprise Partner & Contractor Portal',
    year: '2025',
    genre: 'PHP 8.x • MySQL 8.0 • Docker • Telecom ISP',
    logline: 'Enterprise telecom and ISP contractor portal with granular 8-role RBAC, automated SLA compliance monitoring, and interactive analytics.',
    stack: ['PHP 8.x', 'MySQL 8.0', 'Docker', 'Chart.js', 'Apache', 'Tailwind/CSS'],
    build: [
      'Built an enterprise telecom/ISP contractor management platform with an 8-role granular RBAC security model and automated Service Order Form (SOF) processing.',
      'Implemented automated SLA tracking cron jobs, ticket resolution metrics, and interactive Chart.js executive dashboards containerized with Docker.',
    ],
    features: [
      'Fine-grained 8-role Role-Based Access Control (RBAC)',
      'Automated SLA compliance tracking & alert monitoring',
      'Multi-role order management, lead & ticket workflows',
      'Automated SOF (Service Order Form) Excel/PDF parsing',
      'Docker & docker-compose production-ready architecture',
    ],
    metrics: [
      { value: '8 Roles', label: 'granular RBAC access' },
      { value: 'Auto-SLA', label: 'real-time monitoring' },
      { value: '100%', label: 'Dockerized deployment' },
      { value: 'Enterprise', label: 'telecom order delivery' },
    ],
    github: 'https://github.com/Msollajr5/Neilos',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'portifolio-the-series',
    title: 'Portifolio — The Series Platform',
    year: '2026',
    genre: 'React 18 • TypeScript • Tailwind 4 • Framer Motion',
    logline: 'Cinematic streaming-inspired interactive personal portfolio featuring letterboxed opening sequence, dynamic profile tracks, and smooth scroll.',
    stack: ['React 18', 'TypeScript', 'Vite 6', 'Tailwind CSS 4', 'Framer Motion 11', 'Lenis'],
    build: [
      'Engineered a high-performance, cinematic personal portfolio styled after modern streaming entertainment platforms with responsive WebP media pipelines.',
      'Crafted custom interactive profile selection, scroll-driven parallax billboards, dynamic resume viewer, and accessible keyboard navigation.',
    ],
    features: [
      'Cinematic opening sequence with theatrical letterbox bars',
      'Multi-profile viewer switching (Erick, Recruiter, Technical, Executive)',
      'Dynamic responsive WebP portrait & OG image pipelines',
      'Lenis physics-based smooth scrolling & reduced motion support',
      'Interactive screenplay-styled resume sheet & PDF viewer',
    ],
    metrics: [
      { value: '100%', label: 'custom streaming UI' },
      { value: '60 FPS', label: 'hardware-accelerated animations' },
      { value: '4 Modes', label: 'viewer profile journeys' },
      { value: 'A11y', label: 'keyboard & motion accessible' },
    ],
    github: 'https://github.com/Msollajr5/Portifolio',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'pwc-associate',
    title: 'Finance Associate',
    org: 'PricewaterhouseCoopers (PwC)',
    detail: 'Selected into PwC, advancing financial operations, risk analysis, and corporate client engagements.',
    laurel: 'Big Four Firm',
  },
  {
    id: 'infosec-specialist',
    title: 'Cyber Security Specialist',
    org: 'Infosec',
    detail: 'Spearheaded cybersecurity business development, threat roadmaps, and client risk mitigation.',
    laurel: 'Cybersecurity',
  },
  {
    id: 'nmb-readiness',
    title: 'Graduate Banker Readiness',
    org: 'NMB Bank Plc',
    detail: 'Completed rigorous 4-month readiness certification covering banking operations, compliance, risk, and corporate finance.',
    laurel: 'Banking Readiness',
  },
  {
    id: 'gcla-placements',
    title: '3x Public Sector IT Tours',
    org: 'Government Chemist Lab Authority',
    detail: 'Trusted and recalled across three consecutive practical training tenures (2021, 2024, 2025) in IT support and systems.',
    laurel: 'Public Sector IT',
  },
  {
    id: 'dual-it-credentials',
    title: 'Dual IT Qualifications',
    org: 'UDSM & Arusha Tech College',
    detail: 'Bachelor of Business IT from University of Dar es Salaam and Ordinary Diploma in IT from Arusha Technical College.',
    laurel: 'Dual Qualifications',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'NMB Bank Plc', name: 'NMB Graduate Banker Readiness Program (2025 – 2026)', link: 'mailto:erickmsolla0@gmail.com' },
  { issuer: 'University of Dar es Salaam', name: 'Bachelor of Business Information Technology (2023 – 2026)', link: 'mailto:erickmsolla0@gmail.com' },
  { issuer: 'Arusha Technical College', name: 'Ordinary Diploma in Information Technology (2020 – 2023)', link: 'mailto:erickmsolla0@gmail.com' },
  { issuer: 'Padre Pio Secondary School', name: 'Certificate of Secondary Education Examination (CSEE)', link: 'mailto:erickmsolla0@gmail.com' },
];

export type Referee = {
  name: string;
  title: string;
  org: string;
  phone: string;
  email: string;
};

export const referees: Referee[] = [
  {
    name: 'Dr. Peter Kaaya',
    title: 'Head of ICT Department',
    org: 'Arusha Technical College',
    phone: '+255 754 993 488',
    email: 'pkaaya@atc.ac.tz',
  },
  {
    name: 'Mr. Ibrahim Mkumba',
    title: 'Technical Staff / IT Support',
    org: 'Government Chemist Laboratory Authority',
    phone: '+255 676 836 660',
    email: 'mkumbaibrahim@gmail.com',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming & Web',
    subtitle: 'Full-stack & systems programming',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'Java', mono: 'Jv' },
      { name: 'PHP', mono: 'Ph' },
      { name: 'C', mono: 'C' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'HTML & CSS', mono: 'Ht' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Data',
    subtitle: 'Relational storage & data handling',
    skills: [
      { name: 'MySQL', mono: 'My', note: 'Core DB' },
      { name: 'Data Handling', mono: 'Dh' },
      { name: 'Database Queries', mono: 'Db' },
      { name: 'Microsoft Access', mono: 'Ac' },
    ],
  },
  {
    id: 'systems',
    title: 'Systems & Networks',
    subtitle: 'Administration & technical troubleshooting',
    skills: [
      { name: 'Systems Administration', mono: 'Sa', note: 'Enterprise' },
      { name: 'Network Fundamentals', mono: 'Nf' },
      { name: 'IT Troubleshooting', mono: 'It', note: 'Hardware/OS' },
      { name: 'Systems Maintenance', mono: 'Sm' },
      { name: 'Workstation Setup', mono: 'Ws' },
    ],
  },
  {
    id: 'business',
    title: 'Business & Finance',
    subtitle: 'Operations & corporate analytics',
    skills: [
      { name: 'Financial Operations', mono: 'Fi', note: 'PwC' },
      { name: 'Banking Readiness', mono: 'Bk', note: 'NMB' },
      { name: 'Microsoft Excel', mono: 'Xl', note: 'Advanced' },
      { name: 'Microsoft Office Suite', mono: 'Of' },
      { name: 'Business Reporting', mono: 'Br' },
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Risk',
    subtitle: 'Defense strategies & risk mitigation',
    skills: [
      { name: 'Cybersecurity Strategy', mono: 'Cs', note: 'Infosec' },
      { name: 'Threat Assessment', mono: 'Ta' },
      { name: 'Risk Management', mono: 'Rm' },
      { name: 'Confidentiality & Compliance', mono: 'Cc' },
    ],
  },
  {
    id: 'professional',
    title: 'Professional Skills',
    subtitle: 'Leadership & collaboration',
    skills: [
      { name: 'Analytical & Problem-Solving', mono: 'An' },
      { name: 'Communication & Interpersonal', mono: 'Cm' },
      { name: 'Teamwork & Collaboration', mono: 'Tw' },
      { name: 'Adaptability & Quick Learning', mono: 'Ad' },
      { name: 'Time Management', mono: 'Tm' },
      { name: 'English (Professional)', mono: 'En' },
      { name: 'Swahili (Native)', mono: 'Sw' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['Business IT & Database Management', 'Degree at UDSM', 'Core Technical Skills'],
  Java: ['Degree at UDSM', 'Ordinary Diploma at ATC', 'Core Technical Skills'],
  PHP: ['Business IT & Database Management', 'Web Development'],
  C: ['Diploma at Arusha Technical College', 'Programming Fundamentals'],
  JavaScript: ['Business IT & Database Management', 'Web Development'],
  'HTML & CSS': ['Web Development', 'Business IT Portal'],
  MySQL: ['GCLA IT Support & Systems Environment', 'Business IT & Relational Database Portal'],
  'Data Handling': ['PwC Financial Operations', 'GCLA Database Maintenance', 'Mtibwa Sugar Estates'],
  'Database Queries': ['MySQL Database Management', 'UDSM BBIT Curriculum'],
  'Microsoft Access': ['Microsoft Office Suite', 'Core Technical Skills'],
  'Systems Administration': ['Government Chemist Laboratory Authority (GCLA)', 'Mtibwa Sugar Estates Limited'],
  'Network Fundamentals': ['GCLA IT Support', 'Mtibwa Sugar Estates Limited', 'Ordinary Diploma in IT'],
  'IT Troubleshooting': ['GCLA 3x Practical Training Tours', 'Mtibwa Sugar Estates Limited'],
  'Systems Maintenance': ['Enterprise Systems & Network Administration', 'GCLA & Mtibwa Sugar'],
  'Workstation Setup': ['GCLA Workstation Fleet', 'Mtibwa Sugar Estates'],
  'Financial Operations': ['PwC Finance Associate (Sept 2026 – Present)', 'NMB Graduate Banker Readiness'],
  'Banking Readiness': ['NMB Graduate Banker Readiness Program (Nov 2025 – Feb 2026)'],
  'Microsoft Excel': ['PwC Financial Modeling', 'Corporate Reporting', 'MS Office Suite'],
  'Microsoft Office Suite': ['Excel, Word, PowerPoint, Access', 'Core Technical Skills'],
  'Business Reporting': ['PwC Financial Audits', 'Infosec Security Roadmaps'],
  'Cybersecurity Strategy': ['Infosec Cyber Security Specialist (Jul 2026 – Sept 2026)'],
  'Threat Assessment': ['Infosec Vulnerability Reviews', 'Client Defense Roadmaps'],
  'Risk Management': ['PwC Internal Controls', 'Infosec Cybersecurity Solutions'],
  'Confidentiality & Compliance': ['PwC Financial Ethics', 'GCLA Forensic Data Security'],
  'Analytical & Problem-Solving': ['PwC Finance Associate', 'GCLA Systems Troubleshooting'],
  'Communication & Interpersonal': ['Infosec Business Development', 'Executive Client Presentations'],
  'Teamwork & Collaboration': ['PwC Multidisciplinary Teams', 'GCLA Laboratory Staff Support'],
  'Adaptability & Quick Learning': ['Transitions across Public, Industrial & Professional Services'],
  'Time Management': ['Simultaneous BBIT Academic & Professional Engagements'],
  'English (Professional)': ['Professional Working Proficiency', 'PwC & Infosec Engagements'],
  'Swahili (Native)': ['Native Language Proficiency in Tanzania'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundations',
    period: '2016 – 2023',
    synopsis: 'Secondary school education at Padre Pio, followed by an Ordinary Diploma in Information Technology at Arusha Technical College and first field placements.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Secondary Spark',
        description: 'Completed Certificate of Secondary Education (O-Level) at Padre Pio Secondary School, building mathematical and technical curiosity.',
        tags: ['O-Level', 'Padre Pio', 'Foundations'],
        runtime: '2016 – 2019',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The IT Technician',
        description: 'Earned the Ordinary Diploma in Information Technology at Arusha Technical College, mastering programming, networking, and systems maintenance.',
        tags: ['ATC', 'Diploma IT', 'Networking'],
        runtime: '2020 – 2023',
        palette: ocean,
      },
      {
        code: 'S01 E03',
        title: 'First Field Tour',
        description: 'Initial practical training tour at the Government Chemist Laboratory Authority (GCLA), troubleshooting laboratory IT and network systems.',
        tags: ['GCLA', 'IT Support', 'Public Sector'],
        runtime: 'Aug – Oct 2021',
        palette: jade,
      },
      {
        code: 'S01 E04',
        title: 'Industrial Support',
        description: 'Practical training at Mtibwa Sugar Estates Limited, managing factory and office IT support, workstations, and network printers.',
        tags: ['Mtibwa Sugar', 'Industrial IT', 'Hardware'],
        runtime: 'Jul – Sept 2022',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Business IT Acumen',
    period: '2023 – 2026',
    synopsis: 'Pursuing the Bachelor of Business Information Technology at the University of Dar es Salaam, combined with consecutive advanced tenures at GCLA.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The BBIT Scholar',
        description: 'Bachelor of Business Information Technology at the University of Dar es Salaam — integrating modern computing with business operations and strategy.',
        tags: ['UDSM', 'BBIT', 'Business IT'],
        runtime: '2023 – 2026',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'Advanced Public Placements',
        description: 'Trusted return to GCLA for consecutive IT support practical training tours in 2024 and 2025, managing systems infrastructure and MySQL databases.',
        tags: ['GCLA', 'MySQL', 'Systems Admin'],
        runtime: '2024 & 2025',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Full-Stack Spectrum',
        description: 'Mastery of C, Java, Python, PHP, JavaScript, and MySQL for robust database applications and data handling solutions.',
        tags: ['Python', 'Java', 'PHP', 'MySQL', 'JavaScript'],
        runtime: 'Core Tech',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'The Enterprise Arena',
    period: '2025 – Present',
    synopsis: 'Graduating from banking readiness, advancing cybersecurity strategies at Infosec, and stepping onto the global stage at PwC.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Banker Readiness',
        description: 'Selected for and completed the prestigious NMB Graduate Banker Readiness Program, bridging technology with modern corporate banking.',
        tags: ['NMB Bank', 'Banking Readiness', 'Finance'],
        runtime: 'Nov 2025 – Feb 2026',
        palette: amber,
      },
      {
        code: 'S03 E02',
        title: 'The Security Specialist',
        description: 'Cyber Security Business Development Specialist at Infosec — assessing client vulnerabilities and presenting actionable defense roadmaps.',
        tags: ['Infosec', 'Cybersecurity', 'Business Development'],
        runtime: 'Jul – Sept 2026',
        palette: ocean,
      },
      {
        code: 'S03 E03',
        title: 'The PwC Chapter',
        description: 'Finance Associate at PricewaterhouseCoopers (PwC) — driving financial business operations, analytics, and internal controls.',
        tags: ['PwC', 'Big Four', 'Finance Associate'],
        runtime: 'Sept 2026 – Present',
        palette: crimson,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Current Role', title: 'PwC Finance Associate', detail: 'PricewaterhouseCoopers • Finance & analytics', palette: crimson },
  { label: 'Degree', title: 'Bachelor of Business IT', detail: 'University of Dar es Salaam (2023 – 2026)', palette: ocean },
  { label: 'Cybersecurity', title: 'Infosec Specialist', detail: 'Cyber Security Business Development Specialist', palette: amber },
  { label: 'Banking Credential', title: 'NMB Graduate Banker', detail: 'Completed 4-month banker readiness program', palette: violet },
  { label: 'Public Sector IT', title: 'GCLA 3x Placements', detail: 'Government Chemist Lab Authority (2021, 2024, 2025)', palette: jade },
  { label: 'Technical Base', title: 'Ordinary Diploma in IT', detail: 'Arusha Technical College (2020 – 2023)', palette: ocean },
  { label: 'Industrial Experience', title: 'Mtibwa Sugar Estates', detail: 'IT Support & Systems Maintenance (2022)', palette: amber },
  { label: 'Relational Database', title: 'MySQL & Data Handling', detail: 'Relational design, queries, and maintenance', palette: crimson },
  { label: 'Programming Core', title: 'Python · Java · PHP', detail: 'with C, JavaScript, HTML & CSS', palette: violet },
  { label: 'Bilingual Mastery', title: 'English & Swahili', detail: 'Professional English & Native Swahili', palette: jade },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'Bachelor of Business IT',
    lines: ['University of Dar es Salaam', '2023 – 2026 · Ordinary Diploma in IT (ATC)'],
    chips: ['BBIT Graduate', 'UDSM', 'Arusha Tech College'],
  },
  {
    kicker: 'Technical Core',
    title: 'Systems & Code',
    lines: ['Python, Java, PHP, C, JavaScript · MySQL', 'Systems Administration · IT Troubleshooting · Networks'],
    chips: ['Python', 'Java', 'PHP', 'MySQL', 'Systems Admin', 'Troubleshooting'],
  },
  {
    kicker: 'Current Arc',
    title: 'PwC Finance Associate',
    lines: ['PricewaterhouseCoopers (PwC) · Sept 2026 – Present', 'Finance business operations · Enterprise analytics · Compliance'],
  },
  {
    kicker: 'Cyber Defense',
    title: 'Infosec Specialist',
    lines: ['Cyber Security Business Development Specialist', 'Enterprise threat modeling · Security roadmaps · Risk mitigation'],
  },
  {
    kicker: 'Field Placements',
    title: 'Proven in the Field',
    lines: ['3x Practical Training Tours at Government Chemist Laboratory Authority (GCLA)', 'IT Support at Mtibwa Sugar Estates Limited'],
  },
  {
    kicker: 'Banking Acumen',
    title: 'NMB Graduate Banker',
    lines: ['NMB Graduate Banker Readiness Program (Nov 2025 – Feb 2026)', 'Corporate banking operations · Risk governance · Financial systems'],
  },
  {
    kicker: 'Mission',
    title: 'Technology & Growth',
    lines: ['Contributing to organizational growth through innovation, professionalism, and continuous learning.'],
  },
];

export type ProfileId = 'erick' | 'recruiter' | 'developer' | 'executive';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'erick',
    name: 'Erick',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, experience & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Technical',
    blurb: 'Systems, projects & technical skills first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'executive',
    name: 'Executive',
    blurb: 'Business impact, finance & strategy first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & background', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'Key Productions', meta: `${projects.length} Productions • Systems & Security`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'Skill Universe', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Career Highlights', meta: `${achievements.length} Moments • ${certifications.length} Credentials`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Curriculum Vitae • View & download', palette: violet },
};
