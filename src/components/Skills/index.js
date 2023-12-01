import "./index.scss";
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,faGithub,faNode,fa
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from 'react-router-dom';
const Skills = () => {
  return (
    <body>   
    <h1 id ="title">MY SOFTWARE SKILLS</h1>
    <div className ="my_description">
      <p>
        I am a former Software Engineer at Four Wheel Campers where I develop and maintain two web application systems (ERP and Four Wheel Drive) to help and create an efficient system for every department of the company. Regards to my educational background, I graduated this past June 2022 with a B.S. Computer Science Degree from the University of California Davis.
        Regards to my software skillset, I am currently proficient with Javascript language, since this is where I am using with my current employment, but still proficient in Python and Intermediate with C++. I am currently being more proficient developing web applications and game applications.
         </p>
      <p> Checkout my projects in  <NavLink to ="/portfolio">Portfolio</NavLink> section. Also visit me in <a href = "https://www.linkedin.com/in/ronvic-cuevas/">LinkedIn</a> hoping we can connect and chat.
    </p>
    </div>

    
  <div className="skills-page">
    

    <h1>Programming Languages 
      <FontAwesomeIcon icon={faPython} color="#DD0031" />
      <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
      C++
      <i class="dart-icon"></i>
      </h1>
    <div className="programming">
    <ul id = "types">
      <li>Python <FontAwesomeIcon icon={faPython} color="#DD0031" />(Proficient)</li>
      <li>Javascript <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />(Experienced)</li>
      <li>C++ (Intermediate)</li>
      <li>Dart <i class="dart-icon"></i>(Beginner)</li>
    </ul>
    </div>
    <h1>Web Technologies 
    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
    <FontAwesomeIcon icon={faCss3} color="#28A4D9" /> 
    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" /> 
    <FontAwesomeIcon icon={faReact} color="#5ED4F4" /> 
    <FontAwesomeIcon icon={faNode} color="#3c873a"/> 
    </h1>
    <div className="programming">
    <ul id = "types">
      <li>HTML5 <FontAwesomeIcon icon={faHtml5} color="#F06529" /> (Experienced)</li>
      <li>CSS3 <FontAwesomeIcon icon={faCss3} color="#28A4D9" /> (Experienced)</li>
      <li>Javascript <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" /> (Experienced)</li>
      <li>RESTful API (Experienced)</li>
      <li>React <FontAwesomeIcon icon={faReact} color="#5ED4F4" /> (Experienced)</li>
      <li>Node.js <FontAwesomeIcon icon={faNode} color="#3c873a"/> (Experienced)</li>
    </ul>
    </div>
    <h1>FrameWorks</h1>
    <div className="programming">
    <ul id = "types">
      <li>Express.js (Experienced)</li>
      <li>Flutter(Beginner)</li>
      <li>Exposure to TensorFlow, Numpy, Pandas, SciKit-Learn, Seaborn, Matplotlib</li>
    </ul>
    </div>
    <h1>Databases<i class="fa-solid fa-database" color="#3c873a"></i></h1>
    <div className="programming">

    <h1>Database Management</h1>
    <div className="programming">
    <ul id = "types">
      <li>MYSQL (Experienced)</li>
      <li>Exposure to non-DBMS databases: Google Firebase and RethinkDB</li>
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
      <li>Writing complex SQL queries for data retrieval, modification and analysis (Experienced)</li>
    </ul>
    </div>



    </div>

    <h1>Machine Learning Models</h1>
    <div className="programming">
    <ul id = "types">
      <li>Regression Models (Beginner)</li>
    </ul>
    </div>

    <h1>Version Control & IDE Development</h1>
    <div className="programming">
    <ul id = "types">
      <li>Git</li>
      <li>Linux(Ubuntu)</li>
      <li>UNIX</li>
      <li>Visual Studio Code</li>
      <li>Xcode</li>
      <li>Unity Engine 3D</li>
    </ul>
    </div>
    <h1>Agile/Scrum Methodologies</h1>
    <div className="programming">
    <ul id = "types">
      <li>Agile/Scrum (Familiar)</li>
    </ul>
    </div>
    
    </div>
    </body>
  );
};

export default Skills;