import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from 'axios';

class EditForm extends Component {

    state = {
        allVendors: [],
        itemId: this.props.id,
        itemName: this.props.name,
        itemDesc: this.props.description,
        itemPrice: this.props.price,
        itemVendor: this.props.vendor,
        itemCategory: this.props.category,
        isNewArrival: this.props.newArrival,
        isFeatured: this.props.featured,
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

    componentDidUpdate() {
        console.log('new Arrival?' + this.state.isNewArrival);
        console.log('Featured ?' + this.state.isFeatured);
    }
    
    handleInput = (type, e) => {

        if (type === 'itemName') {
            this.setState({ itemName: e.target.value })
        } else if (type === 'itemDesc') {
            this.setState({ itemDesc: e.target.value })
        } else if (type === 'price') {
            this.setState({ itemPrice: e.target.value })
        } else if (type === 'vendor') {
            this.setState({ itemVendor: e.target.value })
        } else if (type === 'category') {
            this.setState({ itemCategory: e.target.value })
        }
    }

    categoryHandler = (category, e) => {
        e.preventDefault();

        switch (category) {
            case 'Gifts':
                this.setState({ itemCategory: category });
                break;
            case 'Novelties and Art':
                this.setState({ itemCategory: category });
                break;
            case 'Baby':
                this.setState({ itemCategory: category });
                break;
            case 'Home':
                this.setState({ itemCategory: category });
                break;
            case 'Food and Drink':
                this.setState({ itemCategory: category });
                break;
            case 'Clothing':
                this.setState({ itemCategory: category });
                break;
            case 'Football':
                this.setState({ itemCategory: category });
                break;
            case 'Other':
                this.setState({ itemCategory: category });
                break;

            default:
                this.setState({ itemCategory: this.props.category })
        }
    }

    vendorHandler = (vendor, e) => {
        e.preventDefault();

        this.setState({ itemVendor: vendor.vendor })
    }

    handleNewArrival = (e, value) => {
        if (value === 'yes' && e.target.value === 'on') {
            this.setState({ isNewArrival: true })
        } else if (value === 'no' && e.target.value === 'on') {
            this.setState({ isNewArrival: false })
        }
    }

    handleFeatured = (e, value) => {
        if (value === 'yes' && e.target.value === 'on') {
            this.setState({ isFeatured: true })
        } else if (value === 'no' && e.target.value === 'on') {
            this.setState({ isFeatured: false })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

    
        axios.put('/api/items/update/' + this.state.itemId, {
            name: this.state.itemName,
            description: this.state.itemDesc,
            price: this.state.itemPrice,
            vendor: this.state.itemVendor,
            category: this.state.itemCategory,
            newArrival: this.state.isNewArrival,
            featured: this.state.isFeatured
        })
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
            <div className="register-page" style={{ margin: 'auto' }}>
                <Container>
                    <Form>
                        <Form.Group controlId="formItemName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('itemName', e)} type="text" placeholder={this.state.itemName} value={this.state.itemName} />
                        </Form.Group>
                        <Form.Group controlId="formItemDesc">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" onChange={(e) => this.handleInput('itemDesc', e)} type="text" placeholder={this.state.itemDesc} value={this.state.itemDesc} />
                        </Form.Group>
                        <Form.Group controlId="formItemPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('price', e)} type="text" placeholder={this.state.itemPrice} value={this.state.itemPrice} />
                        </Form.Group>

                        <DropdownButton variant="secondary" style={{ marginBottom: '1em' }} title={this.state.itemVendor} value={this.state.itemVendor}>
                            {this.state.allVendors.map(vendor => {
                                return (<Dropdown.Item key={vendor} onClick={(e) => this.vendorHandler({ vendor }, e)}>{vendor}</Dropdown.Item>)
                            })}
                        </DropdownButton>

                        <DropdownButton variant="secondary" style={{ marginBottom: '1em' }} title={this.state.itemCategory} value={this.state.itemCategory}>
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

        );
    }
}


export default EditForm; 