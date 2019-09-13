import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SunglassesImage from '../../assets/images/sunglasses.png';
import JerseyImage from '../../assets/images/soccer-jersey.png';
import ShirtsImage from '../../assets/images/shirts.png';

const other = () => (
    <div className="categories-page-products">
        <Card className="product" style={{ backgroundImage: "url(" + SunglassesImage + ")" }}>
            <Card.Body>
                <Card.Title style={{ color: 'black' }} className="na-item">Aviator Sunglasses from: Sunglass World</Card.Title>
                <Card.Text style={{ color: 'black' }} className="na-item">Mobile, AL</Card.Text>
                <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                <Button>Check it out</Button>
            </Card.Body>
        </Card>
        <Card className="product" style={{ backgroundImage: "url(" + JerseyImage + ")" }}>
            <Card.Body>
                <Card.Title style={{ color: 'black' }} className="na-item">Brazil Soccer Jersey from: Sports n Stuff</Card.Title>
                <Card.Text style={{ color: 'black' }} className="na-item">Nashville, TN</Card.Text>
                <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                <Button>Check it out</Button>
            </Card.Body>
        </Card>
        <Card className="product" style={{ backgroundImage: "url(" + ShirtsImage + ")" }}>
            <Card.Body>
                <Card.Title style={{ color: 'black' }} className="na-item">Pokemon Shirts from: 2nd and Charles</Card.Title>
                <Card.Text style={{ color: 'black' }} className="na-item">Dothan, AL</Card.Text>
                <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                <Button>Check it out</Button>
            </Card.Body>
        </Card>

    </div>
)

export default other;