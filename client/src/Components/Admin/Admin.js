import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { getFromStorage } from '../../assets/utils';
import AddItem from './AddItem/AddItem';
import AddVendor from './AddVendor/AddVendor';
import EditItem from './EditItem/EditItem';
import EditVendor from './EditVendor/EditVendor';
import axios from 'axios';
import './Admin.css'



class Admin extends Component {


    state = {
        user: '',
        isAdmin: true,

    }

    componentDidMount() {
        const obj = getFromStorage('southern_market');

        if (obj && obj.token) {
            axios.get(`http://localhost:5000/api/users/verify?token=${obj.token}`, obj.token)
                .then(res => {
                    this.setState({ user: res.data.id[0].userId })

                    axios.get(`http://localhost:5000/api/users/${this.state.user}`)
                        .then(res => {
                            if (res.data.isAdmin) {
                                this.setState({ isAdmin: true })
                            } else {
                                this.setState({ isAdmin: false })
                            }
                        })

                })
        }
    }

    renderRedirect = () => {
        if (!this.state.isAdmin) {
            return <Redirect to="/account" />
        }
    }

    render() {
        return (
            <div className="admin-page">
                <Card bg="secondary" className="card" text="white" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Add Vendor</Card.Title>
                        <Link to="/admin/add-vendor"><Button variant="info">Go</Button></Link>
                    </Card.Body>
                </Card>
                <Card bg="secondary" className="card" text="white" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Edit Vendors</Card.Title>
                        <Link to="/admin/edit-vendor"><Button variant="info">Go</Button></Link>
                    </Card.Body>
                </Card>
                <Card bg="secondary" className="card" text="white" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Add Item</Card.Title>
                        <Link to="/admin/add-item"><Button variant="info">Go</Button></Link>
                    </Card.Body>
                </Card>
                <Card bg="secondary" className="card" text="white" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Edit Items</Card.Title>
                        <Link to="/admin/edit-item"><Button variant="info">Go</Button></Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}




export default Admin;