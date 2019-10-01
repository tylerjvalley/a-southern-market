import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import './Collections.css';

const collections = (props) => {
    const link = "/categories/" + props.link

    return (

        <Row className='collections-row'>
            <Col>
                <Image src={props.image} rounded />            
                <h2>{props.title}</h2>
                <Link to={link}><h5>Shop Now</h5></Link>
            </Col>
        </Row>

    )
 
};


export default collections;