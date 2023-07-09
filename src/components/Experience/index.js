import "./index.scss";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { faBriefcase, faSchool, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WorkIcon from '../WorkIcon';
const Experience = () => {
  return (
  <>
  <div className = "experience-container">
  <h1>Work Experience</h1>
  <VerticalTimeline>
  <VerticalTimelineElement className = "vertical-timeline-element--work" date ="August 2022 - July 2023" contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon = {<WorkIcon/>}>
    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Four Wheel Campers</h4>
    <p>

    <li>
    Maintained and Developed full-stack web applications, coding at all levels from database management(MYSQL) to the backend(Node.js) to the front-end(HTML/CSS/Javascript) to create an efficient system for every department of the company: Sales,Services,Production,Accounting,Engineering,Adminstrator.
    </li> 
    <li>
    Collaborated with other engineers (i.e. mechanical) to put their new implemented CNC Drawings or fixes into the web application system and communicate with every department to create a new idea on how to improve their web application system.
    </li>   
    <li>
    Created database schemas and wrote efficient retrieval queries in MYSQL for various large scalable business requirements.    
    </li>
    </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement 
    className = "vertical-timeline-element--work"
    date ="January 2022 - March 2022"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    icon = {<WorkIcon/>}
    >
    <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">EyeVocab(Language Center, UC Davis)</h4>
    <p>
    <li>
    Collaborated with two interns and the lead programmer to develop Eyevocab project which is a cloud-based, open-source, digital vocabulary program, designed for students to learn, practice, and test their knowledge of target language lexical items. The program features spaced repetition, custom learning schedules, simultaneous engagement of seeing, hearing, and typing L2 vocabulary in order to maximize long-term lexical retention.
    </li>   
    <li>
    Implemented the web application using TypeScript/JavaScript, HTML,CSS and ReactJS Framework for the Front-End development. We use RethinkDB as our main source of Database, and using Express.js, Node.js, Next.js, and Docker for the backend development.    </li>  
    
    </p>
    </VerticalTimelineElement>



    <VerticalTimelineElement className = "vertical-timeline-element--work" date ="May 2021 -November 2021" contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon = {<WorkIcon/>}>
    <h3 className="vertical-timeline-element-title">Software Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">OpportunityKnocks</h4>
    <p>
    <li>
    Designed and implemented the UI/UX of the app using Flutter and Dart languages to connect student-athletes to sponsors.
    </li>   
    <li>
    Implemented the back-end of the app using Firebase in order to make user profiles and Discount postings. 
    </li>  
    <li>
    Worked with a team of 4+ developers to make an app in order to provide compensation to student-athletes and benefit businesses.
    </li>  
    
    </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement className = "vertical-timeline-element--work" date ="October 2020-May 2021" contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon = {<WorkIcon/>}>
    <h3 className="vertical-timeline-element-title">
Front-End Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">#include @ Davis</h4>
    <p>
    <li>
    Design a front-end design for the clients using ReactJS or HTML, CSS, JS.
    </li>   
    <li>
    Work with team 10+ members, and get assigned partners and pages to implement the design from the given wireframe provided by
the design team.
    </li>  
    
    </p>
    </VerticalTimelineElement>
  </VerticalTimeline>
    
    </div>
    </>
  );
};

export default Experience;
