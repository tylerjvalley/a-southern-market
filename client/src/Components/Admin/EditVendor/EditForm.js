import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'; 
import axios from 'axios';

class EditForm extends Component {

    state = {
        vendorId: this.props.id,
        vendorName: this.props.name,
        vendorDesc: this.props.description,
        street: this.props.street,
        city: this.props.city,
        state: this.props.state,
        zip: this.props.zip,
        errors: '',
    }


     handleInput = (type, e) => {

        if (type === 'vendorName') {
            this.setState({ vendorName: e.target.value })
        } else if (type === 'vendorDesc') {
            this.setState({ vendorDesc: e.target.value })
        } else if (type === 'street') {
            this.setState({ street: e.target.value })
        } else if (type === 'city') {
            this.setState({ city: e.target.value })
        } else if (type === 'zip') {
            this.setState({ zip: e.target.value })
        }
    }

    stateHandler = (state, e) => {
        e.preventDefault();

        switch (state) {
            case 'AL':
                this.setState({ state: state });
                break;
            case 'AK':
                this.setState({ state: state });
                break;
            case 'AZ':
                this.setState({ state: state });
                break;
            case 'AR':
                this.setState({ state: state });
                break;
            case 'CA':
                this.setState({ state: state });
                break;
            case 'CO':
                this.setState({ state: state });
                break;
            case 'CT':
                this.setState({ state: state });
                break;
            case 'DE':
                this.setState({ state: state });
                break;
            case 'FL':
                this.setState({ state: state });
                break;
            case 'GA':
                this.setState({ state: state });
                break;
            case 'HI':
                this.setState({ state: state });
                break;
            case 'ID':
                this.setState({ state: state });
                break;
            case 'IL':
                this.setState({ state: state });
                break;
            case 'IN':
                this.setState({ state: state });
                break;
            case 'IA':
                this.setState({ state: state });
                break;
            case 'KS':
                this.setState({ state: state });
                break;
            case 'KY':
                this.setState({ state: state });
                break;
            case 'LA':
                this.setState({ state: state });
                break;
            case 'ME':
                this.setState({ state: state });
                break;
            case 'MD':
                this.setState({ state: state });
                break;
            case 'MA':
                this.setState({ state: state });
                break;
            case 'MI':
                this.setState({ state: state });
                break;
            case 'MN':
                this.setState({ state: state });
                break;
            case 'MS':
                this.setState({ state: state });
                break;
            case 'MO':
                this.setState({ state: state });
                break;
            case 'MT':
                this.setState({ state: state });
                break;
            case 'NE':
                this.setState({ state: state });
                break;
            case 'NV':
                this.setState({ state: state });
                break;
            case 'NH':
                this.setState({ state: state });
                break;
            case 'NJ':
                this.setState({ state: state });
                break;
            case 'NM':
                this.setState({ state: state });
                break;
            case 'NY':
                this.setState({ state: state });
                break;
            case 'NC':
                this.setState({ state: state });
                break;
            case 'ND':
                this.setState({ state: state });
                break;
            case 'OH':
                this.setState({ state: state });
                break;
            case 'OK':
                this.setState({ state: state });
                break;
            case 'OR':
                this.setState({ state: state });
                break;
            case 'PA':
                this.setState({ state: state });
                break;
            case 'RI':
                this.setState({ state: state });
                break;
            case 'SC':
                this.setState({ state: state });
                break;
            case 'SD':
                this.setState({ state: state });
                break;
            case 'TN':
                this.setState({ state: state });
                break;
            case 'TX':
                this.setState({ state: state });
                break;
            case 'UT':
                this.setState({ state: state });
                break;
            case 'VT':
                this.setState({ state: state });
                break;
            case 'VA':
                this.setState({ state: state });
                break;
            case 'WA':
                this.setState({ state: state });
                break;
            case 'WV':
                this.setState({ state: state });
                break;
            case 'WI':
                this.setState({ state: state });
                break;
            case 'WY':
                this.setState({ state: state });
                break;

            default:
                this.setState({ state: 'Select State' })
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();

        axios.put('/api/vendors/update/' + this.state.vendorId, {
            name: this.state.vendorName,
            description: this.state.vendorDesc,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            zipCode: this.state.zip
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
                        <Form.Group controlId="formName">
                            <Form.Label>Name/Company</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('vendorName', e)} type="text" placeholder={this.state.vendorName} value={this.state.vendorName} />
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={(e) => this.handleInput('vendorDesc', e)} type="text" placeholder={this.state.vendorDesc} value={this.state.vendorDesc} />
                        </Form.Group>
                        <Form.Group controlId="formAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('street', e)} type="text" placeholder={this.state.street} value={this.state.street} />
                        </Form.Group>
                        <Form.Group controlId="formCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('city', e)} type="text" placeholder={this.state.city} value={this.state.city} />
                        </Form.Group>

                        <DropdownButton variant="secondary" title={this.state.state} value={this.state.state}>
                            <Dropdown.Item onClick={(e) => this.stateHandler('AL', e)}>AL</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('AK', e)}>AK</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('AZ', e)}>AZ</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('AR', e)}>AR</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('CA', e)}>CA</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('CO', e)}>CO</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('CT', e)}>CT</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('DE', e)}>DE</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('FL', e)}>FL</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('GA', e)}>GA</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('HI', e)}>HI</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('ID', e)}>ID</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('IL', e)}>IL</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('IN', e)}>IN</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('IA', e)}>IA</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('KS', e)}>KS</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('KY', e)}>KY</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('LA', e)}>LA</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('ME', e)}>ME</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('ND', e)}>MD</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('MA', e)}>MA</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('MI', e)}>MI</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('MN', e)}>MN</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('MS', e)}>MS</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('MO', e)}>MO</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('MT', e)}>MT</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('NE', e)}>NE</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('NV', e)}>NV</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('NH', e)}>NH</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('NJ', e)}>NJ</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('NM', e)}>NM</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('NY', e)}>NY</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('NC', e)}>NC</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('ND', e)}>ND</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('OH', e)}>OH</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('OK', e)}>OK</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('OR', e)}>OR</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('PA', e)}>PA</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('RI', e)}>RI</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('SC', e)}>SC</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('SD', e)}>SD</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('TN', e)}>TN</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('TX', e)}>TX</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('UT', e)}>UT</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('VT', e)}>VT</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('VA', e)}>VA</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('WA', e)}>WA</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('WV', e)}>WV</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('WI', e)}>WI</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.stateHandler('WY', e)}>WY</Dropdown.Item>
                        </DropdownButton>

                        <Form.Group controlId="formZip">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control onChange={(e) => this.handleInput('zip', e)} type="text" placeholder={this.state.zip} value={this.state.zip} />
                        </Form.Group>
                        <Button onClick={(e) => this.handleSubmit(e)} variant="success">Edit Vendor</Button>
                    </Form>
                </Container>
            </div>

        );
    }
}


export default EditForm; 