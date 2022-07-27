import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {NavLink} from 'react-router-dom';
import './index.scss';
import {faHome,faUser,faCode,faTimeline,faProjectDiagram} from '@fortawesome/free-solid-svg-icons';

import {
    faLinkedin,
    faGithub
  } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
    <div className= "nav-bar">
        <nav>
            <NavLink exact = "true" activeclassname = "active" to ="/">
                <FontAwesomeIcon icon ={faHome} color= "#4d4d4e"/>
            </NavLink>
            <NavLink  activeclassname = "active" className ="about-link" to ="/about">
                <FontAwesomeIcon icon ={faUser} color= "#4d4d4e"/> 
            </NavLink>

            <NavLink  activeclassname = "active" className ="skills-link" to ="/skills">
                <FontAwesomeIcon icon ={faCode} color= "#4d4d4e"/> 
            </NavLink>

            <NavLink  activeclassname = "active" className ="project-link" to ="/portfolio">
                <FontAwesomeIcon icon ={faProjectDiagram} color= "#4d4d4e"/> 
            </NavLink>
            <NavLink activeclassname = "active" className ="exp-link"to ="/workexperience">
                <FontAwesomeIcon icon ={faTimeline} color= "#4d4d4e"/> 
            </NavLink>
        </nav>

        <ul>
                    <li>

                    <a
                    target="_blank"
                    rel ="noreferrer"
                    href = "https://www.linkedin.com/in/ronvic-cuevas/"
                    >
                        <FontAwesomeIcon icon = {faLinkedin} color="#4d4d4e"/>
                    </a>
                    </li>
                    <li>
                    <a  target="_blank"
                    rel ="noreferrer"
                    href = "https://github.com/ronvic12"
                    >
                         <FontAwesomeIcon icon = {faGithub} color="#4d4d4e"/>
                    </a>
                    </li>
                </ul>
    </div>
)

export default Sidebar;