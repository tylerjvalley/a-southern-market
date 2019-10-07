import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import EditForm from './EditForm';
import EditImage from './EditImage';
import axios from 'axios';




class EditVendor extends Component {


    state = {
        vendors: [],
        selected: false,
        vendorId: '',
        vendorName: '',
        vendorDescription: '',
        vendorStreet: '',
        vendorState: '',
        vendorCity: '',
        vendorZip: '',
    }

    componentDidMount() {
        //get all vendors 
        axios.get('/api/vendors/all')
             .then(res => {
                 if (res) {
                     const vendors = [];
                     res.data.map(vendor => {
                         return vendors.push(vendor);
                     })
                     this.setState({ vendors: vendors })
                }
             })
             .catch(err => console.log(err));
    }

    handleSelect = (vendor, e) => {
        e.preventDefault();
        this.setState({
            selected: true,
            vendorId: vendor._id,
            vendorName: vendor.name,
            vendorDescription: vendor.description,
            vendorStreet: vendor.street,
            vendorState: vendor.state,
            vendorCity: vendor.city,
            vendorZip: vendor.zipCode 
        })
    }

    handleDelete = (item, e) => {
        e.preventDefault();
        

        axios.delete('/api/vendors/delete/' + item._id)
             .then(res => {
                 this.setState({ errors: 'Successfully Deleted'})
             })
             .catch(err => {
                 this.setState({ errors: err });
             })

        this.setState({ errors: 'Successfully Deleted' })
             
    }


    render() {

        let errors;

        if (this.state.errors) {
            errors = Object.values(this.state.errors);
            errors.map(error => {
                return ({ error })
            })
        } else {
            errors = null;
        }

          const cards = this.state.vendors.map(vendor => { 
              const vendorSource = `../../../../../${vendor.vendorImage}`
                return (
                    <Card key={vendor._id} style={{ width: '18rem' }}>
                        <EditImage id={vendor._id} imageType={'vendorImage'} type={'vendors'} image={vendorSource} />
                        <Card.Body>
                            <Card.Title>{vendor.name}</Card.Title>
                            <Card.Text>
                                {vendor.description}
                            </Card.Text>
                            <Button onClick={(e) => this.handleSelect(vendor, e)} variant="primary">Edit</Button>
                            <Button onClick={(e) => this.handleDelete(vendor, e)} variant="danger">Delete</Button>
                        </Card.Body>
                    </Card>
                )
              
                
            })
        
        
        return (
            <div className="register-page">
                <div className="register-page-top">
                    <Link to="/dashboard/Admin" className="back-button-reg"><Button variant="secondary">Back</Button></Link>
                    
                    <h1>Edit Vendor</h1>
                    <div className="errors-bar">
                        {errors}
                    </div>
                </div>
                <Container style={{display: 'flex'}}>
                    {!this.state.selected ? ( cards ) : 
                    (<EditForm
                        id={this.state.vendorId}
                        name={this.state.vendorName}
                        description={this.state.vendorDescription}
                        street={this.state.vendorStreet}
                        state={this.state.vendorState}
                        city={this.state.vendorCity}
                        zip={this.state.vendorZip}
                      />)}
                    
                </Container>
            </div>
        )
    }
}




export default EditVendor;