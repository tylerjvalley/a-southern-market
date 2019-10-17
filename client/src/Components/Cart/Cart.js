import React, { Component } from 'react';
import './Cart.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import ItemModal from '../AllCategories/ItemModal/ItemModal';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './Cart.css';
//redux
import { connect } from 'react-redux';
import { removeFromCart, setTotal } from '../../actions/index';

class Cart extends Component {

    state = {
        tax: 0,
        cart: [],
        subTotal: 0,
        total: 0,
    }

    componentDidMount() {
        const cartItems = this.props.cart;
        let subTotal = 0;
        let total = 0;
        let tax = 3.5;
        let cart = [];

        cartItems.forEach(el => {
            subTotal += el.price
            cart.push(el)
        });

        total = subTotal + tax;

        this.setState({
             subTotal: subTotal.toFixed(2),
             total: total.toFixed(2),
             tax: tax.toFixed(2),
             cart: cart
        }, () => console.log(this.state.cart));
    }

    removeFromCart = item => {
        this.props.removeFromCart(item._id);

        const price = item.price;
        let subTotal = this.state.subTotal;
        let total = this.state.total;
        subTotal -= price;
        total -= price;

        //remove from cart.js state
        const id = item._id;
        const updatedCart = this.state.cart.filter(cart => cart._id !== id);

        this.setState({
            subTotal: subTotal.toFixed(2),
            total: total.toFixed(2),
            cart: updatedCart
        }, () => console.log(this.state.cart))
        
    }

    handleQuantity = (item, e) => {
    
        let subTotal = this.state.subTotal, total = this.state.total, price; 
        price = item.price;

        price *= e.target.value;

        subTotal = parseFloat(subTotal) + price
        total = parseFloat(total) + price
            
        this.setState({
            subTotal: subTotal.toFixed(2),
            total: total.toFixed(2)
        })
        
    }

    handleSubmit = () => {
        this.props.setTotal(this.state.total);
    }

    render() {

        const tableNames = this.props.cart.map(el => {
                return (
                    <th key={el.name}>
                        {el.name}
                        <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label style={{fontSize: '.8em'}}>Quantity</Form.Label>
                                <Form.Control onChange={(e) => this.handleQuantity(el, e)} style={{ width: '15%'}}as="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </th>
                )
            })

        const tablePrices = this.props.cart.map(el => {
            return (
                <td key={el.price}>${el.price}</td>
            )
        })
        
        if (this.props.cart.length > 0) {
            return (
                <Container className="cart-container">
                    <h1 style={{ textAlign: 'center' }}>Your Cart</h1>
                    <div className="cart-items">
                        {this.props.cart.map(el => {
                            const imageSource = `../../../../${el.itemImage}`
                            return (
                                <div key={el._id} className="cart-item">
                                    <Card className="product" style={{ backgroundImage: "url(" + imageSource + ")" }}>
                                        <ItemModal item={el}/>
                                        <Button variant="danger" onClick={() => this.removeFromCart(el)}>Remove</Button>
                                    </Card> 
                                    <h4>{el.name}</h4> 
                                    <h6>${el.price}</h6>
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
                                    <td>${this.state.subTotal}</td>
                                    <td>${this.state.tax}</td>
                                    <td>${this.state.total}</td> 
                                </tr>             
                            </tbody>
                        </Table>
                    </div>
                    <Link to="/cart/checkout"><Button onClick={this.handleSubmit} variant="success">Continue to Checkout</Button></Link>
                </Container>
            )
        } else {
            return (
                <h1 style={{textAlign: 'center'}}>Cart is Empty</h1>
            )
        }
        
    }
    
};

const mapStateToProps = state => ({
    cart: state.cart.items
})

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: item => dispatch(removeFromCart(item)),
        setTotal: total => dispatch(setTotal(total))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);

