import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Featured.css';



const featured = (props) => {


    let featured;
    if (props) {

        featured = props.items.map(item => {
            const imageSource = `../../../../../${item.itemImage}`
            return (
                <Carousel.Item key={item._id}>
                    <Card className="new-arrivals-card" style={{ backgroundImage: "url(" + imageSource + ")", margin: 'auto' }}>
                        <Card.Body>
                            <Card.Title style={{ color: 'black' }} className="na-item">{item.name}</Card.Title>
                            <Card.Title style={{ color: 'black' }} className="na-item">{item.vendor}</Card.Title>
                            <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                            <Button>Check it out</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
            )
        })
    } else {
        featured = null;
    }


    return (
        <Carousel className="new-arrivals-carousel">

            {featured}

        </Carousel>
    );
};


export default featured;