import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './Register.css';
import { setInStorage, getFromStorage } from '../../../assets/utils';


class Register extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
        redirect: false,
    }

    componentDidMount() {
        const obj = getFromStorage('southern_market');

        if (obj && obj.token) {
            this.setState({ redirect: true })
        }
    }


    handleInput = (type, e) => {
        
        if (type === 'firstName') {
            this.setState({ firstName: e.target.value } )
        } else if (type === 'lastName') {
            this.setState({ lastName: e.target.value } )
        } else if (type === 'email') {
            this.setState({ email: e.target.value } )
        } else if (type === 'password') {
            this.setState({ password: e.target.value } )
        } else if (type === 'password2') {
            this.setState({ password2: e.target.value } )
        } else {
            console.log('Something went wrong');
        }


    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/dashboard" />
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }

        axios.post('/api/users/register', newUser)
             .then(res => {
                 console.log('Sucessfully Signed In')

                 axios.post('/api/users/login', newUser)
                      .then(res => {
                          setInStorage('southern_market', { token: res.data.token });
                          this.setState({ redirect: true })
                      })
                      .catch(err => {
                          console.log('Problem loggin in', err)
                      })
             })
             .catch(err => {
                 console.log(err);
             })   

    }


    render() {

        return (
            <div className="register-page">
                {this.renderRedirect()}
                <div className="register-page-top">
                    <Link to="/account" className="back-button-reg"><Button variant="secondary">Back</Button></Link>
                    <h1>Create an Account</h1>             
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

export default Register;