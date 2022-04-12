import { RiComputerLine } from "react-icons/ri";
import { IProject, IService, ISkill } from "./type";
import { BiServer } from "react-icons/bi";
import {  AiOutlineApi } from "react-icons/ai";
import {BsCircleFill, BsBook} from 'react-icons/bs'

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build scalable SPA using <b>HTML</b>, <b>CSS</b> and <b>React.js</b>",
  },
  {
    Icon: BiServer,
    title: "Backend Development",
    about: "handle database, server, api using <b>Express</b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about: "I can develop robust REST API using <b>Node API</b>",
  },
  {
    Icon: BsBook,
    title: "Eagerness to Learn",
    about: "always searching for new opportunities to stay ahead of <b>modern trends</b> and <b>achieve professional goals</b>",
  },
];

export const languages: ISkill[] = [
  {
    name: 'Python',
    level: '50%',
    Icon: BsCircleFill
  },
  {
    name: 'JavaScript',
    level: '50%',
    Icon: BsCircleFill
  },
  {
    name: 'React',
    level: '50%',
    Icon: BsCircleFill
  },
  {
    name: 'Express',
    level: '50%',
    Icon: BsCircleFill
  },
  {
    name: 'MongoDB',
    level: '50%',
    Icon: BsCircleFill
  },
  {
    name: 'HTML / CSS',
    level: '50%',
    Icon: BsCircleFill
  },
  {
    name: 'Tailwind CSS',
    level: '50%',
    Icon: BsCircleFill
  },
  {
    name: 'TypeScript',
    level: '50%',
    Icon: BsCircleFill
  },
  {
    name: 'Adobe Photoshop',
    level: '50%',
    Icon: BsCircleFill
  },

]

// export const tools: ISkill[] = [
//     {
//       name: 'Photoshop',
//       level: '50%',
//       Icon: BsCircleFill
//     },
//     {
//       name: 'Framer',
//       level: '50%',
//       Icon: BsCircleFill
//     },
// ]

export const projects:IProject[] = [
  {
    name:'Exercise Tracker',
    description: 'This app allows a user to track daily workouts on a given day',
    image_path:'/images/exercise.png',
    deployed_url: 'https://exercise-tracker290.netlify.app/',
    github_url: 'https://github.com/demuthsa/ExerciseTracker',
    skills: ['MongoDB', 'Express', 'React', 'Node.js']
  },
  {
    name:'Mapty',
    description: "This app allows you to log your running or cycling workouts by location",
    image_path:'/images/mapty.png',
    deployed_url: 'https://demuthsa.github.io/Mapty/',
    github_url: 'https://github.com/demuthsa/Mapty',
    skills: ['HTML', 'CSS', 'JavaScript', 'Leaflet']
  },
  {
    name:'Hasami Shogi',
    description: "Traditional Japanese chess game where two players clash on a 9x9 board with an objective of capturing all or eight of an opponent's pieces.",
    image_path:'/images/hasami.png',
    deployed_url: 'https://github.com/demuthsa/HasamiShogi',
    github_url: 'https://github.com/demuthsa/HasamiShogi',
    skills: ['Python']
  },
  {
    name:'Rock Paper Scissors',
    description: 'Game of rock, paper, scissors that keeps score against the computer',
    image_path:'/images/rps.png',
    deployed_url: 'https://demuthsa.github.io/Rock-Paper-Scissors/',
    github_url: 'https://github.com/demuthsa/Rock-Paper-Scissors',
    skills: ['HTML', 'CSS', 'JavaScript']
  },
  {
    name:'Temperature Converter',
    description: 'Temperature converter that converts temperatures from celcius, fahrenheit & kelvin',
    image_path:'/images/temp.png',
    deployed_url: 'https://demuthsa.github.io/Temp-converter/',
    github_url: 'https://github.com/demuthsa/Temp-converter',
    skills: ['HTML', 'CSS', 'JavaScript']
  },
]