import "./index.scss";
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,faGithub,faNode,faAws,faUbuntu,faUnity,faGitAlt,fa
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from 'react-router-dom';
const Skills = () => {
  return (
    <body>   
    <h1 id ="title">TECHNOLOGY & AGILE SKILLS</h1>
    <div className="skills-page">
      <h1>Programming Languages <FontAwesomeIcon icon={faPython} color="#DD0031" /><FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
        C++ <i class="dart-icon"></i></h1>
      
      <div className="programming">
        <ul id = "types">
          <li>Python <FontAwesomeIcon icon={faPython} color="#DD0031" /></li>
          <li>Javascript <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" /></li>
          <li>C++</li>
          <li>Dart <i class="dart-icon"></i></li>
        </ul>
      </div>
      
      <h1>Web Technologies <FontAwesomeIcon icon={faHtml5} color="#F06529" /><FontAwesomeIcon icon={faCss3} color="#28A4D9" /><FontAwesomeIcon icon={faJsSquare} color="#EFD81D" /> 
      <FontAwesomeIcon icon={faReact} color="#5ED4F4" /><FontAwesomeIcon icon={faNode} color="#3c873a"/> 
      </h1>
      
      <div className="programming">
        <ul id = "types">
          <li>HTML5 <FontAwesomeIcon icon={faHtml5} color="#F06529" /> </li>
          <li>CSS3 <FontAwesomeIcon icon={faCss3} color="#28A4D9" /> </li>
          <li>Javascript <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" /> </li>
          <li>RESTful API</li>
          <li>React <FontAwesomeIcon icon={faReact} color="#5ED4F4" /> </li>
          <li>NodeJS <FontAwesomeIcon icon={faNode} color="#3c873a"/> </li>
        </ul>
      </div>
      
      <h1>FrameWorks & CI/CD</h1>
      <div className="programming">
        <ul id = "types">
          <li>ExpressJS</li>
          <li>Flutter</li>
          <li>ASP.NET</li>
          <li>Vercel</li>
        </ul>
      </div>
      
      <h1>Databases<i class="fa-solid fa-database" color="#3c873a"></i></h1>
      
      <div className="programming">

        <h1>Database Management</h1>
        <div className="programming">
          <ul id = "types">
            <li>MYSQL</li>
            <li>SQLITE3</li>
            <li>Amazon RDS <FontAwesomeIcon icon={faAws} color="#00000" /></li>
            <li>Google Firebase</li>
            <li>RethinkDB</li>
          </ul>
        </div>


        <h1>Database Design</h1>
        <div className="programming">
          <ul id = "types">
            <li>Relational Database Design (Beginner)</li>
            <li>Entity-Relationship Diagrams (Beginner)</li>
            <li>Database Normalization (Familiar)</li>
          </ul>
        </div>

        <h1>SQL</h1>
        <div className="programming">
          <ul id = "types">
            <li>Writing complex SQL queries for data retrieval, modification and analysis</li>
          </ul>
        </div>
      </div>


        <h1>Version Control & IDE Development</h1>
          <div className="programming">
            <ul id = "types">
                <li>Git <FontAwesomeIcon icon={faGitAlt} color="#FF8C00" /></li>
                <li>Github <FontAwesomeIcon icon={faGithub} color="#00000" /></li>
                <li>Visual Studio 2022</li>
                <li>Visual Studio Code</li>
                <li>Linux(Ubuntu) <FontAwesomeIcon icon={faUbuntu} color="#FFA500" /></li>
                <li>Unity Engine 3D <FontAwesomeIcon icon={faUnity} color="#00000" /></li>
            </ul>
          </div>
        <h1>Agile/Scrum Methodologies</h1>
        
        <div className="programming">
          <ul id = "types">
            <li>Agile/Scrum</li>
          </ul>
        </div>
      
      </div>
      <div className ="my_description">
       <p> Checkout my projects in  <NavLink to ="/portfolio">Portfolio</NavLink> section. 
       Also visit me in <a href = "https://www.linkedin.com/in/ronvic-cuevas/">LinkedIn</a> hoping we can connect and chat.
    </p>
    </div>
    </body>
  );
};

export default Skills;