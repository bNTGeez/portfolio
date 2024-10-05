import project1 from "../assets/projects/chatbot.jpg";
import project2 from "../assets/projects/notesAI.jpg";

export const HERO_CONTENT = `I am a developer with a passion to create web applications. My goal is to create helpful applications and deliver exceptional user experiences.`;

//I am an upcoming software engineer honing my skills in HTML/CSS, Javascript, and ReactJS

export const ABOUT_TEXT = `I am a dedicated developer with a passion for creating efficient and user-friendly web applications. I have experience in HTML/CSS, Javascript and ReactJS. My journey in web development began with wondering how I was able to click a button and everything just magically appeared. Outside of coding, I enjoy going to the gym and watching kdramas.`;

export const EXPERIENCES = [{}];

export const PROJECTS = [
  {
    title: "Chatbot",
    description:
      "chat bot to provide accurate and timely answers to JavaScript related questions",
    technologies: ["Next.js", "Pinecone", "OpenAI", "Material-UI", "Vercel"],
    github: "https://github.com/bNTGeez/chatbot",
    image: project1
  },
  {
    title: "NotesAI",
    description:
      "A bot that generates video summaries based on YouTube Video IDs",
    technologies: ["Next.js", "OpenAI", "Material-UI", "TailwindCSS"],
    github: "https://github.com/bNTGeez/NotesAI",
    image: project2
  },
];

export const CONTACT = {
  email: "tangbenjamin123@gmail.com",
};
