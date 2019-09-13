import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import BamaImage from '../../../assets/images/alabama.png';
import GeorgiaImage from '../../../assets/images/georgia1.png';
import FloridaImage from '../../../assets/images/florida.png';
import './States.css';



const states = () => (
    <Carousel className="state-carousel">

        <Carousel.Item>
            <Card className="state-card" style={{ backgroundImage: "url(" + BamaImage + ")" }}>
                <Card.Body>
                    <Button className="states-button">Go</Button>
                </Card.Body>
            </Card>
            <Card className="state-card" style={{ backgroundImage: "url(" + GeorgiaImage + ")" }}>
                <Card.Body>
                    <Button className="states-button">Go</Button>
                </Card.Body>
            </Card>
            <Card className="state-card" style={{ backgroundImage: "url(" + FloridaImage + ")" }}>
                <Card.Body>
                    <Button className="states-button">Go</Button>
                </Card.Body>
            </Card>
        </Carousel.Item>

    </Carousel>

);

export default states;