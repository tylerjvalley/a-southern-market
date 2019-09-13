import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './HomeJumbo.css';

const homeJumbo = () => (
    <Jumbotron fluid>


        <Container className="all-products-card">
            <h1>All Products</h1>
            <p style={{ fontWeight: 'bold' }}>Click here to browse all products</p>
            <Button variant="primary">Browse</Button>
        </Container> 
        


        <div className="welcome">
            <Container>
                <h1 className="welcome-to">Welcome To</h1>
                <h1 className="southern">A Southern Market!</h1>
                <h4>Your home for southern vendors and artists</h4>
            </Container>
        </div>

        <Container className="featured-card">
            <h1 className="featured-text">Featured Store</h1>
            <h1 className="featured-text featured-store">Bertha's  Paintings</h1>
            <Button variant="primary">Browse</Button>
        </Container>

      
    
    </Jumbotron>
);


export default homeJumbo;