import Profile from '../../assets/images/ronvic.png';
import './index.scss';
import Resume from '../../assets/resume/software engineer resume 2022 (Early Career) - Google Docs.pdf';

const Home = () =>{

    return (
        <div className="home-page">
            
            <div className="text-zone">
            <h1>Hi, I'm Ronvic Cuevas</h1> 
 
            <h2>Software Developer | Computer Science at UC Davis</h2>
            <a href={Resume} className ="resume-button">Download Resume</a>
            </div>
            <img id= "myprofile" src={Profile} alt ="profile"></img>
        </div>
    );
}

export default Home