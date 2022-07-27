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
    Collaborating with two interns and the lead programmer developing Eyevocab project which is a cloud-based, open-source, digital
vocabulary program, designed for students to learn, practice, and test their knowledge of target language lexical items. The program features spaced repetition, custom learning schedules, simultaneous engagement of seeing, hearing, and typing L2 vocabulary in order to maximize long-term lexical retention.
 
    </li>   
    <li>
    Implementing the web application using TypeScript/JavaScript, HTML,CSS and ReactJS Framework for the
Front-End development. We use RethinkDB as our main source of Database, and using Express.js, Node.js, Next.js, and Docker for the backend development.
    </li>  
    
    </p>
    </VerticalTimelineElement>



    <VerticalTimelineElement 
    className = "vertical-timeline-element--work"
    date ="May 2021 -November 2021"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    icon = {<WorkIcon/>}
    >
    <h3 className="vertical-timeline-element-title">Software Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">OpportunityKnocks</h4>
    <p>
    <li>
    Design and implement the UI/UX of the app using Flutter and Dart languages to connect student-athletes to sponsors.
    </li>   
    <li>
    Implement the back-end of the app using Firebase in order to make user profiles and Discount postings.   
    </li>  
    <li>
    Work with a team of 4+ developers to make an app in order to provide compensation to student-athletes and benefit businesses.
    </li>  
    
    </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement 
    className = "vertical-timeline-element--work"
    date ="October 2020-May 2021"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    icon = {<WorkIcon/>}
    >
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
