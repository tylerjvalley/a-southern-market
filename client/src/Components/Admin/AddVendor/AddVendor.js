import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';




class AddVendor extends Component {


    state = {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="register-page">
                <div className="register-page-top">
                    <Link to="/dashboard/Admin" className="back-button-reg"><Button variant="secondary">Back</Button></Link>
                    <h1>Add Vendor</h1>
                </div>
                <Container>
                    <Form>
                        <Form.Group controlId="formBasicFirst">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('firstName', e)} type="email" placeholder="Enter first name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicLast">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('lastName', e)} type="email" placeholder="Enter last name" />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('email', e)} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('password', e)} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword2">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('password2', e)} type="password" placeholder="Re-enter Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <Link to="/account"><Button onClick={(e) => this.handleSubmit(e)} variant="success">Register</Button></Link>
                    </Form>
                </Container>
            </div>
        )
    }
}




export default AddVendor;