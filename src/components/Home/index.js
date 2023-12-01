import Profile from '../../assets/images/ronvic.png';
import './index.scss';
import Resume from '../../assets/resume/Google SWE Career Resume.pdf';

const Home = () =>{

    return (
        <div className="home-page">
            
            <div className="text-zone">
            <h1>Hi, I'm Ronvic Cuevas</h1> 
 
            <h2>Software Engineer @ Four Wheel Campers | Computer Science at UC Davis</h2>
            <a href={Resume} className ="resume-button">Download Resume</a>
            </div>
            <img id= "myprofile" src={Profile} alt ="profile"></img>
        </div>
    );
}

export default Home