import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FanImage from '../../assets/images/sportsfan.jpg';
import BallImage from '../../assets/images/football.png';
import TexansImage from '../../assets/images/texans.jpg';

const football = () => (
    <div className="categories-page-products">
        <Card className="product" style={{ backgroundImage: "url(" + FanImage + ")" }}>
            <Card.Body>
                <Card.Title style={{ color: 'black' }} className="na-item">Aviator Sunglasses from: Sunglass World</Card.Title>
                <Card.Text style={{ color: 'black' }} className="na-item">Mobile, AL</Card.Text>
                <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                <Button>Check it out</Button>
            </Card.Body>
        </Card>
        <Card className="product" style={{ backgroundImage: "url(" + BallImage + ")" }}>
            <Card.Body>
                <Card.Title style={{ color: 'black' }} className="na-item">Football</Card.Title>
                <Card.Text style={{ color: 'black' }} className="na-item">It's a football</Card.Text>
                <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                <Button>Check it out</Button>
            </Card.Body>
        </Card>
        <Card className="product" style={{ backgroundImage: "url(" + TexansImage + ")" }}>
            <Card.Body>
                <Card.Title style={{ color: 'black' }} className="na-item">Houston Texans Jersey</Card.Title>
                <Card.Text style={{ color: 'black' }} className="na-item">If you like horrible sports teams this is for you</Card.Text>
                <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                <Button>Check it out</Button>
            </Card.Body>
        </Card>

    </div>
)

export default football;