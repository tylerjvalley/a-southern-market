import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CarImage from '../../assets/images/car-art.png';
import PaintbrushImage from '../../assets/images/paintbrush.jpg';
import CanvasImage from '../../assets/images/artist.jpg';


const novelties = () => (
    <div className="categories-page-products">
        <Card className="product" style={{ backgroundImage: "url(" + CarImage + ")" }}>
            <Card.Body>
                <Card.Title style={{ color: 'white' }} className="na-item">Car Art</Card.Title>
                <Card.Text style={{ color: 'white' }} className="na-item">Painted by Meryl Streep, oil on canvas</Card.Text>
                <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                <Button>Check it out</Button>
            </Card.Body>
        </Card>
        <Card className="product" style={{ backgroundImage: "url(" + PaintbrushImage + ")" }}>
            <Card.Body>
                <Card.Title style={{ color: 'white' }} className="na-item">Paintbrushes</Card.Title>
                <Card.Text style={{ color: 'white' }} className="na-item">Cant paint without paintbrushes now can ya?</Card.Text>
                <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                <Button>Check it out</Button>
            </Card.Body>
        </Card>
        <Card className="product" style={{ backgroundImage: "url(" + CanvasImage + ")" }}>
            <Card.Body>
                <Card.Title style={{ color: 'white' }} className="na-item">Canvas</Card.Title>
                <Card.Text style={{ color: 'white' }} className="na-item">Canvas that you can paint on</Card.Text>
                <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                <Button>Check it out</Button>
            </Card.Body>
        </Card>

    </div>
)

export default novelties;