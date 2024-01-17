import frontend from "../assets/icons8-browser-100.png";
import backend from "../assets/icons8-backend-development-96.png";
import tools from "../assets/icons8-tools-100.png";
import softSkill from "../assets/icons8-communication-skills-100.png";

export const SKILLS = [
  {
    title: "Frontend",
    icon: frontend,
    skills: [
      { skill: "HTML5", percentage: "80%" },
      { skill: "CSS3(Sass/SCSS)", percentage: "90%" },
      { skill: "JavaScript", percentage: "75%" },
      { skill: "React.js", percentage: "80%" },
    ],
  },
  {
    title: "Backend",
    icon: backend,
    skills: [
      { skill: "Node.js", percentage: "70%" },
      { skill: "Express.js", percentage: "65%" },
    ],
  },
  {
    title: "Tools",
    icon: tools,
    skills: [
      { skill: "Git & GitHub", percentage: "85%" },
      { skill: "Visual Studio Code", percentage: "75%" },
      { skill: "Webpack", percentage: "60%" },
      { skill: "Responsive Design", percentage: "70%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: softSkill,
    skills: [
      { skill: "Problem Solving", percentage: "80%" },
      { skill: "Collaboration", percentage: "85%" },
      { skill: "Attention to Detail", percentage: "75%" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Senior Frontend Developer at Tech Innovators",
    date: "January 2022 - Present",
    responsibilities: [
      "Lead a team of frontend developers in the redesign of the company's flagship product, resulting in a 30% increase in user satisfication.",
      "Implemented advanced CSS animations and transitions to enhance the overall user experience.",
      "Collaborated with UX/UI designers to translate wireframes and mockups into responsive and interactive web application.",
      "Introduced and integrated Vue.js into the tech stack, improving code maintainability and development efficiency.",
    ],
  },
  {
    title: "Junior Web Developer at Digital Solution",
    date: "January 2020 - December 2021",
    responsibilities: [
      "Developed and maintained client websites, ensuring high-quality standards and timely project delivery.",
      "Implemented SEO best practice, leading to a 25% increase in organic search traffic for key clients.",
      "Worked closely with the design team to create pixle-perfect, cross-browser-compatible web pages.",
      "Conducted code reviews and mentored junior developer in adopting best coding practices.",
    ],
  },
  {
    title: "Frontend Intern at Web Studio",
    date: "May 2019 - August 2019",
    responsibilities: [
      "Assisted in the development of a new e-commerce platform, contributing to the implementation of frontend features using React.js.",
      "Conducted performance optimization tasks, resulting in a 15% improvement in page load times.",
      "Participated in daily stand-up meetings and collaborated with senior developers to troubleshoot and resolve coding issues.",
      "Gained hands-on experience with version control systems, specifically Git, in a collaborative development environment.",
    ],
  },
];
