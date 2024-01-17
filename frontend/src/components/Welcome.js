import React, {Component} from "react";
import welcome from "../images/welcome.png";
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Welcome extends Component {
    render(){
        return (
           <div className="welcome">
                   <Container>
                       <Image src={welcome} alt={welcome} fluid />
                       <h1 className="display-4">Welcome to our ATM!</h1>
                       <p className="lead">Ready to access your finances?</p>
                       <Link to="/login">
                           <button className="btn-default">Login or Sign Up</button>
                       </Link>
                   </Container>
           </div>

        )
    }
}

export default Welcome;