import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const wishlist = (props) => {
    
    const list = props.wishlist.map(item => {
        const itemSource = `../../../../../../${item.itemImage}`
        return (
            <Card key={item._id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={itemSource} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        Vendor: {item.vendor} <br />
                        Price: ${item.price}
                    </Card.Text>
                    <Button variant="danger">Delete</Button>
                </Card.Body>
            </Card>
        )
    })
    return (
        <div style={{display: 'flex'}}>
            {list}
        </div>
    )
    
}




export default wishlist;