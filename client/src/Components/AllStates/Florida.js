import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import PlaceImage1 from '../../assets/images/sunglasses.png';
import PlaceImage2 from '../../assets/images/pie.png';
import PlaceImage3 from '../../assets/images/florida.png';

const florida = () => (
    <Container>
        <Row className="vendor">

            <Col xs={6} md={4}>
                <Image src={PlaceImage1} thumbnail />
            </Col>
            <Col>
                <h2>florida store 1</h2>
                <p>please fill me with useful information that tells the customer about the dope things they can find in this store</p>
            </Col>
        </Row>
        <Row className="vendor">
            <Col xs={6} md={4}>
                <Image src={PlaceImage2} thumbnail />
            </Col>
            <Col>
                <h2>florida store 2</h2>
                <p>please fill me with useful information that tells the customer about the dope things they can find in this store</p>
            </Col>
        </Row>
        <Row className="vendor">
            <Col xs={6} md={4}>
                <Image src={PlaceImage3} thumbnail />
            </Col>

            <Col>
                <h2>florida store 3</h2>
                <p>please fill me with useful information that tells the customer about the dope things they can find in this store</p>
            </Col>


        </Row>
    </Container>
)

export default florida;