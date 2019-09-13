import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import HomeImage from '../../assets/images/home.png';
import AntiquesImage from '../../assets/images/antiques.png';
import FlagImage from '../../assets/images/american-flag.png';

const home = () => (
    <div className="categories-page-products">
        <Card className="product" style={{ backgroundImage: "url(" + HomeImage + ")" }}>
            <Card.Body>
                <Card.Title style={{ color: 'black' }} className="na-item">House set</Card.Title>
                <Card.Text style={{ color: 'black' }} className="na-item">Your living room gonna look pretty great if you get this</Card.Text>
                <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                <Button>Check it out</Button>
            </Card.Body>
        </Card>
        <Card className="product" style={{ backgroundImage: "url(" + AntiquesImage + ")" }}>
            <Card.Body>
                <Card.Title style={{ color: 'black' }} className="na-item">Coffee Mugs</Card.Title>
                <Card.Text style={{ color: 'black' }} className="na-item">Everyone needs at least 30 coffee mugs</Card.Text>
                <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                <Button>Check it out</Button>
            </Card.Body>
        </Card>
        <Card className="product" style={{ backgroundImage: "url(" + FlagImage + ")" }}>
            <Card.Body>
                <Card.Title style={{ color: 'black' }} className="na-item">American Flag</Card.Title>
                <Card.Text style={{ color: 'black' }} className="na-item">If you're patriotic and you know it and you really wanna show it</Card.Text>
                <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                <Button>Check it out</Button>
            </Card.Body>
        </Card>

    </div>
)

export default home;