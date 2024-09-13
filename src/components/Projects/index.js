import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import ImageComponent from '../ImageComponent';
import "./index.scss";
import GamesImage from '../../assets/logo_images/games_img.jpg'
import WebAppImage from '../../assets/logo_images/webappimage.jpeg';
import ProjectImages from '../../assets/logo_images/otherprojects.jpeg'
function Projects(){
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item interval={1000}>
        <ImageComponent link = "/portfolio/games" images = {GamesImage} text = "Games"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <ImageComponent link = "/portfolio/webapps" images = {WebAppImage} text = "Web App" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <ImageComponent link = "/portfolio/projectapps" images = {ProjectImages} text = "Other Projects"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>  
  );
};

export default Projects;
 // <li>
    //   <Link to="/portfolio/games">Games</Link>
    //   <Link to="/portfolio/webapps">Webapps</Link>
    //   <Link to="/portfolio/projectapps">Other Projects</Link>
    
    // </li>