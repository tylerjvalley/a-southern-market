import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { getFromStorage } from '../../../assets/utils';

class ItemModal extends Component {

    state = {
        show: false,
        user: '',
        item: this.props.item
    }

    componentDidMount() {
       
        const obj = getFromStorage('southern_market');

        if (obj && obj.token) {
            const token = obj.token;

            //verify token
            axios.get(`/api/users/verify?token=${token}`)
                .then(res => {
                   
                    //get current user and put id in state
                    axios.get(`/api/users/${res.data.id[0].userId}`)
                         .then(res => {
                             this.setState({ user: res.data._id})
                         })
                         .catch(err => {
                             console.log(err);
                         })

                })
                .catch(err => {
                    console.log(err)
                })
            }
                  

    }

    handleShow = () => {
        this.setState({ show: true })
    }
    
    handleClose = () => {
        this.setState({ show: false })
    }

    addToWishlist = () => {
        const obj = {
            userId: this.state.user,
            item: this.state.item
        }
        axios.post('/api/users/wishList', obj)
             .then(res => {
                 console.log(res);
             })
             .catch(err => {
                 console.log(err);
             })
             
             
    }
    render() {
    
        return (
            <> 
                <Button variant="primary" onClick={this.handleShow}>
                    Check it out
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.item.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h6 style={{textAlign: 'center'}}>Vendor: {this.props.item.vendor}</h6>
                        <p style={{textAlign: 'center'}}>{this.props.item.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.addToWishlist}>
                            Add to Wishlist
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Add to Cart
                        </Button>

                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default ItemModal