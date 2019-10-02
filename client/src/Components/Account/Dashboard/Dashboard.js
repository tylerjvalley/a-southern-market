import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Orders from './Orders/Orders';
import Wishlist from './Wishlist/Wishlist';
import Favorites from './Favorites/Favorites';
import Settings from './Settings/Settings';
import Admin from '../../Admin/Admin';
import axios from 'axios';
import { getFromStorage } from '../../../assets/utils';
import { Redirect } from 'react-router-dom';
import './Dashboard.css';


class Dashboard extends Component {

    state = {
        user: '',
        userId: '',
        lastName: '',
        email: '',
        wishlist: [],
        isAdmin: false,
        activeState: null,
        redirect: false,
        token: ''

    }

    componentDidMount() {
        let url = this.props.history.location.pathname;
        this.setState({ activeState: url }, function () { });

        //check for a token
        const obj = getFromStorage('southern_market');
        if (obj && obj.token) {
            const token = obj.token;
            
            axios.get(`/api/users/verify?token=${token}`)
                .then(res => {
                    if (res) {
                        this.setState({
                            token: token,
                        });
                    }
                    //get user information based on token and userId
                    axios.get(`/api/users/${res.data.id[0].userId}`)
                         .then(user => {
                             this.setState({ 
                                 userId: user.data._id,
                                 user: user.data.firstName,
                                 lastName: user.data.lastName,
                                 email: user.data.email,
                                 wishlist: user.data.wishList,
                                 isAdmin: user.data.isAdmin
                             })
                         })
                         .catch(err => {
                             console.log(err)
                         })
                })
                .catch(err => {
                    console.log(err)
                })



        } else {
            this.setState({ redirect: true })
        }
    }

    selectHandler(selected) {

        this.setState({ activeState: `/dashboard/${selected}` }, function () {
            this.props.history.replace(this.state.activeState);

        })

    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/account" />
        }
    }


    logoutHandler = () => {
        
        axios.post(`/api/users/logout?token=${this.state.token}`)
            .then(res => {
                localStorage.removeItem('southern_market')
                console.log('Logged out')
                this.setState({ redirect: true })
            })
            .catch(err => {
                console.log(err);
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
                heading = (<h1>Your Wishlist</h1>)
                content = (<Wishlist wishlist={this.state.wishlist}
                                     user={this.state.userId} />)
                break;
            case '/dashboard/Favorites':
                heading = (<h1>Favorites</h1>)
                content = (<Favorites />)
                break;
            case '/dashboard/Settings':
                heading = (<h1>Settings</h1>)
                content = (<Settings id={this.state.userId}
                                     firstName={this.state.user}
                                     lastName={this.state.lastName}
                                     email={this.state.email} />)
                break;
            case '/dashboard/Admin':
                heading = (<h1>Admin</h1>)
                content = (<Admin />)
                break;
           
            default:
                heading = (<h1>{this.state.user}'s Dashboard</h1>) 

        }





        return (
                <div className="states-page-body">
                {this.renderRedirect()}
                    <div className="states-sidebar">
                        <ListGroup variant="flush">
                            <ListGroup.Item onClick={() => this.selectHandler('Orders')}>Orders</ListGroup.Item>
                            <ListGroup.Item onClick={() => this.selectHandler('Wishlist')}>Wishlist</ListGroup.Item>
                            <ListGroup.Item onClick={() => this.selectHandler('Favorites')}>Favorites</ListGroup.Item>
                            <ListGroup.Item onClick={() => this.selectHandler('Settings')}>Settings</ListGroup.Item>
                            {this.state.isAdmin ? 
                            (<ListGroup.Item onClick={() => this.selectHandler('Admin')}>Admin</ListGroup.Item>)
                            : null
                            }
                            <ListGroup.Item onClick={() => this.logoutHandler()}>Logout</ListGroup.Item>
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