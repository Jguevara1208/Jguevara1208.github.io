import { 
  SiJavascript, 
  SiReact, 
  SiRedux, 
  SiNodedotjs, 
  SiSequelize, 
  SiExpress, 
  SiPython, 
  SiFlask, 
  SiPostgresql, 
  SiHtml5, 
  SiCss3, 
  SiGit, 
  SiDocker, 
  SiAmazonaws, 
  SiHeroku, } 
  from 'react-icons/si'


const header = {
  homepage: 'https://github.com/Jguevara1208?tab=repositories',
  title: 'JG.',
}

const about = {
  name: 'Jordan Guevara',
  role: 'Software Engineer',
  description:
    'I\'m a creative problem solver, debugging enthusiast, official team player, and just the right amount of scrappy',
  resume: 'https://example.com',
  photo: 'https://cdn.discordapp.com/attachments/906292935765667874/906293038601621594/74838651.jpeg',
  social: {
    linkedin: 'https://www.linkedin.com/in/jordan-guevara-a9370521a/',
    github: 'https://github.com/Jguevara1208',
    angellist: 'https://angel.co/u/jordan-guevara'
  },
}

const projects = [
  {
    name: 'Ortolan',
    description:
      'Application for professional chefs to organize menus, recipes, and projects',
    points: [
      'Engineered a dynamic form to capture/manipulate recipe information allowing for any number of sub-recipes and ingredients encapsulated in a single react component’s state which presents suggestions based on user’s previous recipes',
      'Utilized AWS S3 and browser image compression to condense user avatar and dish photo uploads effectively reducing server load to allow for image service scalability',
      'Constructed robust algorithm to categorize recipe data into an organized tree structure to allow for easy front end utilization via a Redux store used in 3 different search functionalities'
    ],
    stack: ['React/Redux', 'Flask', 'SQLAlchemy', 'AWS', 'Heroku', 'Docker'],
    sourceCode: 'https://github.com/Jguevara1208/Ortolan',
    livePreview: 'https://ortolan.herokuapp.com/',
    photo: 'https://cdn.discordapp.com/attachments/906292935765667874/906293000123068416/Ortolan-link.png'
  },
  {
    name: '!Robinhood',
    description:
      'Financial web application to buy/sell stocks, view company information, and organize watchlists (Robinhood Clone)',
    points: [
      'Designed an algorithm to convert real time stock candle data from Finnhub API, from an array of different time frame resolutions, into graphable price/time points to be fed into the Recharts in order to visualize gains/losses on individual stock/portfolio of stocks',
      'Developed a dynamic and persistent light/dark mode by assessing the percentage gain or loss of a user’s portfolio or a single asset to display corresponding color schemes via CSS3 variables',
      'Implemented custom search by frontloading all available stock names and symbols into redux to be filtered in the front end'
    ],
    stack: ['React/Redux', 'Flask', 'SQLAlchemy', 'Finnhub API', 'Recharts', 'Docker'],
    sourceCode: 'https://github.com/Jguevara1208/RobinHood',
    livePreview: 'https://notrobinhood.herokuapp.com/',
    photo: 'https://cdn.discordapp.com/attachments/906292935765667874/906293015436492840/RH-link.png'
  },
  {
    name: 'F/r',
    description:
      'Social photography website focused on film photographs. Adaptation of Flickr',
    points: [
      'Achieved 50% faster individual React component load times by restructuring API queries to prevent images above a designated resolution/restructuring a complex database query into many single responsibility querie',
      'Ensured user privacy through front and backend authentication by employing React Router and password encryption via Bcrypt, allowing users to only edit their information when logged in',
      'Generated 500+ seed photos by utilizing Unsplash API to create a more genuine user experience'
    ],
    stack: ['React/Redux', 'Express', 'Sequelize', 'postgreSQL', 'AWS', 'Heroku'],
    sourceCode: 'https://github.com/Jguevara1208/fslashr',
    livePreview: 'https://fslashr.herokuapp.com/',
    photo: 'https://cdn.discordapp.com/attachments/906292935765667874/906293031492263996/FSLASHR-LINK_1.png'
  },
]

const skills = [
  { type: 'JavaScript', logo: <SiJavascript className='skills__icon' />, percent: 100},
  { type: 'React.js', logo: <SiReact className='skills__icon' />, percent: 100},
  { type: 'Redux', logo: <SiRedux className='skills__icon' />, percent: 100},
  { type: 'Node.js', logo: <SiNodedotjs className='skills__icon' />, percent: 100},
  { type: 'Sequelize', logo: <SiSequelize className='skills__icon' />, percent: 80},
  { type: 'Express', logo: <SiExpress className='skills__icon' />, percent: 85},
  { type: 'Python', logo: <SiPython className='skills__icon' />, percent: 85},
  { type: 'Flask', logo: <SiFlask className='skills__icon' />, percent: 75},
  { type: 'PostgreSQL', logo: <SiPostgresql className='skills__icon' />, percent: 80},
  { type: 'HTML5', logo: <SiHtml5 className='skills__icon' />, percent: 90},
  { type: 'CSS3', logo: <SiCss3 className='skills__icon' />, percent: 90},
  { type: 'Git', logo: <SiGit className='skills__icon' />, percent: 80},
  { type: 'Docker', logo: <SiDocker className='skills__icon' />, percent: 70},
  { type: 'AWS', logo: <SiAmazonaws className='skills__icon' />, percent: 50},
  { type: 'Heroku', logo: <SiHeroku className='skills__icon' />, percent: 60}
]

const contact = {
  email: 'jordansacct@gmail.com',
}

export { header, about, projects, skills, contact }
