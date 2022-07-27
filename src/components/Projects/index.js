import "./index.scss";
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profile from '../../assets/images/logo1.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import CardGroup from 'react-bootstrap/CardGroup';
import KnightQuest from '../../assets/logo_images/kq.png'
import OpportunityKnocks from '../../assets/logo_images/app_icon.png'
import Include from '../../assets/logo_images/include.jpeg'
import Exposure from '../../assets/logo_images/exposure.jpg'
import Aegis from '../../assets/logo_images/aegis.png'
import Pikmini from '../../assets/logo_images/pikmini.png'
import Connect4 from '../../assets/logo_images/connect.png'
import MtStHelen from '../../assets/logo_images/mtsthelen.jpg'
import Dcash from '../../assets/logo_images/dcash.jpg'
function Projects(){
  return (
    <div className="wrapper">

    <CardGroup>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={KnightQuest} />
    <Card.Body>
      <Card.Title>
KnightQuest( 2D Platform Game)</Card.Title>
      <Card.Text>
      KnightQuest is a 2D platform gameplay with simple sword combat mechanics. The goal of the game is traverse various obstacles and enemies in order to save the royal family. Worked with 5 people, contributed by implementing User Interface, Map Level Design and Narrative Design.
      </Card.Text>
      <Card.Link href="https://github.com/ronvic12/KnightQuest"><button>View on Github</button></Card.Link>
      <Card.Link href="https://breliu-dv.github.io/KnightQuest/"><button>Play on WebGL version</button></Card.Link>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={OpportunityKnocks} />
    <Card.Body>
      <Card.Title>
OpportunityKnocks App</Card.Title>
      <Card.Text>
      A mobile cross-platform App created for student-athletes to provide compensation through their image and likeness. This app was built through flutter and dart with the support of the Firebase as the database.
      </Card.Text>
      <Card.Link href="https://github.com/UCDavisOpportunityKnocks/oppknocksapp"><button>View on Github</button></Card.Link>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Include} />
    <Card.Body>
      <Card.Title>
OneLoop</Card.Title>
      <Card.Text>
      Web Application created for OneLoop organization that was made by #includeDavis. Contributed by developing a UI design on settings page with another team member. Used HTML,CSS and JavaScript.
      </Card.Text>
      <Card.Link href="https://github.com/ronvic12/oneloopwebsite"><button>View on Github</button></Card.Link>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Exposure} />
    <Card.Body>
      <Card.Title>MyExposure (HACKDAVIS, independent work)</Card.Title>
      <Card.Text>
      A website created with other two team members by using HTML, CSS, Javascript for FrontEnd and Python as a Backend language in order to know the exposure risk, in order to make smart decisions of either meeting with your social buddies or not.
      </Card.Text>
    <Card.Link href="https://github.com/ronvic12/MyExposure"><button>View on Github</button></Card.Link>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Aegis} />
    <Card.Body>
      <Card.Title>
Aegis(3D test factory game) </Card.Title>
      <Card.Text>
      Aegis is a 3D demo mini-game that has different types of shield and projectiles that are instantiated. It demonstrates different types of projectile damage and shield damage. Contributed by implementing factory software design pattern.
      </Card.Text>
      <Card.Link href="https://github.com/ensemble-ai/exercise-4-factory-pattern-ronvic12"><button>View on Github</button></Card.Link>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Pikmini} />
    <Card.Body>
      <Card.Title>
Pikmini( 3D mini-game) </Card.Title>
      <Card.Text>
      Pikmini is a 3D mini-game that uses the observe pattern design in order to command the pikmini from one place to another. Contributed by implementing Publisher/ Subscriber patterns and designing a lifespan of a pikmini.
      </Card.Text>
      <Card.Link href="https://github.com/ensemble-ai/exercise-3-observer-pattern-ronvic12"><button>View on Github</button></Card.Link>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Connect4} />
    <Card.Body>
      <Card.Title>Connect4AI</Card.Title>
      <Card.Text>
      Building two types of AI agents: MinimaxAI agent and AlphabetaAI agent. The main goal is to learn the fundamentals of Minimax and Alphabeta for two player games.
      </Card.Text>
      <Card.Link href="https://github.com/ronvic12/Connect4-ai-v2.0"><button>View on Github</button></Card.Link>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={MtStHelen} />
    <Card.Body>
      <Card.Title>
ClimbingMountSaintHelens</Card.Title>
      <Card.Text>
      Designed an Admissible Heuristic and Implementing A* algorithm for minimizing total path cost and amount time spent.
      </Card.Text>
      <Card.Link href="https://github.com/ronvic12/ClimbingMountSaintHelens"><button>View on Github</button></Card.Link>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Dcash} />
    <Card.Body>
      <Card.Title>
dcash</Card.Title>
      <Card.Text>
     A simple web server used in OS class to learn about multi-threaded programming. This version of the server can only handle one client at a time and simply serves static files. Uses Stripe for transsaction.


      </Card.Text>
      <Card.Link href="https://github.com/ronvic12/dcash"><button>View on Github</button></Card.Link>
    </Card.Body>
  </Card>
  </CardGroup>
  </div>
  );
};

export default Projects;
