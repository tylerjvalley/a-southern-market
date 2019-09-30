import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import EditForm from './EditForm';
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


    render() {

          const cards = this.state.vendors.map(vendor => {
              
                return (
                    <Card key={vendor._id} style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{vendor.name}</Card.Title>
                            <Card.Text>
                                {vendor.description}
                            </Card.Text>
                            <Button onClick={(e) => this.handleSelect(vendor, e)} variant="primary">Edit</Button>
                        </Card.Body>
                    </Card>
                )
              
                
            })
        
        
        return (
            <div className="register-page">
                <div className="register-page-top">
                    <Link to="/dashboard/Admin" className="back-button-reg"><Button variant="secondary">Back</Button></Link>
                    <h1>Edit Vendor</h1>
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