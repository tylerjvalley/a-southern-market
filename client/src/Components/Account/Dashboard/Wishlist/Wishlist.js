import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';



class Wishlist extends Component {

    handleDelete = (item, e) => {
        e.preventDefault();
        const obj = {
            userId: this.props.user,
            item: item
        }
        axios.post('/api/users/wishList/delete', obj)
             .then(res => {
                 console.log(res);
                 window.location.reload();
             })
             .catch(err => {
                 console.log(err);
             })
    }
    
    render() {
        const list = this.props.wishlist.map(item => {
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
                        <Button onClick={(e) => this.handleDelete(item, e)} variant="danger">Delete</Button>
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
    
}




export default Wishlist;