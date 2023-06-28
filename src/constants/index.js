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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ethersjs,
  hardhat,
  solidity,
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
    title: "Blockchain Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Ethers js",
    icon: ethersjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
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
    name: "hardhat",
    icon: hardhat,
  },
];

const experiences = [
  {
    title: "Solidity Development",
    company_name: "*****",
    icon: solidity,
    iconBg: "#383E56",
    date: "",
    points: [
      "Proficient in developing smart contracts using Solidity programming language.",
      "Proficient in writing efficient and secure Solidity code.",
      "Conducted thorough testing and debugging of Solidity smart contracts to ensure functionality and security.",
      "Stayed updated with the latest advancements in Solidity.",
      "Implemented secure payment systems and escrow services using Solidity smart contracts.",
    ],
  },
  {
    title: "React Development",
    company_name: "*****",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Developed user-friendly and responsive interfaces using React.js for blockchain applications.",
      "Integrated blockchain data and functionalities into React.js applications using libraries such as Ethers.js",
      "Worked on building decentralized applications (dApps) with React.js, incorporating features like wallet connections, transaction management, and blockchain interaction.",
      "Ensured cross-browser compatibility and implemented responsive design principles in React.js applications.",
    ],
  },
  {
    title: "Ethers.js",
    company_name: "*****",
    icon: ethersjs,
    iconBg: "#383E56",
    date: "",
    points: [
      "Utilized Ethers.js library for seamless interaction with Ethereum blockchain networks.",
      "Integrated Ethers.js into decentralized applications (dApps) for transaction handling, data querying, and wallet connectivity.",
      "Deployed and interacted with smart contracts using Ethers.js, including invoking methods and handling events.",
      "Integrated Ethers.js with front-end frameworks like React.js to build user-friendly and responsive blockchain interfaces.",
      "Implemented wallet connectivity using Ethers.js, enabling secure transactions via Ethereum wallets such as MetaMask.",
      "Worked with Ethereum standards such as ERC20, ERC721 (NFT) using Ethers.js to interact with tokens and non-fungible assets on the blockchain.",
      "Conducted testing and debugging of Ethers.js functionality to ensure reliable and secure integration with Ethereum blockchain networks.",
    ],
  },
  {
    title: "javaScript",
    company_name: "*****",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Proficient in JavaScript, the primary programming language used in to intract with blockchain.",
      "Implemented client-side functionalities and user interfaces for decentralized applications (dApps) using JavaScript.",
      "Integrated JavaScript libraries and APIs to interact with blockchain networks, handle transactions, and query blockchain data.",
      "Utilized JavaScript for implementing blockchain-related functionalities such as wallet connectivity, transaction signing, and event handling.",
      "Conducted thorough testing and debugging of code to ensure robustness and functionality in blockchain applications.",
    ],
  },
  {
    title: "Three.js",
    company_name: "*****",
    icon: threejs,
    iconBg: "#383E56",
    date: "",
    points: [
      "Utilized Three.js library for creating and rendering 3D graphics in web browsers.",
      "Implemented user interactions and controls using Three.js, allowing users to navigate and interact with 3D blockchain visualizations.",
      "Implemented Three.js to build immersive and interactive 3D visualizations for Portfolio Website.",
    ],
  },
  {
    title: "Hardhat",
    company_name: "*****",
    icon: hardhat,
    iconBg: "#383E56",
    date: "",
    points: [
      "Experience in using Hardhat, a popular development framework for building and testing blockchain applications.",
      "Utilized Hardhat for smart contract development, deployment, and testing.",
      "Configured and customized the development environment using Hardhat to streamline the blockchain development workflow.",
      "Integrated Hardhat with other tools and libraries, such as Ethers.js, for seamless interaction with the blockchain.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
