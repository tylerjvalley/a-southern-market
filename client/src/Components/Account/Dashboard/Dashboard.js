import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Orders from './Orders/Orders';
import Wishlist from './Wishlist/Wishlist';
import Favorites from './Favorites/Favorites';
import Settings from './Settings/Settings';
import './Dashboard.css';


class Dashboard extends Component {

    state = {
        user: 'Tyler',
        activeState: null,

    }

    componentDidMount() {
        window.scrollTo(0, 0);
        let url = this.props.history.location.pathname;
        this.setState({ activeState: url }, function () { });
    }

    selectHandler(selected) {

        this.setState({ activeState: `/dashboard/${selected}` }, function () {
            this.props.history.replace(this.state.activeState);

        })

    }



    render() {

        let heading, content;

        switch (this.props.history.location.pathname) {
            case '/dashboard/Orders':
                heading = (<h1>Orders</h1>)
                content = (<Orders />)
                break;
            case '/dashboard/Wishlist':
                heading = (<h1>Wishlist</h1>)
                content = (<Wishlist />)
                break;
            case '/dashboard/Favorites':
                heading = (<h1>Favorites</h1>)
                content = (<Favorites />)
                break;
            case '/dashboard/Settings':
                heading = (<h1>Settings</h1>)
                content = (<Settings />)
                break;
           
            default:
                heading = (<h1>{this.state.user}'s Dashboard</h1>) 

        }





        return (
                <div className="states-page-body">
                    <div className="states-sidebar">
                        <ListGroup variant="flush">
                            <ListGroup.Item onClick={() => this.selectHandler('Orders')}>Orders</ListGroup.Item>
                            <ListGroup.Item onClick={() => this.selectHandler('Wishlist')}>Wishlist</ListGroup.Item>
                            <ListGroup.Item onClick={() => this.selectHandler('Favorites')}>Favorites</ListGroup.Item>
                            <ListGroup.Item onClick={() => this.selectHandler('Settings')}>Settings</ListGroup.Item>
                        </ListGroup>
                    </div>

                    <div className="dash-heading">

                        { heading }
                        <hr />
                        { content }


                    </div>
            
            </div>


        );
    }

}


export default Dashboard;