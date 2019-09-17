import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Account.css';



class Account extends Component {

    state = {
        loginEmail: '',
        loginPassword: '',
    }


    handleLoginInput = (type, e) => {

        if (type === 'email') {
            this.setState({ loginEmail: e.target.value })
        } else if (type === 'password') {
            this.setState({ loginPassword: e.target.value })
        } else {
            console.log('Something went wrong')
        }
    }


    handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            email: this.state.loginEmail,
            password: this.state.loginPassword
        }

        axios.post('http://localhost:5000/api/users/login', user)
             .then(res => {
                 console.log('Successfully logged in', res)
             })
             .catch(err => {
                 console.log(err)
             })

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
                                    <Form.Control onChange={(e) => this.handleLoginInput('email', e)} type="email" placeholder="Enter email" />
                                    
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control onChange={(e) => this.handleLoginInput('password', e)} type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicChecbox">
                                    <Form.Check type="checkbox" label="Remember Me" />
                                </Form.Group>
                                <Button onClick={(e) => this.handleSubmit(e)} variant="secondary" type="submit">
                                    Log In
                                </Button>
                            </Form>
                        </Col>
                        <Col className="signup-form">
                            <h1>Sign Up</h1>
                            <Jumbotron>
                                <div className="signup-box">
                                    <h5>Create An Account</h5>
                                    <Link to="/sign-up"><Button variant="secondary">Sign Up</Button></Link>
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