import project1 from "../assets/projects/chatbot.jpg";
import project2 from "../assets/projects/notesAI.jpg";
import project3 from "../assets/projects/tweeter.png";

export const HERO_CONTENT = `I am a Full Stack Developer with a passion to create web applications. My goal is to create meaningful applications that will help people`;


export const ABOUT_TEXT = `I'm a developer who loves building web applications that make a difference. I work with modern technologies like Next.js, TypeScript, and React to create user-friendly applications. Through my projects, I've gained experience with both frontend and backend development, working with tools like Clerk for authentication and integrating AI capabilities with OpenAI. I enjoy learning new technologies and solving real-world problems through code. When I'm not coding, you can find me at the gym or exploring new tech.`;

export const EXPERIENCES = [{}];

export const PROJECTS = [
  {
    title: "Chatbot",
    description:
      "chat bot to provide accurate and timely answers to JavaScript related questions",
    technologies: ["Next.js", "Pinecone", "OpenAI", "Material-UI", "Vercel"],
    github: "https://github.com/bNTGeez/chatbot",
    image: project1,
  },
  {
    title: "NotesAI",
    description:
      "A bot that generates video summaries based on YouTube Video IDs",
    technologies: [
      "Next.js",
      "Typescript",
      "OpenAI",
      "Material-UI",
      "TailwindCSS",
      "Python",
      "Flask",
    ],
    github: "https://github.com/bNTGeez/NotesAI",
    image: project2,
  },
  {
    title: "Tweeter",
    description:
      "A modern social media platform built with Next.js, TypeScript, and MongoDB. Tweeter allows users to create, share, and interact with tweets in a Twitter-like environment.",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Clerk",
      "Tailwind CSS",
      "Material-UI",
    ],
    github: "https://github.com/bNTGeez/tweeter",
    image: project3,
  },
];

export const CONTACT = {
  email: "tangbenjamin123@gmail.com",
};
