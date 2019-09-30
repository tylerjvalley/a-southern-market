import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import EditForm from './EditForm';
import axios from 'axios';




class EditItem extends Component {


    state = {
        items: [],
        selected: false,
        itemId: '',
        itemName: '',
        itemDesc: '',
        itemPrice: 0,
        itemVendor: '',
        itemCategory: '',
        itemImage: '',
        isNewArrival: false,
        isFeatured: false,
    }

    componentDidMount() {
        //get all vendors 
        axios.get('/api/items/all')
            .then(res => {
                if (res) {
                    const items = [];
                    res.data.map(item => {
                        return items.push(item);
                    })
                    this.setState({ items: items })
                }
            })
            .catch(err => console.log(err));
    }

    handleSelect = (item, e) => {
        e.preventDefault();
        this.setState({
            selected: true,
            itemId: item._id,
            itemName: item.name,
            itemDesc: item.description,
            itemPrice: item.price,
            itemVendor: item.vendor,
            itemCategory: item.category,
            itemImage: item.itemImage,
            isNewArrival: item.newArrival,
            isFeatured: item.featured
        })
    }

    

    render() {

        

        const cards = this.state.items.map(item => {
            const itemSource = `../../../../../${item.itemImage}`
            return (
                <Card key={item._id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={itemSource} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            {item.description} <br />
                            Vendor: {item.vendor} <br />
                            Price: ${item.price}
                        </Card.Text>
                        <Button onClick={(e) => this.handleSelect(item, e)} variant="primary">Edit</Button>
                    </Card.Body>
                </Card>
            )

        })
        return (
            <div className="register-page">
                <div className="register-page-top">
                    <Link to="/dashboard/Admin" className="back-button-reg"><Button variant="secondary">Back</Button></Link>
                    <h1>Edit Item</h1>
                </div>
                <Container style={{ display: 'flex' }}>
                    {!this.state.selected ? (cards) :
                        (<EditForm
                            id={this.state.itemId}
                            name={this.state.itemName}
                            description={this.state.itemDesc}
                            price={this.state.itemPrice}
                            vendor={this.state.itemVendor}
                            category={this.state.itemCategory}
                            newArrival={this.state.isNewArrival}
                            featured={this.state.isFeatured}
                        />)}

                </Container>
            </div>
        )
    }
}




export default EditItem;