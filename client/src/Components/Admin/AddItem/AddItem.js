import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';




class AddItem extends Component {


    state = {
        itemName: '',
        itemDesc: '',
        vendor: '',
        image: '',
        category: '',
        errors: '',
    }

    componentDidMount() {
    
    }

    handleInput = (type, e) => {

        if (type === 'itemName') {
            this.setState({ itemName: e.target.value })
        } else if (type === 'itemDesc') {
            this.setState({ itemDesc: e.target.value })
        } else if (type === 'vendor') {
            this.setState({ vendor: e.target.value })
        } else if (type === 'category') {
            this.setState({ category: e.target.value })
        } 
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const item = {
            name: this.state.itemName,
            description: this.state.itemDesc,
            vendor: this.state.vendor,
            category: this.state.category
        }

        console.log(item);
       
        axios.post('http://localhost:5000/api/items/addItem', item)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
           
    }

    render() {
        return (
            <div className="register-page">
                <div className="register-page-top">
                    <Link to="/dashboard/Admin" className="back-button-reg"><Button variant="secondary">Back</Button></Link>
                    <h1>Add Item</h1>
                </div>
                <Container>
                    <Form>
                        <Form.Group controlId="formItemName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('itemName', e)} type="text" placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group controlId="formItemDesc">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" onChange={(e) => this.handleInput('itemDesc', e)} type="test" placeholder="Enter description" />
                        </Form.Group>
                        <Form.Group controlId="formItemVendor">
                            <Form.Label>Vendor</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('vendor', e)} type="text" placeholder="Enter vendor" />
                        </Form.Group>

                        <Form.Group controlId="formItemCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('category', e)} type="text" placeholder="Category" />
                        </Form.Group>
                        <Button onClick={(e) => this.handleSubmit(e)} variant="success">Add Vendor</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}




export default AddItem;