import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ItemModal from '../../AllCategories/ItemModal/ItemModal';
import Card from 'react-bootstrap/Card';
import './NewArrivals.css';



const newArrivals = (props) => {


    let newArrivals;
    if (props) {

        newArrivals = props.items.map(item => {
           const imageSource = `../../../../../${item.itemImage}`
            return (
                <Carousel.Item key={item._id}>
                    <Card className="new-arrivals-card" style={{ backgroundImage: "url(" + imageSource + ")", margin: 'auto' }}>
                        <Card.Body>
                            <Card.Title style={{ color: 'white' }} className="na-item">{item.name}</Card.Title>
                            <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                            <ItemModal
                                item={item} />
                        </Card.Body>
                    </Card>
                </Carousel.Item>
            )
        })
    } else {
        newArrivals = null;
    }
    

    return (
        <Carousel className="new-arrivals-carousel">

           {newArrivals}

        </Carousel>
    );
};


export default newArrivals;