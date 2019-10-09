import React, { Component } from 'react';
import './Cart.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import ItemModal from '../AllCategories/ItemModal/ItemModal';
import './Cart.css';
//redux
import { connect } from 'react-redux';
import { getItems } from '../../actions/index';

class Cart extends Component {

    state = {
        tax: '$3.00',
        subTotal: '$24.97',
        total: '$27.97'
    }

    render() {

        const tableNames = this.props.cart.map(el => {
                return (
                    <th>{el.item.name}</th>
                )
            })

        const tablePrices = this.props.cart.map(el => {
            return (
                <td>${el.item.price}</td>
            )
        })
        
        if (this.props.cart) {
            return (
                <Container className="cart-container">
                    <h1 style={{ textAlign: 'center' }}>Your Cart</h1>
                    <div className="cart-items">
                        {this.props.cart.map(el => {
                            const imageSource = `../../../../${el.item.itemImage}`
                            return (
                                <div key={el.item._id} className="cart-item">
                                    <Card className="product" style={{ backgroundImage: "url(" + imageSource + ")" }}>
                                        <ItemModal item={el.item}/>
                                        <Button variant="danger" onClick={this.handleRemove}>Remove</Button>
                                    </Card> 
                                    <h4>{el.item.name}</h4> 
                                    <h6>${el.item.price}</h6>
                                </div>
                            )
                        })}
                    </div>
                    <div className="cart-price">

                        
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    {tableNames}
                                    <th>Subtotal</th>
                                    <th>Tax</th>
                                    <th>Total</th>
                                </tr>
                                
                            </thead>
                            <tbody>
                                <tr>
                                    {tablePrices}
                                    <td>{this.state.subTotal}</td>
                                    <td>{this.state.tax}</td>
                                    <td>{this.state.total}</td> 
                                </tr>             
                            </tbody>
                        </Table>
                    </div>

                    <Button variant="success">Continue to Checkout</Button>
                </Container>
            )
        } else {
            return (
                <h1>Cart is Empty</h1>
            )
        }
        
    }
    
};

const mapStateToProps = state => ({
    cart: state.cart.items
})


export default connect(mapStateToProps, { getItems })(Cart);

/*
<tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td colSpan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>*/