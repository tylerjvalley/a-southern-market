import React, { Component } from 'react';
import States from './States/States';
import HomeJumbo from './HomeJumbo/HomeJumbo';
import NewArrivals from './NewArrivals/NewArrivals';
import Featured from './Featured/Featured';
import Collections from './Collections/Collections';
import { Link } from 'react-router-dom';
import HomeImage from '../../assets/images/home.png';
import SportsFanImage from '../../assets/images/sportsfan.jpg';
import FoodImage from '../../assets/images/foodanddrink.jpg';
import GiftsImage from '../../assets/images/gifts.jpg';
import ArtsyImage from '../../assets/images/paintbrush.jpg';
import axios from 'axios';
import './Home.css';


class Home extends Component {

    state = {
        newArrivals: [],
        featured: [],
    }

    componentDidMount() {
        axios.get('/api/items/all')
            .then(res => {
                if (res) {
                    let newArrivals, featured
                    newArrivals = res.data.filter(item => item.newArrival);
                    featured = res.data.filter(item => item.featured);

                    this.setState({
                        newArrivals: newArrivals,
                        featured: featured
                    })
                }
            })
            .catch(err => console.log(err));
    }
 
    render() {

        return (
    
            <div className="homepage">
                <HomeJumbo />

                <div className="shop-by-state">
                    <h1>Shop By State</h1>
                    <p>Select your state to browse vendors from your area</p>
                    <h4><Link to="/states/">All States</Link></h4>
                    <hr />
                </div> 
                
                <States />

                <div className="collections">
                    <h1>Collections</h1>
                    <h4><Link to="/categories/New-Arrivals">All Collections</Link></h4>
                    <hr />
                </div>

                <Collections
                    link="Novelties-and-Art"
                    image={ArtsyImage}
                    title="Novelties and Art" />

                <Collections
                    link="Gifts"
                    image={GiftsImage}
                    title="Gifts" />

                <Collections
                    link="Home"
                    image={HomeImage}
                    title="For Your Home" />

                <Collections
                    link="Football"
                    image={SportsFanImage}
                    title="For Sports Fans" />
                
                <Collections 
                    link="Food"
                    image={FoodImage}
                    title="Food and Drink"/>

                <div className="new-arrivals">
                    <h1>Featured</h1>
                    <hr />
                </div>

                <Featured
                    items={this.state.featured} />

                <div className="new-arrivals">
                    <h1>New Arrivals</h1>
                    <h4><Link to="/categories/New-Arrivals">Shop All</Link></h4>
                    <hr />
                </div>
            
            <NewArrivals
                items={this.state.newArrivals} />
      
            </div>
        );
    }
    
};


export default Home;