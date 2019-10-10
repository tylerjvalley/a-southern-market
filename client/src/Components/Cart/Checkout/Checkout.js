import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
//redux
import { connect } from 'react-redux';




class Checkout extends Component {

    state = {
        fullName: '',
        cardNumber: 0,
        expiration: '',
        cvv: 0,
        quantity: 0,
        orderTotal: 0,
        email: '',
        address1: '',
        address2: '',
        company: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        shipping: 0,
        
    }


    handleInput = (type, e) => {

        if (type === 'firstName') {
            this.setState({ firstName: e.target.value })
        } else if (type === 'lastName') {
            this.setState({ lastName: e.target.value })
        } else if (type === 'email') {
            this.setState({ email: e.target.value })
        } else if (type === 'password') {
            this.setState({ password: e.target.value })
        } else if (type === 'password2') {
            this.setState({ password2: e.target.value })
        } else {
            console.log('Something went wrong');
        }


    }

    handleSubmit = (e) => {
        e.preventDefault();    
    }


    render() {

        let errors;

        if (this.state.registerError) {
            errors = Object.values(this.state.registerError);
            errors.map(error => {
                return ({ error })
            })
        } else {
            errors = null;
        }

        return (
            <div className="register-page">
                <div className="register-page-top">
                    <div className="errors-bar">
                        {errors}
                    </div>
                    <Link to="/cart" className="back-button-reg"><Button variant="secondary">Back</Button></Link>
                    <h1>Enter Card Information</h1>
                </div>
                <Container>
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('firstName', e)} type="text" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCard">
                            <Form.Label>Card Number (no dashes)</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('lastName', e)} type="number" />
                        </Form.Group>
                        <Form.Group controlId="formBasicExp">
                            <Form.Label>Expiration Date</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('email', e)} type="text"  />
                        </Form.Group>
                        <Form.Group controlId="formBasicCvv">
                            <Form.Label>CVV</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('password', e)} type="number" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('password2', e)} type="email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicAdd1">
                            <Form.Label>Address 1</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('email', e)} type="text" />
                        </Form.Group>
                        <Form.Group controlId="formBasicAdd2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('password', e)} type="text" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCompany">
                            <Form.Label>Company</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('password2', e)} type="text"  />
                        </Form.Group>
                        <Form.Group controlId="formBasicCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('email', e)} type="text" />
                        </Form.Group>
                        <Form.Group controlId="formBasicState">
                            <Form.Label>State</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('password', e)} type="text" />
                        </Form.Group>
                        <Form.Group controlId="formBasicZip">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('password2', e)} type="number" placeholder="Re-enter Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('password2', e)} type="number" placeholder="Re-enter Password" />
                        </Form.Group>
                        <Button onClick={(e) => this.handleSubmit(e)} variant="success">Submit</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart.items
})

export default connect(mapStateToProps, null)(Checkout);