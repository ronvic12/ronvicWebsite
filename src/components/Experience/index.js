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
  <VerticalTimelineElement className = "vertical-timeline-element--work" date ="April 2023 - Present" contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon = {<WorkIcon/>}>
    <h3 className="vertical-timeline-element-title">Web Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Anderson Continuing Education</h4>
    <p>

    <li>
    Developed and managed the company’s nursing certification courses website using C#, ASP.NET, and MySQL Server on Linux (VPS).
    </li> 
    <li>
    Improved email deliverability for our GoDaddy-hosted website by implementing SPF, DKIM, and DMARC policies via Network Solutions, optimizing email content, and performing IP warming, significantly reducing spam rates on Gmail, Outlook, and Yahoo.   </li>   
    <li>
    Migrated 2GB of MySQL data to Amazon RDS MySQL and set up automated backups on AWS S3 to ensure data integrity and minimize downtime.
    </li>
    <li>
    Consistently documented and communicated project tasks and bug issues in BitBucket, ensuring clarity and precision. Produced insightful and valuable comments while updating and streamlining code on Git/GitHub.    </li>
    </p>
    </VerticalTimelineElement>
  <VerticalTimelineElement className = "vertical-timeline-element--work" date ="August 2022 - July 2023" contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon = {<WorkIcon/>}>
    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Four Wheel Campers</h4>
    <p>

    <li>
    Developed full-stack web apps using NodeJS for the backend and HTML, CSS, and JavaScript for the front end, integrating with RESTFUL API 
for efficient systems across company departments.
  </li> 
    <li>
    Designed MySQL database schemas and optimized retrieval queries for large scalable business needs.
   </li>   
    <li>
    Collaborated in an Agile/Scrum environment, from planning features to solving bugs, and enhancing web app efficiency.
   </li>
   <li>
   Implemented streamlined workflow with Git/Github, efficiently managing version control and team collaboration.  </li>
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
    Implemented front-end web app using TypeScript and React Framework for Eyevocab Project, interfacing with Asynchronous ExpressNode API calls and RethinkDB. Results successfully created a User-Friendly environment for the pages of the Instructors and Students. 
     </li>  
    </p>
    </VerticalTimelineElement>



    <VerticalTimelineElement className = "vertical-timeline-element--work" date ="May 2021 -November 2021" contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon = {<WorkIcon/>}>
    <h3 className="vertical-timeline-element-title">Software Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">OpportunityKnocks</h4>
    <p>
    <li>
    Contributed to the end-to-end development of a cross-platform mobile application using Dart and Flutter, leveraging cloud-hosted NoSQL databases (Google Firebase) to ensure seamless data management. </li>   
    <li>
    Collaborated within a software development team of more than four members in an Agile/Scrum environment, actively participating in streamlining workflows 
    using Git and GitHub to enhance the app's development lifecycle.
    </li>  
    <li>
    Implemented the UI functionality and back-end of the app using Dart and Firebase for making user profiles and Discount postings. 
    </li>  
 
    
    </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement className = "vertical-timeline-element--work" date ="October 2020-May 2021" contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon = {<WorkIcon/>}>
    <h3 className="vertical-timeline-element-title">
Front-End Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">#include @ Davis</h4>
    <p>
    <li>
    Designed and developed the client-facing user interface using React, HTML, CSS, and JavaScript to create engaging and responsive web applications.
    </li>   
    <li>
    Strategically collaborated in a dynamic Agile team of 10+, specializing in seamless cooperation with the FrontEnd team. Played a pivotal role in translating visionary designs into reality, enhancing project outcomes through effective teamwork and execution.
    </li>  
    
    </p>
    </VerticalTimelineElement>
  </VerticalTimeline>
    
    </div>
    </>
  );
};

export default Experience;
