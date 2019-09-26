import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const other = (props) => {

    let items;
    if (props.items.length > 0) {
        items = props.items.map(item => {
            const imageSource = `../../../../${item.itemImage}`
            return (
                <Card key={item._id} className="product" style={{ backgroundImage: "url(" + imageSource + ")" }}>
                    <Card.Body>
                        <Card.Title style={{ color: 'black' }} className="na-item">{item.name}</Card.Title>
                        <Card.Text style={{ color: 'black' }} className="na-item">{item.description}</Card.Text>
                        <Card.Text style={{ color: 'black' }} className="na-item">Vendor: {item.vendor}</Card.Text>
                        <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                        <Button>Check it out</Button>
                    </Card.Body>
                </Card>
            )
        })

    } else {
        items = (<h1>Adding items to this category. Check back soon!</h1>)
    }

    return (
        <div className="categories-page-products">
            {items}
        </div>
    );
}

export default other;