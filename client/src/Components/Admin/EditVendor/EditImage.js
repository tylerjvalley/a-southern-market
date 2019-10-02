import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card'
import axios from 'axios';

class EditImageModal extends Component {

    state = {
        show: false,
        user: '',
        image: '',
    }

    handleShow = () => {
        this.setState({ show: true })
    }

    handleClose = () => {
        this.setState({ show: false })
    }

    changeImageHandler = (e) => {
        this.setState({ image: e.target.files[0] })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const id = this.props.id;
        const fd = new FormData();
        fd.append(this.props.imageType, this.state.image);

        axios.put(`/api/${this.props.type}/changeImage/${id}`, fd)
            .then(res => {
                console.log(res);
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            })
    }

    
    render() {

        return (
            <>
                <Card.Img style={{cursor: 'pointer'}} onClick={this.handleShow} variant="top" src={this.props.image} />
                <p>Click on image to edit</p>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <h4>Edit Image</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <input onChange={this.changeImageHandler} type="file" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="success" onClick={this.handleSubmit}>
                            Change Image
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default EditImageModal