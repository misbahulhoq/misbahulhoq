export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Arban Public School.',
    desc: "A school management system which has automated the school's day to day activities. These includes: result card printing, attendance tracking.No longer old days of manual work. The system is built with Next.js, Tailwind CSS, TypeScript, Redux Toolkit, Mongodb, Nodejs, Expressjs. ",
    subdesc:
      'It took about 100 hours to complete the project. Still I am working on it to introduce some new features.',
    href: 'https://arbanpublicschool.vercel.app/',
    frontRepo: 'https://github.com/misbahulhoq/arbanpublicschool',
    backRepo: 'https://github.com/misbahulhoq/api-arbanpublicschool ',
    texture: '/textures/project/arban-public-school.png',
    logo: '/assets/arban-public-school-logo.jpg',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/mezbah-skills/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/mezbah-skills/tailwind.svg',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/mezbah-skills/typescript.svg',
      },
      {
        id: 4,
        name: 'Nodejs',
        path: '/mezbah-skills/node.svg',
      },
      {
        id: 5,
        name: 'ExpressJS',
        path: '/mezbah-skills/express.png',
      },
      {
        id: 6,
        name: 'Nodejs',
        path: '/mezbah-skills/mongodb.svg',
      },
    ],
  },
  {
    title: 'TuitionBatch.',
    desc: 'Tuitionbatch app is a simple yet powerful app that helps to track attendance of students. A very user friendly app. Any teacher can login with google and start working on it.',
    subdesc: 'It took about 20 hours to complete the project. I am still trying to add some new features.',
    href: 'https://tuitionbatch.vercel.app',
    frontRepo: 'https://github.com/misbahulhoq/tuitionbatch',
    backRepo: 'https://github.com/misbahulhoq/api-tuitionbatch',
    texture: '/textures/project/tuition-batch.png',
    logo: '/assets/tuitiontabatch-logo.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Nextjs',
        path: '/mezbah-skills/next.png',
      },
      {
        id: 5,
        name: 'Nodejs',
        path: '/mezbah-skills/node.svg',
      },
      {
        id: 6,
        name: 'Express',
        path: '/mezbah-skills/express.png',
      },
      {
        id: 7,
        name: 'Mongodb',
        path: '/mezbah-skills/mongodb.svg',
      },
    ],
  },
  {
    title: 'Gamezone',
    desc: 'A react app where there is a lot of games listed. I used an open source api named rawg.io to create this app. I used React, ChakraUI. This project has search functionality, theme switcher, filtering . ',
    subdesc:
      'About 50 hours were needed to create this project. Because this was the first project which I created with react.',
    href: 'https://game-zone-eight.vercel.app',
    texture: '/textures/project/game-zone.png',
    logo: '/assets/react.svg',
    frontRepo: 'https://github.com/misbahulhoq/gamezone',
    logoStyle: {
      backgroundColor: '#101010',
      background:
        'linear-gradient(0deg, #101010, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.65 : isMobile ? 0.65 : 1.2,
    deskPosition: isMobile ? [0.68, -2.1, 0] : [0.25, -3.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'TechJoule',
    pos: 'Front-end Developer',
    duration: 'May,2024 - March,2025',
    title:
      'I worked as a front-end developer at this company. I worked with nextjs, react, next-auth. Helped the company to launch a new business.',
    icon: '/assets/techjoule-logo.png',
    logoStyle: 'rounded-md',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Nourish Poultry & Hatchery',
    pos: 'Delivery Assistant',
    logoStyle: 'rounded-md',
    duration: 'August,2022 - December, 2023',
    title:
      'I worked as a delivery assistant at this company. I used to create delivery slips, track orders, and manage inventory. I also helped the company to increase their profit.',
    icon: '/assets/nourish-logo.jpeg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Arban Public School',
    pos: 'Math Teacher',
    duration: 'January,2024 - Present',
    title:
      'Used to teach math to students from class 8 to 10. Created a web app for the school. Reduced work load by 50%.',
    icon: '/assets/arban-public-school-logo.jpg',
    logoStyle: 'rounded-md',
    animation: 'salute',
  },
];
