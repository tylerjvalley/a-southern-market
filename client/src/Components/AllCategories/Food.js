import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import HoneyImage from '../../assets/images/honey.png';
import PieImage from '../../assets/images/pie.png';
import BeerImage from '../../assets/images/beer.png';

const food = () => (
    <div className="categories-page-products">
        <Card className="product" style={{ backgroundImage: "url(" + HoneyImage + ")" }}>
            <Card.Body>
                <Card.Title style={{ color: 'black' }} className="na-item">Honey</Card.Title>
                <Card.Text style={{ color: 'black' }} className="na-item">Get you some of this honey</Card.Text>
                <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                <Button>Check it out</Button>
            </Card.Body>
        </Card>
        <Card className="product" style={{ backgroundImage: "url(" + PieImage + ")" }}>
            <Card.Body>
                <Card.Title style={{ color: 'black' }} className="na-item">Pie</Card.Title>
                <Card.Text style={{ color: 'black' }} className="na-item">Best pie you'll ever have in your life</Card.Text>
                <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                <Button>Check it out</Button>
            </Card.Body>
        </Card>
        <Card className="product" style={{ backgroundImage: "url(" + BeerImage + ")" }}>
            <Card.Body>
                <Card.Title style={{ color: 'black' }} className="na-item">Beer</Card.Title>
                <Card.Text style={{ color: 'black' }} className="na-item">Good beer</Card.Text>
                <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                <Button>Check it out</Button>
            </Card.Body>
        </Card>

    </div>
)

export default food;