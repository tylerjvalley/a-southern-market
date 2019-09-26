import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const southCarolina = (props) => {

    let vendors;
    if (props.vendors.length > 0) {
        vendors = props.vendors.map(vendor => {
            const imageSource = `../../../../${vendor.vendorImage}`
            return (
                <Row key={vendor._id} className="vendor">
                    <Col xs={6} md={4}>
                        <Image src={imageSource} thumbnail />
                    </Col>
                    <Col>
                        <h2>{vendor.name}</h2>
                        <p>{vendor.description}</p>
                    </Col>
                </Row>
            )
        })

    } else {
        vendors = (<h1>No Vendors yet! Check back soon</h1>)
    }


    return (
        <Container>
            {vendors}
        </Container>
    )
}

export default southCarolina;