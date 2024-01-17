import React, { Component } from "react";
import {Col, Form, Row} from "react-bootstrap";
import register from "../images/register.png";
import {Link} from "react-router-dom";

class ATMRegister extends Component {
    constructor(props) {
        super(props);
        this.firstNameRef = React.createRef();
        this.lastNameRef = React.createRef();
        this.usernameRef = React.createRef();
        this.pinRefs = Array.from({length: 4}, (_, i) => React.createRef());
        this.confirmPinRefs = Array.from({ length: 4 }, (_, i) => React.createRef());
        this.accountRef = React.createRef();
        this.confirmAccountRef = React.createRef();
    }

    submitUsers = async (e) => {
        e.preventDefault();
        const pin = this.pinRefs.map((ref) => ref.current.value).join("");
        const confirmPin = this.confirmPinRefs.map((ref) => ref.current.value).join("");
        const account = this.accountRef.current.value;
        const confirmAccount = this.confirmAccountRef.current.value;

        // Check if passcode and account number match their confirmations
        if (pin !== confirmPin) {
            alert("Passcode and confirm passcode do not match.");
            return;
        }

        if (account !== confirmAccount) {
            alert("Account number and confirm account number do not match.");
            return;
        }
        const bankUser = {
            firstName: this.firstNameRef.current.value,
            lastName: this.lastNameRef.current.value,
            username: this.usernameRef.current.value,
            pin: this.pinRefs.map((ref) => ref.current.value).join(""),
            account: this.accountRef.current.value,
        };
        try {
            const response = await fetch("http://localhost:8080/api/bankUsers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bankUser),
            });

            if (!response.ok) {
                this.setError("Failed to submit user");
                return;
            }

            await response.json();
            window.location.reload();
        } catch (error) {
            console.error("Error submitting user:", error);
            this.setError("Error submitting user. Please try again.");
        }
    };

    setError = (errorMessage) => {
        this.setState({
            error: errorMessage,
        });
    };

    render() {
        return (
            <div className="login">
                <Form className="mb-3" onSubmit={this.submitUsers}>
                    <Row>
                        <img className="form-img" src={register} alt={register}/>
                        <Col>
                            <Form.Control type="text"
                                          ref={this.firstNameRef}
                                          placeholder="First name"
                                          className="validate"
                            />
                        </Col>
                        <Col>
                            <Form.Control type="text"
                                          ref={this.lastNameRef}
                                          placeholder="Last name" className="validate"
                            />
                        </Col>
                    </Row>
                    <br />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text"
                                      ref={this.usernameRef}
                                      placeholder="Enter username"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Text className="text-muted">
                            Create your security pin
                        </Form.Text>
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
                        <Form.Text className="text-muted">
                            Confirm your security pin
                        </Form.Text>
                        <div className="passcode-entry">
                            {this.confirmPinRefs.map((ref, index) => (
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
                    <Form.Group className="mb-3" controlId="formBasicAccount">
                        <Form.Control
                            type="text"
                            ref={this.accountRef}
                            placeholder="Enter account number"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmAccount">
                        <Form.Control
                            type="text"
                            ref={this.confirmAccountRef}
                            placeholder="Confirm account number"
                        />
                    </Form.Group>
                    <button className="btn-default" type="submit">
                        Register
                    </button>
                </Form>
                <br/>
                <div>
                    Already have an account? <Link exact to='/login'>Login instead</Link>
                </div>
            </div>
        );
    }
}

export default ATMRegister;
