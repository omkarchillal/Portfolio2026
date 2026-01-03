import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  firebase,
  NDsofttech,
  SYNCinterns,
  crio,
  tripguide,
  threejs,
  messengerApp,
  weatherApp
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Intern",
    company_name: "SYNC interns",
    icon: SYNCinterns,
    iconBg: "#383E56",
    date: "March 2023 - April 2023",
    points: [
      "Developed 5+ dynamic, responsive web pages using React.js, improving load performance by 25%.",
      "Refactored React components to achieve 15% faster rendering and enhanced scalability across modules.",
      "Implemented state management using Hooks and Context API, reducing redundant code by 20%.",
      "Optimized UI responsiveness across devices, ensuring 100% cross-browser compatibility.",
      "Collaborated with a team of developers in Agile sprints, reducing bug resolution time by 30%.",
      "Enhanced application accessibility and usability, leading to a 20% improvement in user experience ratings based on user feedback."
    ],

  },
  {
    title: "Software Development Intern",
    company_name: "Crio.Do",
    icon: crio,
    iconBg: "#E6DEDD",
    date: "February 2024 - January 2025",
    points: [
      "Built industry-grade full-stack and frontend applications using modern JavaScript and React.",
      "Developed QTIFY using React.js with advanced UI features and a modular CSS architecture.",
      "Created QKart Frontend implementing form handling, controlled components, and robust REST API integration.",
      "Built multiple responsive applications including XBoard, QTripDynamic, QTripStatic, XCruise, and XProfile using HTML, CSS, Bootstrap, and JavaScript.",
      "Strengthened expertise in React Hooks, state management, API interaction, responsive design, and modern UI best practices."
    ],

  },
  {
    title: "SDE Trainee",
    company_name: "NDsofttech Solutions",
    icon: NDsofttech,
    iconBg: "#E6DEDD",
    date: "October 2025 - Present",
    points: [
      "Developed a major MERN Stack Messenger App implementing real-time communication using Socket.IO, user authentication, and media sharing features.",
      "Built a Crypto Miner Android application using React Native, focusing on performance optimization and responsive UI.",
      "Developed the 'Age of Swords' React Native game by adapting an existing web-based game into a high-performance mobile version.",
      "Created the Android game 'Tap the Number in Sequence' using React Native, implementing complete game logic and interactive UI components.",
      "Gained strong experience in full-stack integration, mobile app development, and production-level project delivery."
    ],

  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Messenger App",
    description:
      "A real-time chat application that enables users to communicate through instant messaging, voice messages, and photo sharing. Built with a focus on performance, security, and seamless user experience, supporting fast and reliable conversations across devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "nodeJS",
        color: "violet-text-gradient",
      },
      {
        name: "Socket.io",
        color: "orange-text-gradient",
      },
    ],
    image: messengerApp,
    source_code_link: "https://messenger-app-theta-one.vercel.app/",
  },
  {
    name: "Weather App",
    description:
      "A responsive React.js application that provides real-time weather updates using the OpenWeather API, featuring location-based weather detection, city search, and a 7-day forecast. Includes network type detection to enhance reliability and delivers a smooth experience across devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "NetworkInformationAPI",
        color: "green-text-gradient",
      },
      {
        name: "OpenWeatherAPI",
        color: "orange-text-gradient",
      },
      {
        name: "GeoDB",
        color: "violet-text-gradient",
      },
    ],
    image: weatherApp,
    source_code_link: "https://omkarchillal.github.io/React_weather_app/",
  },
  {
    name: "Crypto Miner",
    description:
      "A React Native crypto mining app with wallet-based passwordless login, real-time mining cycles, configurable rewards, and smooth claim flow. Features monetization via rewarded ads, referrals with bonuses, leaderboards, notifications, and a cloud-hosted admin backend for complete system management.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJS",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "googleads",
        color: "orange-text-gradient",
      },
      {
        name: "notifee",
        color: "violet-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
