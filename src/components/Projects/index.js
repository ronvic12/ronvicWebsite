import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import ImageComponent from '../ImageComponent';
import "./index.scss";
import GamesImage from '../../assets/logo_images/games_img.jpg'
import WebAppImage from '../../assets/logo_images/web.jpeg';
import ProjectImages from '../../assets/logo_images/otherprojects.jpeg'
function Projects(){
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item interval={1000}>
        <ImageComponent link = "/portfolio/games" images = {GamesImage} text = "Games"/>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <ImageComponent link = "/portfolio/webapps" images = {WebAppImage} text = "Web App" />
      </Carousel.Item>
      <Carousel.Item>
      <ImageComponent link = "/portfolio/projectapps" images = {ProjectImages} text = "Other Projects"/>
      </Carousel.Item>
    </Carousel>  
  );
};
export default Projects;