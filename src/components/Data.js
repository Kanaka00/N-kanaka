
import Xoxo from "../assets/XOXO.jpg"
import Web from "../assets/Web.jpg"
import Rock from "../assets/Rock.jpg"
import { 
  Lightbulb, Heart, Target, Trophy, Handshake, Rocket, 
  Book, Code2, Globe, Palette, Monitor, GitBranch, Image, User 
} from 'lucide-react';


export const skills = [
  { title: "JavaScript", icon: Code2, description: "  JavaScript adds interactivity to a webpage, enabling features like animations, form validation, and dynamic content.  " },
  { title: "HTML", icon: Globe, description:` HTML is used to structure content on a webpage, defining elements like headings, paragraphs, images, and links.  ` },
  { title: "CSS", icon: Palette, description:` CSS makes designs responsive with media queries, adjusting styles for different screen sizes. Flexbox and Grid help arrange content, while viewport units scale elements based on screen size"` },
{title:"React" , icon:Monitor, description:` 
React is a JavaScript library used for building user interfaces, particularly for single-page applications. It allows developers to create reusable UI components that manage their own state, making the development process more efficient and dynamic. `} ,
{title:"Git", icon:GitBranch, description:`Git is a version control system used to track changes in source code. It allows multiple developers to collaborate, manage different versions of code, and maintain an efficient workflow.`},
{title:"UI/UX", icon:Image, description:"UI/UX (User Interface/User Experience) design focuses on creating visually appealing and user-friendly interfaces. UI design deals with the layout and look, while UX design ensures a smooth, intuitive experience for the user."} ];

export const projects = [
  { title: "Website", image: Web, description: "Creating a fully functional website involves combining front-end and back-end development to deliver a seamless user experience. The site includes features like responsive design, dynamic content, and interactive elements, ensuring it works effectively on all devices and platforms." ,
    codelink:"", 
    visitlink:""
  },
  { title: "Rock, Paper, Scissors ", image: Rock, description: `Rock-Paper-Scissors is a quick, two-player game where one player competes against the computer. Each chooses Rock, Paper, or Scissors, and the winner is determined by simple rules: Rock beats Scissors, Scissors beats Paper, and Paper beats Rock. It's a fun mix of chance and quick decisions.` , 
    codelink:"hello world", 
    visitlink:""},
  { title: "XOXO Game", image: Xoxo, description: "Tic-Tac-Toe is a simple two-player game where players take turns marking X or O on a 3x3 grid. The goal is to align three of their marks horizontally, vertically, or diagonally. This project uses HTML for structure, CSS for styling, and JavaScript for interactive gameplay, making it fully responsive and engaging." ,
    codelink:"mic",
    visitlink:""},
];

// {icon, cource, college, description,  date})

export const education = [
  {
    icon: Book,
    date:`2015-2020`, cource:`English mediem vocational` , college:`ZPHS Boys school`, description:`Acquired good grades in 95% and 97% respectively`},
  {
    icon: User,
    date:`2020-2022`, cource:`Civics Economics Commerece` , college:`Ap Model College `, description:`Specialized In Civics Commerece Economics`},
  {
    icon:Code2,
    date:`2022-2025`, cource:`Communication` , college:`Sri Harshini Degree College`, description:`Currently pursuing a Bachelor's degree in Communication, focusing on media, communication, and user experience.`}
]
export const goals = [
  {
    icon: Lightbulb,
    name: "Innovation",
    description: "The endless possibilities of technology to transform lives and solve real-world problems inspire me every day."
  },
  {
    icon:Heart,
    name: "Collaboration",
    description: "I believe in teamwork to achieve common goals, leveraging diverse skills and perspectives."
  },
  {
    icon: Target,
    name: "Growth",
    description: "Committed to lifelong learning, seeking opportunities to expand my knowledge and skills  projects."
  },
  {
    icon: Trophy,
    name: "Impact",
    description: "Passionate about making a meaningful impact through my work and shaping user experiences."
  },
  {
    icon: Handshake,
    name: "Passion",
    description: "Driven by creativity and technology, always seeking challenges and opportunities to innovate."
  },
  {
    icon: Rocket,
    name: "Future",
    description: "Excited about the future of technology and communication, eager to contribute to impactful projects."
  }

];
export const resumeprojects = [
  {
    title:"Personal Portfolio Website",
    item1:"React",
    item2:"Javascript",
    item3:"Css",
    listpoint:"Development a modern website showing project and skills",
    listpoint2:"implemented responsive design for optimal viewing across all devices",
    listpoint3:"Integrated contact from and project shocase sections"

  },
  {
    title:"Tic-tac-toe Game",
    item1:"React",
    item2:"Javascript",
    item3:"Css",
    listpoint:"Built an Interactive Tic-Tac-toe Game with JavaScript",
    listpoint2:"implemented responsive design for optimal viewing across all devices",
    listpoint3:"implented game logic and with algorithms"

  },
  {
    title:"Fully functional website",
    item1:"React",
    item2:"Javascript",
    item3:"Css",
    listpoint:"Created a fully functional website with front-end and back-end development",
    listpoint2:"implemented responsive design for optimal viewing across all devices",
    listpoint3:"Integrated dynamic content and interactive elements"

  }
]

