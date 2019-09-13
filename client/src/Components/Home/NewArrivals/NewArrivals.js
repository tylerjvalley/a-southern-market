import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BeerImage from '../../../assets/images/beer.png';
import FlagImage from '../../../assets/images/american-flag.png';
import FootballImage from '../../../assets/images/football.png';
import HoneyImage from '../../../assets/images/honey.png';
import PhoneCoverImage from '../../../assets/images/phone-cover.png';
import PieImage from '../../../assets/images/pie.png';
import ShirtsImage from '../../../assets/images/shirts.png';
import JerseyImage from '../../../assets/images/soccer-jersey.png';
import SunglassesImage from '../../../assets/images/sunglasses.png';
import './NewArrivals.css';



const newArrivals = () => (
    <Carousel className="new-arrivals-carousel">

        <Carousel.Item>
            <Card className="new-arrivals-card" style={{ backgroundImage: "url(" + SunglassesImage + ")" }}>
                <Card.Body>
                    <Card.Title style={{ color: 'black' }} className="na-item">Aviator Sunglasses from: Sunglass World</Card.Title>
                    <Card.Title style={{ color: 'black' }} className="na-item">Mobile, AL</Card.Title>
                    <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                    <Button>Check it out</Button>
                </Card.Body>
            </Card>
            <Card className="new-arrivals-card" style={{ backgroundImage: "url(" + JerseyImage + ")" }}>
                <Card.Body>
                    <Card.Title style={{ color: 'black' }} className="na-item">Brazil Soccer Jersey from: Sports n Stuff</Card.Title>
                    <Card.Title style={{ color: 'black' }} className="na-item">Nashville, TN</Card.Title>
                    <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                    <Button>Check it out</Button>
                </Card.Body>
            </Card>
            <Card className="new-arrivals-card" style={{ backgroundImage: "url(" + ShirtsImage + ")" }}>
                <Card.Body>
                    <Card.Title style={{ color: 'black' }} className="na-item">Pokemon Shirts from: 2nd and Charles</Card.Title>
                    <Card.Title style={{ color: 'black' }} className="na-item">Dothan, AL</Card.Title>
                    <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                    <Button>Check it out</Button>
                </Card.Body>
            </Card>
        </Carousel.Item>

        <Carousel.Item>
            <Card className="new-arrivals-card" style={{ backgroundImage: "url(" + PieImage + ")" }}>
                <Card.Body>
                    <Card.Title style={{ color: 'black' }} className="na-item">Apple Pie from: Granny's Pie Factory</Card.Title>
                    <Card.Title style={{ color: 'black' }} className="na-item">Raleigh, NC</Card.Title>
                    <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                    <Button>Check it out</Button>
                </Card.Body>
            </Card>
            <Card className="new-arrivals-card" style={{ backgroundImage: "url(" + PhoneCoverImage + ")" }}>
                <Card.Body>
                    <Card.Title style={{ color: 'black' }} className="na-item">IphoneX Cover from: Muhammad's phones</Card.Title>
                    <Card.Title style={{ color: 'black' }} className="na-item">Tampa, FL</Card.Title>
                    <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                    <Button>Check it out</Button>
                </Card.Body>
            </Card>
            <Card className="new-arrivals-card" style={{ backgroundImage: "url(" + HoneyImage + ")" }}>
                <Card.Body>
                    <Card.Title style={{ color: 'black' }} className="na-item">An absurd amount of honey from: beekeeper</Card.Title>
                    <Card.Title style={{ color: 'black' }} className="na-item">Atlanta, GA</Card.Title>
                    <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                    <Button>Check it out</Button>
                </Card.Body>
            </Card>
        </Carousel.Item>
        <Carousel.Item>
            <Card className="new-arrivals-card" style={{ backgroundImage: "url(" + FootballImage + ")" }}>
                <Card.Body>
                    <Card.Title style={{ color: 'black' }} className="na-item">Football from: Sports Store</Card.Title>
                    <Card.Title style={{ color: 'black' }} className="na-item">Miami, FL</Card.Title>
                    <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                    <Button>Check it out</Button>
                </Card.Body>
            </Card>
            <Card className="new-arrivals-card" style={{ backgroundImage: "url(" + BeerImage + ")" }}>
                <Card.Body>
                    <Card.Title style={{ color: 'black' }} className="na-item">Super Bitter IPA from: Folklore</Card.Title>
                    <Card.Title style={{ color: 'black' }} className="na-item">Dothan, AL</Card.Title>
                    <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                    <Button>Check it out</Button>
                </Card.Body>
            </Card>
            <Card className="new-arrivals-card" style={{ backgroundImage: "url(" + FlagImage + ")" }}>
                <Card.Body>
                    <Card.Title style={{ color: 'black' }} className="na-item">American Flag from: Patriots-R-Us</Card.Title>
                    <Card.Title style={{ color: 'black' }} className="na-item">Jackson, MS</Card.Title>
                    <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                    <Button>Check it out</Button>
                </Card.Body>
            </Card>
        </Carousel.Item>

    </Carousel>
);


export default newArrivals;