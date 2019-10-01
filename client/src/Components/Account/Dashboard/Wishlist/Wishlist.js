import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



class Wishlist extends Component {

    state = {
        wishlist: []
    }  

    componentDidUpdate() {
        //get user's wishlist
        axios.get(`/api/users/${this.props.user}`)
            .then(res => {
                if (res) {
                    const wishlist = res.data.wishList.map(item => {
                        return item;
                    })
                    this.setState({ wishlist: wishlist });
                }
            })
            .catch(err => {
                console.log(err);
            })
    }


    render() {
       
        const list = this.state.wishlist.map(item => {
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
}




export default Wishlist;