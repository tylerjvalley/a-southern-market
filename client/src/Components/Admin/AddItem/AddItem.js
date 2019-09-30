import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from 'axios';




class AddItem extends Component {


    state = {
        allVendors: [],
        itemName: '',
        itemDesc: '',
        price: '',
        vendor: 'Select Vendor',
        image: null,
        category: 'Select Category',
        newArrival: false,
        featured: false,
        errors: '',
    }

    componentDidMount() {
        //get all vendors from db and store them in state
        axios.get('/api/vendors/all')
             .then(res => {
                 if (res) {
                     const allVendors = [];
                     res.data.map(vendor => {
                        return allVendors.push(vendor.name);
                     })
                     this.setState({ allVendors: allVendors })
                 }
             })
    }

   

    handleInput = (type, e) => {

        if (type === 'itemName') {
            this.setState({ itemName: e.target.value })
        } else if (type === 'itemDesc') {
            this.setState({ itemDesc: e.target.value })
        } else if (type === 'price') {
            this.setState({ price: e.target.value })
        } else if (type === 'vendor') {
            this.setState({ vendor: e.target.value })
        } else if (type === 'category') {
            this.setState({ category: e.target.value })
        } 
    }

    categoryHandler = (category, e) => {
        e.preventDefault();

        switch (category) {
            case 'Gifts':
                this.setState({ category: category });
                break;
            case 'Novelties and Art':
                this.setState({ category: category });
                break;
            case 'Baby':
                this.setState({ category: category });
                break;
            case 'Home':
                this.setState({ category: category });
                break;
            case 'Food and Drink':
                this.setState({ category: category });
                break;
            case 'Clothing':
                this.setState({ category: category });
                break;
            case 'Football':
                this.setState({ category: category });
                break;
            case 'Other':
                this.setState({ category: category });
                break;
            
            default:
                this.setState({ category: 'Select Category' })
        }
    }

    vendorHandler = (vendor, e) => {
        e.preventDefault();

       this.setState({ vendor: vendor.vendor })
    }

    imageHandler = (e) => {
        this.setState({ image: e.target.files[0] }, () => console.log(this.state.image) )
    }

    handleNewArrival = (e, value) => {
        if (value === 'yes' && e.target.value === 'on') {
            this.setState({ newArrival: true })
        } else if (value === 'no' && e.target.value === 'on') {
            this.setState({ newArrival: false })
        }
    }

    handleFeatured = (e, value) => {
         if (value === 'yes' && e.target.value === 'on') {
            this.setState({ featured: true })
        } else if (value === 'no' && e.target.value === 'on') {
            this.setState({ featured: false })
        }
    }



    handleSubmit = (e) => {
        e.preventDefault();

        const fd = new FormData(); 
        fd.append('name', this.state.itemName);
        fd.append('description', this.state.itemDesc);
        fd.append('vendor', this.state.vendor);
        fd.append('price', this.state.price);
        fd.append('category', this.state.category);
        fd.append('itemImage', this.state.image);
        fd.append('newArrival', this.state.newArrival);
        fd.append('featured', this.state.featured);
       
        axios.post('/api/items/addItem', fd)
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
                            <Form.Control as="textarea" onChange={(e) => this.handleInput('itemDesc', e)} type="text" placeholder="Enter description" />
                        </Form.Group>
                        <Form.Group controlId="formItemPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('price', e)} type="text" placeholder="Enter price" />
                        </Form.Group>

                        <DropdownButton variant="secondary" style={{ marginBottom: '1em'}} title={this.state.vendor}>
                            {this.state.allVendors.map(vendor => {
                               return (<Dropdown.Item key={vendor} onClick={(e) => this.vendorHandler({vendor}, e)}>{vendor}</Dropdown.Item>)
                            })}
                        </DropdownButton>

                        <DropdownButton variant="secondary" style={{ marginBottom: '1em' }} title={this.state.category}>
                            <Dropdown.Item onClick={(e) => this.categoryHandler('Gifts', e)}>Gifts</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.categoryHandler('Novelties and Art', e)}>Novelties and Art</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.categoryHandler('Baby', e)}>Baby</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.categoryHandler('Home', e)}>Home</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.categoryHandler('Food and Drink', e)}>Food and Drink</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.categoryHandler('Clothing', e)}>Clothing</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.categoryHandler('Football', e)}>Football</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.categoryHandler('Other', e)}>Other</Dropdown.Item>
                        </DropdownButton>

                        <Form.Group controlId="formItemPrice">
                            <Form.Label>Image (optional)</Form.Label>
                            <Form.Control onChange={this.imageHandler} type="file"/>
                        </Form.Group>
                        <Form.Group controlId="formItemPrice">
                            <Form.Label>Add to New Arrivals?</Form.Label>
                            <Form.Check
                                onChange={(e) => this.handleNewArrival(e, 'yes')}
                                type="radio"
                                label="Yes"
                                name="newArrivalRadio"
                                id="newArrivalTrue"
                            />
                            <Form.Check
                                onChange={(e) => this.handleNewArrival(e, 'no')}
                                type="radio"
                                label="No"
                                name="newArrivalRadio"
                                id="newArrivalFalse"
                            />
                        </Form.Group>
                        <Form.Group controlId="formItemPrice">
                            <Form.Label>Add to Featured Items?</Form.Label>
                            <Form.Check
                                onChange={(e) => this.handleFeatured(e, 'yes')}
                                type="radio"
                                label="Yes"
                                name="featuredRadio"
                                id="featuredTrue"
                            />
                            <Form.Check
                                onChange={(e) => this.handleFeatured(e, 'no')}
                                type="radio"
                                label="No"
                                name="featuredRadio"
                                id="featuredFalse"
                            />
                        </Form.Group>
                        <Button onClick={(e) => this.handleSubmit(e)} variant="success">Add Item</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}




export default AddItem;