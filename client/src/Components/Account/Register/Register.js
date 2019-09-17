import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Register.css';


class Register extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
    }


    render() {

        return (
            <div className="register-page">
                <div className="register-page-top">
                    <Link to="/account" className="back-button-reg"><Button variant="secondary">Back</Button></Link>
                    <h1>Create an Account</h1>             
                </div>
                <Container>
                    <Form>
                        <Form.Group controlId="formBasicFirst">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter first name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicLast">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter last name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword2">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Re-enter Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <Link to="/account"><Button variant="success">Register</Button></Link>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default Register;