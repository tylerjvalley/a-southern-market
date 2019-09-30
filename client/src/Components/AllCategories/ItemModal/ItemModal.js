import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class ItemModal extends Component {

    state = {
        show: false
    }

    componentDidMount() {
        console.log(this.props)
    }

    handleShow = () => {
        this.setState({ show: true })
    }
    
    handleClose = () => {
        this.setState({ show: false })
    }
    render() {
    
        return (
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    Check it out
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h6 style={{textAlign: 'center'}}>Vendor: {this.props.vendor}</h6>
                        <p style={{textAlign: 'center'}}>{this.props.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
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