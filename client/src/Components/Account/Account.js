import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

import './Account.css';



class Account extends Component {
    state = {

    }

    render() {
        return (
            <div className="sign-in">
                <Container>
                    <Row>
                        <Col className="login-form">
                            <h1>Log In</h1>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicChecbox">
                                    <Form.Check type="checkbox" label="Remember Me" />
                                </Form.Group>
                                <Button variant="secondary" type="submit">
                                    Log In
                                </Button>
                                </Form>
                        </Col>
                        <Col className="signup-form">
                            <h1>Sign Up</h1>
                            <Jumbotron>
                                <div className="signup-box">
                                    <h5>Create An Account</h5>
                                    <Button variant="secondary">Sign Up</Button>
                                </div>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


export default Account;