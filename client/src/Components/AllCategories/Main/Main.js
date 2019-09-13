import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Baby from '../Baby';
import Clothing from '../Clothing';
import Food from '../Food';
import Football from '../Football';
import Gifts from '../Gifts';
import Home from '../Home';
import Novelties from '../Novelties';
import Other from '../Other';
import NewArrivals from '../NewArrivals';
import './Main.css';



class AllCategories extends Component {

    state = {
        activeState: null, /* /states/ */

    }

    componentDidMount() {
        window.scrollTo(0, 0);
        let url = this.props.history.location.pathname;
        this.setState({ activeState: url }, function () { });


    }



    selectStateHandler(selected) {

        this.setState({ activeState: `/categories/${selected}` }, function () {
            this.props.history.replace(this.state.activeState);

        })

    }







    render() {
        let browsing, products
        switch (this.props.history.location.pathname) {
            case '/categories/Baby':
                browsing = (<h1>For the wee lads</h1>)
                products = (<Baby />)
                break;
            case '/categories/Clothing':
                browsing = (<h1>Clothes</h1>)
                products = (<Clothing />)
                break;
            case '/categories/Food':
                browsing = (<h1>Munchies</h1>)
                products = (<Food />)
                break;
            case '/categories/Football':
                browsing = (<h1>Greatest Sport in the World</h1>)
                products = (<Football />)
                break;
            case '/categories/Gifts':
                browsing = (<h1>Gifts</h1>)
                products = (<Gifts />)
                break;
            case '/categories/Home':
                browsing = (<h1>For la casa</h1>)
                products = (<Home />)
                break;
            case '/categories/Novelties-and-Art':
                browsing = (<h1>Hipster things</h1>)
                products = (<Novelties />)
                break;
            case '/categories/Other':
                browsing = (<h1>Everything Else</h1>)
                products = (<Other />)
                break;
            default:
                browsing = (<h1>New Arrivals</h1>)
                products = (<NewArrivals />)
        }


        return (

            <div className="states-page-body">
                <div className="states-sidebar">
                    <ListGroup variant="flush">
                        <ListGroup.Item onClick={() => this.selectStateHandler('New-Arrivals')}>New Arrivals</ListGroup.Item>
                        <ListGroup.Item onClick={() => this.selectStateHandler('Gifts')}>Gifts</ListGroup.Item>
                        <ListGroup.Item onClick={() => this.selectStateHandler('Novelties-and-Art')}>Novelties and Art</ListGroup.Item>
                        <ListGroup.Item onClick={() => this.selectStateHandler('Baby')}>Baby</ListGroup.Item>
                        <ListGroup.Item onClick={() => this.selectStateHandler('Home')}>Home</ListGroup.Item>
                        <ListGroup.Item onClick={() => this.selectStateHandler('Food')}>Food and Drink</ListGroup.Item>
                        <ListGroup.Item onClick={() => this.selectStateHandler('Clothing')}>Clothing</ListGroup.Item>
                        <ListGroup.Item onClick={() => this.selectStateHandler('Football')}>Football</ListGroup.Item>
                        <ListGroup.Item onClick={() => this.selectStateHandler('Other')}>Other</ListGroup.Item>
                    </ListGroup>
                </div>

                <div className="vendors-list">

                    {browsing}
                    <hr />
                    {products}


                </div>



            </div>
        )

    }

}


export default AllCategories;