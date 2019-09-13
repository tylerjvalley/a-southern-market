import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import BabyDoll from '../../assets/images/baby-with-doll.jpg';
import BabyHat from '../../assets/images/baby-hat.jpg';
import BabyStroller from '../../assets/images/baby-stroller.jpg';
import BabyOutfit from '../../assets/images/baby-outfit.jpg';
import BabyDog from '../../assets/images/baby-dog.jpg';
import BabyFedora from '../../assets/images/baby-fedora.jpg';

const baby = () => (
    <div className="categories-page-products">
        <Card className="product" style={{ backgroundImage: "url(" + BabyDoll+ ")" }}>
            <Card.Body>
                <Card.Title style={{ color: 'white' }} className="na-item">Doll</Card.Title>
                <Card.Text style={{ color: 'white' }} className="na-item">Doll for your baby</Card.Text>
                <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                <Button>Check it out</Button>
            </Card.Body>
        </Card>
        <Card className="product" style={{ backgroundImage: "url(" + BabyHat + ")" }}>
            <Card.Body>
                <Card.Title style={{ color: 'white' }} className="na-item">Owl Hat</Card.Title>
                <Card.Text style={{ color: 'white' }} className="na-item">Really cute owl hat</Card.Text>
                <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                <Button>Check it out</Button>
            </Card.Body>
        </Card>
        <Card className="product" style={{ backgroundImage: "url(" + BabyStroller + ")" }}>
            <Card.Body>
                <Card.Title style={{ color: 'white' }} className="na-item">Stroller</Card.Title>
                <Card.Text style={{ color: 'white' }} className="na-item">Really weird stroller thing for your baby</Card.Text>
                <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                <Button>Check it out</Button>
            </Card.Body>
        </Card>
        <Card className="product" style={{ backgroundImage: "url(" + BabyOutfit + ")" }}>
            <Card.Body>
                <Card.Title style={{ color: 'white' }} className="na-item">Baby Outfit</Card.Title>
                <Card.Text style={{ color: 'white' }} className="na-item">Nice baby outfit</Card.Text>
                <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                <Button>Check it out</Button>
            </Card.Body>
        </Card>
        <Card className="product" style={{ backgroundImage: "url(" + BabyDog + ")" }}>
            <Card.Body>
                <Card.Title style={{ color: 'white' }} className="na-item">Dog</Card.Title>
                <Card.Text style={{ color: 'white' }} className="na-item">Literally a dog that you can get for your baby</Card.Text>
                <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                <Button>Check it out</Button>
            </Card.Body>
        </Card>
        <Card className="product" style={{ backgroundImage: "url(" + BabyFedora+ ")" }}>
            <Card.Body>
                <Card.Title style={{ color: 'white' }} className="na-item">Fedora</Card.Title>
                <Card.Text style={{ color: 'white' }} className="na-item">Because babies are the only people allowed to wear fedoras now</Card.Text>
                <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                <Button>Check it out</Button>
            </Card.Body>
        </Card>
        
    </div>
)

export default baby;