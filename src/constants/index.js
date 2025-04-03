import project1 from "../assets/projects/chatbot.jpg";
import project2 from "../assets/projects/notesAI.jpg";
import project3 from "../assets/projects/tweeter.png";

export const HERO_CONTENT = `I am a Full Stack Developer with a passion to create web applications. My goal is to create meaningful applications that will help people.`;

export const ABOUT_TEXT = `I'm a developer who loves building web applications that make a difference. I work with modern technologies like Next.js, TypeScript, and React to create user-friendly applications. Through my projects, I've gained experience with both frontend and backend development. I enjoy learning new technologies and solving real-world problems through code. When I'm not coding, you can find me at the gym or exploring new tech.`;

export const EXPERIENCES = [
  {
    year: "July 2024 - Sept 2024",
    role: "Software Engineer Fellowship",
    company: "HeadstarterAI",
    location: "Remote",
    description:
      "Developed 5 AI projects utilizing technologies such as React.js, Next.js, RAG LangChain, Pinecone, AWS, Vercel, OpenAI, and Firebase. Integrated a RAG pipeline for a chatbot using OpenAI and Pinecone to deliver responses based on a Javascript youtube tutorial.",
    technologies: [
      "React.js",
      "Next.js",
      "LangChain",
      "Pinecone",
      "AWS",
      "Vercel",
      "OpenAI",
      "Firebase",
    ],
  },
  {
    year: "Sep 2019 - May 2021",
    role: "Frontend Developer Fellowship",
    company: "Code Nation",
    location: "San Francisco, CA",
    description:
      "Developed technical skills in web developing using Javascript, HTML CSS. Developed professional skills working alongside Senior Software Engineers.",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
];

export const PROJECTS = [
  {
    title: "Chatbot",
    description:
      "chat bot to provide accurate and timely answers to JavaScript related questions",
    technologies: ["Next.js", "Pinecone", "OpenAI", "Material-UI", "Railway"],
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
