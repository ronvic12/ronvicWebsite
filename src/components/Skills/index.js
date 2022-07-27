import "./index.scss";
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {NavLink} from 'react-router-dom';
const Skills = () => {
  return (
    <>
    <h1 id ="title">MY SOFTWARE SKILLS</h1>
    <div className ="my_description">
      <p>
        I recently graduated this past June 2022 with a B.S. Computer Science Degree from the University of California Davis.
        Regards to my software skillset, I am really proficient in Python and C++. I also have prior experience with Web and Mobile development.
         </p>
      <p> Checkout my projects in  <NavLink to ="/portfolio">Portfolio</NavLink> section. Also visit me in <a href = "https://www.linkedin.com/in/ronvic-cuevas/">LinkedIn</a> hoping we can connect and chat.
    </p>
    </div>

    
  <div className="skills-page">
    

    <h1>Programming Languages</h1>
    <div className="programming">
    <ul id = "types">
      <li>Python</li>
      <li>C/C++</li>
      <li>Dart</li>
      <li>R</li>
    </ul>
    </div>
    <h1>Front-end Tools & FrameWorks (Mobile/Web Dev)</h1>
    <div className="programming">
    <ul id = "types">
      <li>HTML</li>
      <li>CSS</li>
      <li>TypeScript/JavaScript</li>
      <li>ReactJS</li>
      <li>Flutter</li>
      <li>Bootstrap</li>
      <li>Swift/SwiftUI</li>
      <li>Figma</li>
    </ul>
    </div>
    <h1>Backend tools & Databases (Mobile/Web Dev)</h1>
    <div className="programming">
    <ul id = "types">
      <li>MySQL</li>
      <li>Express.js</li>
      <li>Next.js</li>
      <li>Nest.js</li>
      <li>Node.js</li>
      <li>Firebase</li>
      <li>RethinkDB</li>
    </ul>
    </div>
    <h1>Version Control & IDE Development</h1>
    <div className="programming">
    <ul id = "types">
      <li>Git</li>
      <li>Linux(Ubuntu)</li>
      <li>UNIX</li>
      <li>Visual Studio Code</li>
      <li>Android Studio</li>
      <li>Xcode</li>
      <li>Rstudio</li>
    </ul>
    </div>
    
    </div>
    </>
  );
};

export default Skills;