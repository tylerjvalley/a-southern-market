import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


class Settings extends Component {

    state = {
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        email: this.props.email,
        password: '',
        password2: '',
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

        
        axios.put('/api/users/update/' + this.props.id, {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
        })
        .then(res => {
            console.log(res);
            window.location.reload();
        })
        .catch(err => {
            console.log(err);
        })

        
    }

    render() {
        return (
            <div className="register-page">
                <Container>
                    <Form>
                        <Form.Group controlId="formBasicFirst">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('firstName', e)} type="text" value={this.state.firstName} placeholder={this.state.firstName} />
                        </Form.Group>
                        <Form.Group controlId="formBasicLast">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('lastName', e)} type="text" value={this.state.lastName} placeholder={this.state.firstName} />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('email', e)} type="email" value={this.state.email} placeholder={this.state.email} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('password', e)} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword2">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('password2', e)} type="password" placeholder="Re-enter Password" />
                        </Form.Group>
                        <Link to="/account"><Button onClick={(e) => this.handleSubmit(e)} variant="success">Update</Button></Link>
                    </Form>
                </Container>
            </div>
        )
    }
}




export default Settings;