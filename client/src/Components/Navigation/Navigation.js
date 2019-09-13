import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Navigation.css';




class navigation extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            mobileBrandDisplay: null,
            screenWidth: window.innerWidth,
            closeDropDown: false,
            
        }

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions)
    }

    componentWillMount() {
        window.removeEventListener('resize', this.updateWindowDimensions)
    }


    //changes the brandDisplay state based on screen width.
    setHeader() {
        if (this.state.screenWidth >= 992) {
            this.setState({mobileBrandDisplay: false});
        } else {
            this.setState({mobileBrandDisplay: true});
        }
    }

    

    updateWindowDimensions() {
        this.setState({ screenWidth: window.innerWidth });
        this.setHeader();
    }


    clickedHandler() {
        this.setState({closeDropDown: true})
    }
    



    

    render() {
 
        let brandMobileDisplay, brandDesktopDisplay;
        let dropDownClass = this.state.closeDropDown ? 'removed' : 'shop-drop';
       
        // shows the mobile version nav header or desktop version based on if mobileBrandDisplay is set to true or false
        if (this.state.mobileBrandDisplay) {
            brandMobileDisplay = { display: 'block' };
            brandDesktopDisplay = { display: 'none' };
        } else if (!this.state.mobileBrandDisplay) {
            brandMobileDisplay = { display: 'none' };
            brandDesktopDisplay = { display: 'block' };
        }
   
        return (

            <Navbar expand="lg">
                <button className="button-search-toggle mobile-search">
                    <i className="fa fa-search"></i>
                </button>

                <Navbar.Brand style={brandMobileDisplay} className="southern-brand"><Link to="/">A Southern Market</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <div className="dropdowns">


                            <NavDropdown title="Shop By State" id="byState" className={dropDownClass}>
                                <Link to="/states/Alabama" onClick={this.clickedHandler}>Alabama</Link>
                                <Link to="/states/Arkansas" onClick={this.clickedHandler}>Arkansas</Link>
                                <Link to="/states/Florida" onClick={this.clickedHandler}>Florida</Link>
                                <Link to="/states/Georgia" onClick={this.clickedHandler}>Georgia</Link>
                                <Link to="/states/Kentucky" onClick={this.clickedHandler}>Kentucky</Link>
                                <Link to="/states/Louisiana" onClick={this.clickedHandler}>Louisiana</Link>
                                <Link to="/states/Mississippi" onClick={this.clickedHandler}>Mississippi</Link>
                                <Link to="/states/North-Carolina" onClick={this.clickedHandler}>North Carolina</Link>
                                <Link to="/states/Oklahoma" onClick={this.clickedHandler}>Oklahoma</Link>
                                <Link to="/states/South-Carolina" onClick={this.clickedHandler}>South Carolina</Link>
                                <Link to="/states/Tennessee" onClick={this.clickedHandler}>Tennessee</Link>
                                <Link to="/states/Texas" onClick={this.clickedHandler}>Texas</Link>
                                <Link to="/states/Virginia" onClick={this.clickedHandler}>Virginia</Link>
                                <Link to="/states/West-Virginia" onClick={this.clickedHandler}>West Virginia</Link>
                            </NavDropdown>
                            <NavDropdown title="Shop By Category" id="byCat" className="shop-drop">
                                <Link to="/categories/New-Arrivals" onClick={this.clickedHandler}>New Arrivals</Link>
                                <Link to="/categories/Gifts" onClick={this.clickedHandler}>Gifts</Link>
                                <Link to="/categories/Novelties-and-Art" onClick={this.clickedHandler}>Novelties and Art</Link>
                                <Link to="/categories/Baby" onClick={this.clickedHandler}>Baby</Link>
                                <Link to="/categories/Home" onClick={this.clickedHandler}>Home</Link>
                                <Link to="/categories/Food" onClick={this.clickedHandler}>Food and Drink</Link>
                                <Link to="/categories/Clothing" onClick={this.clickedHandler}>Clothing</Link>
                                <Link to="/categories/Football" onClick={this.clickedHandler}>Football</Link>
                                <Link to="/categories/Other" onClick={this.clickedHandler}>Other</Link>
                            </NavDropdown>

                        </div>
                        <Navbar.Brand style={brandDesktopDisplay} className="southern-brand"><Link to="/">A Southern Market</Link></Navbar.Brand>

                        <div className="account-cart">
                            <Link to="/account">Account</Link>
                            <Link to="/cart">Cart</Link>
                        </div>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        );
    }

    
    
};



export default navigation;