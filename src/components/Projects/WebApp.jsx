import React from 'react'
import "./index.scss";
import TiktokPets from '../../assets/logo_images/Tiktok Pets.png'
import Include from '../../assets/logo_images/include.jpeg'
import Exposure from '../../assets/logo_images/exposure.jpg'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
function WebApp (){
  return (
    <div className="wrapper">
      <CardGroup>
        <Card style={{ width: '24rem' }}>
          <Card.Img variant="top" src={TiktokPets} />
          <Card.Body>
            <Card.Title>Tiktok Pets</Card.Title>
            <Card.Text>TikTok Pets is a full-stack web application inspired by TikTok, but with a focus solely on our beloved pets. Developed as a personal project to enhance my skills in web development, TikTok Pets allows users to share short video clips, images, and stories of their furry, feathery, or scaly companions. Through a combination of React for the frontend, HTML/CSS/JS for styling and interactivity, Node.js and Express for the backend, and SQLite3 for database management, TikTok Pets provides a seamless and engaging experience for pet lovers worldwide.</Card.Text>
            <Card.Link href="https://github.com/ronvic12/Tiktok-Pets"><button>View on Github</button></Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Include} />
          <Card.Body>
            <Card.Title>OneLoop</Card.Title>
            <Card.Text>Web Application created for OneLoop organization that was made by #includeDavis. Contributed by developing a UI design on settings page with another team member. Used HTML,CSS and JavaScript.</Card.Text>
            <Card.Link href="https://github.com/ronvic12/oneloopwebsite"><button>View on Github</button></Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Exposure} />
          <Card.Body>
            <Card.Title>MyExposure (HACKDAVIS, independent work)</Card.Title>
            <Card.Text>A website created with other two team members by using HTML, CSS, Javascript for FrontEnd and Python as a Backend language in order to know the exposure risk, in order to make smart decisions of either meeting with your social buddies or not.</Card.Text>
            <Card.Link href="https://github.com/ronvic12/MyExposure"><button>View on Github</button></Card.Link>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>

  )
}

export default WebApp