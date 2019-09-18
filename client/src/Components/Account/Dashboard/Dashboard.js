import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


class Dashboard extends Component {

    state = {
        user: '',

    }

    componentDidMount() {
        
    }


    render() {
        return (
                <div className="states-page-body">
                    <div className="states-sidebar">
                        <ListGroup variant="flush">
                            <ListGroup.Item onClick={() => this.selectStateHandler('Alabama')}>Orders</ListGroup.Item>
                            <ListGroup.Item onClick={() => this.selectStateHandler('Arkansas')}>Wishlist</ListGroup.Item>
                            <ListGroup.Item onClick={() => this.selectStateHandler('Florida')}>Favorites</ListGroup.Item>
                            <ListGroup.Item onClick={() => this.selectStateHandler('Georgia')}>Settings</ListGroup.Item>
                        </ListGroup>
                    </div>

                    <div className="vendors-list">

                        <h1>Hello {this.state.user}</h1>
                        <hr />
                        <h1>Test</h1>


                    </div>
            
            </div>


        );
    }

}


export default Dashboard;