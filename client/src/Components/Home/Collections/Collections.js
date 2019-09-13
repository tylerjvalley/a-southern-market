import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './Collections.css';

const collections = (props) => (

    <Row className='collections-row'>
        <Col>
            <Image src={props.image} rounded />            
            <h2>{props.title}</h2>
            <h5><a href="/">Shop Now</a></h5>
        </Col>
    </Row>
 
);


export default collections;