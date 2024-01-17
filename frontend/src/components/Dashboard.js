import React, {Component} from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    CardGroup,
    ListGroup,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';



class Dashboard extends Component {
   render() {
       return (
           <div className="dashboard">
               <Container>
                   <div className="dashboard-header">
                       <Row>
                           <Col md={8}>
                               <h5 className="bold">
                                   {new Intl.DateTimeFormat('en-US', {
                                       weekday: 'long',
                                       month: 'long',
                                       day: 'numeric',
                                   }).format(new Date())},
                                   {new Date().toLocaleTimeString()}
                               </h5>
                           </Col>
                       </Row>
                   </div>

                   <CardGroup className="dashboard-options">
                       <Card>
                           <Card.Body>
                               <p>What would you like to do today?</p>
                               <h2> Welcome, username!</h2>
                               {/*<h3>{bankusers.username}</h3>*/}
                               <br/>
                               <p>Your Remaining Balance</p>
                               <Card.Text>$ 5000</Card.Text>
                               {/*<Card.Text>₹{balance}</Card.Text>*/}
                               <Row className="dashboard-actions">
                                   <Col md={4}>
                                       <Button variant="light" as={Link} to="/mini-statement">
                                           Mini Statement
                                       </Button>
                                   </Col>
                                   <Col md={4}>
                                       <Button variant="primary" as={Link} to="/cash-withdrawal">
                                           Cash Withdrawal
                                       </Button>
                                   </Col>
                               </Row>
                           </Card.Body>
                       </Card>
                       <Card>
                           <Card.Body>
                               <p>Quick withdraw</p>
                               <Row md={3.5} className="dashboard-actions">
                                   <Col>
                                       <Button variant="light" as={Link} to="/cash-withdrawal">
                                           $100
                                       </Button>
                                   </Col>
                                   <Col>
                                       <Button variant="light" as={Link} to="/cash-withdrawal">
                                           $500
                                       </Button>
                                   </Col>
                                   <Col>
                                       <Button variant="light" as={Link} to="/cash-withdrawal">
                                           $1000
                                       </Button>
                                   </Col>
                                   <Col>
                                       <Button variant="light" as={Link} to="/cash-withdrawal">
                                           $1200
                                       </Button>
                                   </Col>
                                   <Col>
                                       <Button variant="light" as={Link} to="/cash-withdrawal">
                                           $1500
                                       </Button>
                                   </Col>
                                   <Col>
                                       <Button variant="light" as={Link} to="/cash-withdrawal">
                                           $2000
                                       </Button>
                                   </Col>
                               </Row>
                               <br/>
                               <ListGroup variant="flush">
                                   {/*{availableNotes.map((note, index) => (*/}
                                   {/*    <ListGroupItem key={index}>₹{note}</ListGroupItem>*/}
                                   {/*))}*/}
                               </ListGroup>
                               <p>Available notes in ATM.</p>
                               <h5 className="bold"> 100s | 500s | 2000s </h5>
                           </Card.Body>
                       </Card>
                   </CardGroup>
                   <br/>
                       <Card>
                           <Card.Body>
                               <Row className="dashboard-actions">
                               <Col>
                                   <Button variant="light" as={Link} to="/change-pin">
                                       Change/Set PIN
                                   </Button>
                               </Col>
                               <Col>
                                   <Button variant="light" as={Link} to="/cash-deposit">
                                       Cash Deposit
                                   </Button>
                               </Col>
                               <Col>
                                   <Button variant="light" as={Link} to="/bill-pay">
                                       Bill Pay
                                   </Button>
                               </Col>
                               <Col>
                                   <Button variant="light" as={Link} to="/transfer-money">
                                       Transfer Money
                                   </Button>
                               </Col>
                               </Row>
                           </Card.Body>
                       </Card>
                   <br />
                           <button className="btn-default"> Exit Transaction </button>
                           {/*<button className="btn-default" onClick={() => handleLogout()}>*/}
                           {/*    Logout*/}
                           {/*</button>*/}
               </Container>
           </div>
       )
   }
}

export default Dashboard;