import React, {Component} from "react";
import {Form, Row} from 'react-bootstrap';
import {Link , withRouter} from "react-router-dom";
import login from "../images/login.png"

class ATMLogin extends Component {
    constructor(props) {
        super(props);
        this.usernameRef = React.createRef();
        this.pinRefs = Array.from({length: 4}, (_, i) => React.createRef());
    }

    submitLogin = async (e) => {
        e.preventDefault();
        const bankUser = {
            username: this.usernameRef.current.value,
            pin: this.pinRefs.map((ref) => ref.current.value).join(""),
        };
        try {
            const response = await fetch(`http://localhost:8080/api/bankUsers`);

            if (!response.ok) {
                throw new Error("Failed to fetch user");
            }
            const user = await response.json();
            console.log("Fetched user:", user);
            this.props.history.push("/dashboard");
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    };
   render() {
       return(
           <div className="login">
               <Form className="mb-3" onSubmit={this.submitLogin}>
                   <Row> <img className="form-img" src={login} alt={login}/></Row>
                   <Form.Group className="mb-3" controlId="formBasicEmail">
                       <Form.Label>Username</Form.Label>
                       <Form.Control type="text"
                                     ref={this.usernameRef}
                       />
                       <Form.Text className="text-muted">
                           We'll never share your username with anyone else.
                       </Form.Text>
                   </Form.Group>

                   <Form.Group className="mb-3" controlId="formBasicPassword">
                       <Form.Label>Passcode</Form.Label>
                       <div className="passcode-entry">
                           {this.pinRefs.map((ref, index) => (
                               <Form.Control
                                   key={index}
                                   className="passcode-input"
                                   type="text"
                                   ref={ref}
                                   maxLength="1"
                                   placeholder="•"
                               />
                           ))}
                       </div>
                   </Form.Group>
                   {/*<Form.Group className="mb-3" controlId="formBasicCheckbox">*/}
                   {/*    <Form.Check type="checkbox" label="Check me out"/>*/}
                   {/*</Form.Group>*/}
                   <button className="btn-default" type="submit">
                       Login
                   </button>
               </Form>
               <br/>
               <div>
               Don't have an account yet? <Link to='/register'>Sign up now!</Link>
               </div>
           </div>
       )
   }
}

export default withRouter(ATMLogin);