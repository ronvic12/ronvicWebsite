import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import OpportunityKnocks from '../../assets/logo_images/app_icon.png'
import Connect4 from '../../assets/logo_images/connect.png'
import MtStHelen from '../../assets/logo_images/mtsthelen.jpg'
import Dcash from '../../assets/logo_images/dcash.jpg'
import RegressionModel from '../../assets/logo_images/regression model.webp'
import "./index.scss";
function OtherProj(){
  return (
        <div className="wrapper">     
            <CardGroup>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={RegressionModel} />
                    <Card.Body>
                        <Card.Title>Regression Model</Card.Title>
                        <Card.Text>Implemented visualizations and building Regression Models(Linear Regression, Polynomial Regression, Logistic Regression) with graphs using Numpy, Sci-Kit-Learn,Pandas,Seaborn and Matplotlib to analyze car fuel efficiencies.</Card.Text>
                        <Card.Link href="https://github.com/ronvic12/Regression-Models-ML-Course-Project-"><button>View on Github</button></Card.Link>
                    </Card.Body>
                </Card>
            
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={OpportunityKnocks} />
                    <Card.Body>
                        <Card.Title> OpportunityKnocks App</Card.Title>
                        <Card.Text>A mobile cross-platform App created for student-athletes to provide compensation through their image and likeness. This app was built through flutter and dart with the support of the Firebase as the database.</Card.Text>
                        <Card.Link href="https://github.com/UCDavisOpportunityKnocks/oppknocksapp"><button>View on Github</button></Card.Link>
                    </Card.Body>
                </Card>
                
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Connect4} />
                    <Card.Body>
                        <Card.Title>Connect4AI</Card.Title>
                        <Card.Text>Building two types of AI agents: MinimaxAI agent and AlphabetaAI agent. The main goal is to learn the fundamentals of Minimax and Alphabeta for two player games.</Card.Text>
                        <Card.Link href="https://github.com/ronvic12/Connect4-ai-v2.0"><button>View on Github</button></Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={MtStHelen} />
                    <Card.Body>
                        <Card.Title>ClimbingMountSaintHelens</Card.Title>
                        <Card.Text>Designed an Admissible Heuristic and Implementing A* algorithm for minimizing total path cost and amount time spent.</Card.Text>
                        <Card.Link href="https://github.com/ronvic12/ClimbingMountSaintHelens"><button>View on Github</button></Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Dcash} />
                    <Card.Body>
                        <Card.Title>dcash</Card.Title>
                        <Card.Text>A simple web server used in OS class to learn about multi-threaded programming. This version of the server can only handle one client at a time and simply serves static files. Uses Stripe for transsaction.</Card.Text>
                        <Card.Link href="https://github.com/ronvic12/dcash"><button>View on Github</button></Card.Link>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}

export default OtherProj