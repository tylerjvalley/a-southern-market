import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Footer.css'

const footer = () => (

    <footer className="site-footer">

        <Form className="newsletter">
            <h4>Sign up for our Updates!</h4>
            <Form.Group>  

                <Form.Label>First and Last Name</Form.Label>
                <Form.Control type="name" placeholder="Name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>


        <div className="logo">
            <h1>A Southern Market</h1>
        </div>

        <div className="copyright">
            <p>Copyright A Southern Market</p>
            <p>Website From Tyler Valley :)</p>
        </div>

    </footer>

)

export default footer;