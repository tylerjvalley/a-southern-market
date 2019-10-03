import React, { Component } from 'react';
import './Cart.css';
import Card from 'react-bootstrap/Card';
//redux
import { connect } from 'react-redux';
import { getItems } from '../../actions/index';

class Cart extends Component {

    render() {
        if (this.props.cart) {
            return (
                <div>
                    <h1 style={{textAlign: 'center'}}>Your Cart</h1>
                    {this.props.cart.map(el => {
                        const imageSource = `../../../../${el.item.itemImage}`
                        return (
                            
                            <Card key={el.item._id} className="product" style={{ backgroundImage: "url(" + imageSource + ")" }}>
                                <Card.Body>
                                    <Card.Title style={{ color: 'black' }} className="na-item">{el.item.name}</Card.Title>
                                    <hr style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
                                </Card.Body>
                            </Card>  
                        )
                    })}
                </div>
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