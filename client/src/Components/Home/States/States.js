import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import BamaImage from '../../../assets/images/alabama.png';
import GeorgiaImage from '../../../assets/images/georgia1.png';
import FloridaImage from '../../../assets/images/florida.png';
import { Link } from 'react-router-dom';
import './States.css';



const states = () => (
    <Carousel className="state-carousel">

        <Carousel.Item>
            <Card className="state-card" style={{ backgroundImage: "url(" + BamaImage + ")" }}>
                <Card.Body>
                    <Link to="/states/Alabama"><Button className="states-button">Go</Button></Link>
                </Card.Body>
            </Card>
            <Card className="state-card" style={{ backgroundImage: "url(" + GeorgiaImage + ")" }}>
                <Card.Body>
                    <Link to="/states/Georgia"><Button className="states-button">Go</Button></Link>
                </Card.Body>
            </Card>
            <Card className="state-card" style={{ backgroundImage: "url(" + FloridaImage + ")" }}>
                <Card.Body>
                    <Link to="/states/Florida"><Button className="states-button">Go</Button></Link>
                </Card.Body>
            </Card>
        </Carousel.Item>

    </Carousel>

);

export default states;