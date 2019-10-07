import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getFromStorage, setInStorage } from '../../assets/utils';
import { Redirect } from 'react-router-dom';
import './Account.css';



class Account extends Component {

    state = {
        isLoggedIn: false,
        isLoading: false,
        redirect: false,
        loginError: '',
        loginEmail: '',
        loginPassword: '',
    }


    componentDidMount() {
        //check if user is logged in. If not, display log in/signup screen
        const obj = getFromStorage('southern_market');

        if (obj && obj.token) {
            this.setState({ redirect: true })
        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/dashboard" />
        }
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

        axios.post('/api/users/login', user)
             .then(res => {
                 setInStorage('southern_market', { token: res.data.token });
                 this.setState({
                     loginError: 'Successfully logged in',
                     token: res.data.token
                 })
                 this.setState({ redirect: true })
             })
             .catch(err => {
                 console.log(err)
                 this.setState({
                     loginError: err.response.data 
                 })
             })

    }

    render() {
        let errors;

        if (this.state.loginError) {
            errors = Object.values(this.state.loginError);
            errors.map(error => {
                return ({ error })
            })
        } else {
            errors = null;
        }


        return (
            <div className="sign-in">
                {this.renderRedirect()}
                <Container>
                    <div className="errors-bar">
                       {errors}                     
                    </div>
                    <Row>
                        <Col className="login-form">
                            <h1>Log In</h1>
                            <Form>
                                <Form.Group>
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