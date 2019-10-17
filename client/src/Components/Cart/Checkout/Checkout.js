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
        email: '',
        address1: '',
        address2: '',
        company: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        shipping: 0,
        error: '',
        
    }


    handleInput = (type, e) => {

        if (type === 'fullName') {
            this.setState({ fullName: e.target.value })
        } else if (type === 'cardNumber') {
            this.setState({ cardNumber: e.target.value })
        } else if (type === 'expiration') {
            this.setState({ expiration: e.target.value })
        } else if (type === 'cvv') {
            this.setState({ cvv: e.target.value })
        } else if (type === 'email') {
            this.setState({ email: e.target.value })
        } else if (type === 'address1') {
            this.setState({ address1: e.target.value })
        } else if (type === 'address2') {
            this.setState({ address2: e.target.value })
        } else if (type === 'company') {
            this.setState({ company: e.target.value })
        } else if (type === 'city') {
            this.setState({ city: e.target.value })
        } else if (type === 'state') {
            this.setState({ state: e.target.value })
        } else if (type === 'zip') {
            this.setState({ zip: e.target.value })
        } else if (type === 'phone') {
            this.setState({ phone: e.target.value })
        } else {
            console.log('Something went wrong');
        }


    }

    handleSubmit = (e) => {
        e.preventDefault();  
        
        axios.post('/api/billing/order')
             .then(res => {
                 this.setState({ error: res })
             })
             .catch(err => {
                 this.setState({ error: err.response.data })
             })
    }


    render() {

        let errors;

        if (this.state.error) {
            errors = Object.values(this.state.error);
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
                    <h5>Total: ${this.props.total}</h5>
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('fullName', e)} type="text" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCard">
                            <Form.Label>Card Number (no dashes)</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('cardNumber', e)} type="number" />
                        </Form.Group>
                        <Form.Group controlId="formBasicExp">
                            <Form.Label>Expiration Date</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('expiration', e)} type="text"  />
                        </Form.Group>
                        <Form.Group controlId="formBasicCvv">
                            <Form.Label>CVV</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('cvv', e)} type="number" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('email', e)} type="email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicAdd1">
                            <Form.Label>Address 1</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('address1', e)} type="text" />
                        </Form.Group>
                        <Form.Group controlId="formBasicAdd2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('address2', e)} type="text" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCompany">
                            <Form.Label>Company</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('company', e)} type="text"  />
                        </Form.Group>
                        <Form.Group controlId="formBasicCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('city', e)} type="text" />
                        </Form.Group>
                        <Form.Group controlId="formBasicState">
                            <Form.Label>State</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('state', e)} type="text" />
                        </Form.Group>
                        <Form.Group controlId="formBasicZip">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('zip', e)} type="number" placeholder="Re-enter Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('phone', e)} type="string" placeholder="Re-enter Password" />
                        </Form.Group>
                        <Button onClick={(e) => this.handleSubmit(e)} variant="success">Submit</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    total: state.cart.totalPrice
})

export default connect(mapStateToProps, null)(Checkout);