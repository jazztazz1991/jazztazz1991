import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 7 years of hands-on experience, I have honed my skills in front-end technologies like React and TailwindCSS, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 7 years of hands-on experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep love for technology, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy video games, exploring new technologies, and teaching.`;

export const EXPERIENCES = [
  {
    year: "2021 - Present",
    role: "Teaching Assistant",
    company: "EdX",
    description: 'Assisted students in learning web development concepts and technologies, including HTML, CSS, JavaScript, React, and Node.js. Provided feedback on assignments and projects to help students improve their skills. Collaborated with instructors to create engaging and informative course content.',
    technologies: ["Javascript", "React.js", "PostgreSQL", "mongoDB", "Node.js", "Express.js"],
  },
  {
    year: "2022 - 2023",
    role: "Central Grader",
    company: "EdX",
    description: `Evaluated and graded student assignments and projects for web development courses. Provided detailed feedback to help students improve their coding skills and understanding of web development concepts. Collaborated with instructors to ensure assignments and projects were aligned with course objectives.`,
    technologies: ["Javascript", "React.js", "PostgreSQL", "mongoDB", "Node.js", "Express.js"],
  },
  {
    year: "2020 - 2022",
    role: "Cruise Sales Manager",
    company: "Expedia Cruises Lake Nona",
    description: `Managed a team of sales agents and provided training and support to help them achieve their sales targets. Developed and implemented sales strategies to drive revenue growth and increase customer satisfaction. Collaborated with marketing and product teams to launch new products and promotions.`,
    technologies: [],
  },
  {
    year: "2019 - 2024",
    role: "Real Estate Agent",
    company: "Kelly Price & Company",
    description: `Assisted clients in buying, selling, and renting residential properties. Developed marketing sites to promote high-end properties and attract potential buyers. Negotiated contracts and agreements on behalf of clients to ensure favorable terms and conditions.`,
    technologies: ["React.js", "mongoDB", "Node.js", "Express.js"],
  },
];

export const PROJECTS = [
  {
    title: "RsTracker",
    image: project1,
    description:
      "A web application for tracking the progress of a group of players in the popular MMORPG game Runescape. Features include user authentication, task assignment, and progress tracking.",
    technologies: ["React.js", "TailwindCSS", "Node.js", "MongoDB"],
  },
  {
    title: "ADHD Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking. It is designed with ADHD users in mind, with a focus on gamiphication and ease of use.",
    technologies: ["React.js", "TailwindCSS", "Node.js", "MongoDB"],
  },
  {
    title: "Parsemon",
    image: project4,
    description:
      "A web application for tracking and managing Pokemon collections. Users can create an account, add Pokemon to their collection, and view detailed information about each Pokemon.",
    technologies: ["Handlebars", "MaterializeCSS", "Node.js", "PostgreSQL"],
  },
];

export const CONTACT = {
  address: "Orlando, Florida",
  phoneNo: "+1 407.414.9770",
  email: "cchase1991@gmail.com",
};
