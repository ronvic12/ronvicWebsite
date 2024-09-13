import "./index.scss";
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const About = () => {
  return (
    <section className="about-page">
      <div className="text-zone">
        <h1>About Me</h1>
        <p>
          I am a Web Developer at Anderson Continuing Education
          where I develop new features and maintain CE certification course website.
          I am a first-generation graduate with a B.S. degree in Computer
          Science from the University of California, Davis, and I graduated with
          University itself this past June 2022. 
        </p>
        <p>
          My biggest passion in the tech industry are Web Development,
          Software Development and Game Development. I also love the idea of developing
          mobile or web Applications with any content. I am also interested in
          the Software engineering careers because I really like problem solving
          and face new challenges. As of today, I constantly learning new
          programming languages and creating my own personal projects that could help the company in the long term, in order
          to expand my Software Skills and grow as a professional Software Engineer. I really love facing new challenges
          everyday.
        </p>
      </div>


      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faPython} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
