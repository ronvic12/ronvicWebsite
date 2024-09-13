import React from 'react'
import EarthDefender from '../../assets/logo_images/earthdefender.jpeg'
import KnightQuest from '../../assets/logo_images/kq.png'
import CardGroup from 'react-bootstrap/CardGroup';
import Aegis from '../../assets/logo_images/aegis.png'
import Pikmini from '../../assets/logo_images/pikmini.png'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./index.scss";

// later use objects props to make the code cleaner
function Games () {
  return (
    <div className="wrapper">  
        <CardGroup>        
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={EarthDefender} />
                <Card.Body>
                    <Card.Title>Earth Defender</Card.Title>
                    <Card.Text>An adventurous and action 2D Shooter Game, where the earth is invaded by Aliens. As a ranger in space, your duty is to fight through the galaxy and defeat all aliens to make the Earth feel safe again</Card.Text>
                    <Card.Link href="https://coderedac30.itch.io/earth-defender"><button>Play on Itch.io</button></Card.Link>
                    <Card.Link href="https://github.com/ronvic12/2D-Shooter"><button>View on Github</button></Card.Link>
                </Card.Body>
            </Card>


            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={KnightQuest} />
                <Card.Body>
                    <Card.Title>KnightQuest( 2D Platform Game)</Card.Title>
                    <Card.Text>KnightQuest is a 2D platform gameplay with simple sword combat mechanics. The goal of the game is traverse various obstacles and enemies in order to save the royal family. Worked with 5 people, contributed by implementing User Interface, Map Level Design and Narrative Design.</Card.Text>
                    <Card.Link href="https://github.com/ronvic12/KnightQuest"><button>View on Github</button></Card.Link>
                    <Card.Link href="https://breliu-dv.github.io/KnightQuest/"><button>Play on WebGL version</button></Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Pikmini} />
                <Card.Body>
                    <Card.Title>Pikmini( 3D mini-game) </Card.Title>
                    <Card.Text>Pikmini is a 3D mini-game that uses the observe pattern design in order to command the pikmini from one place to another. Contributed by implementing Publisher/ Subscriber patterns and designing a lifespan of a pikmini.</Card.Text>
                    <Card.Link href="https://github.com/ensemble-ai/exercise-3-observer-pattern-ronvic12"><button>View on Github</button></Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Aegis} />
                <Card.Body>
                    <Card.Title>Aegis(3D test factory game) </Card.Title>
                    <Card.Text>Aegis is a 3D demo mini-game that has different types of shield and projectiles that are instantiated. It demonstrates different types of projectile damage and shield damage. Contributed by implementing factory software design pattern.</Card.Text>
                    <Card.Link href="https://github.com/ensemble-ai/exercise-4-factory-pattern-ronvic12"><button>View on Github</button></Card.Link>
                </Card.Body>
            </Card>            
        </CardGroup>
    </div>
    )
}

export default Games