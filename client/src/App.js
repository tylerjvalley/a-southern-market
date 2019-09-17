import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Account from './Components/Account/Account';
import Register from './Components/Account/Register/Register';
import Cart from './Components/Cart/Cart';
import States from './Components/AllStates/Main/Main';
import Categories from './Components/AllCategories/Main/Main';
import NoMatch from './Components/NoMatch';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <>
    
    <Router>
     <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/account" component={Account} />
        <Route path="/sign-up" component={Register} />
        <Route path="/cart" component={Cart} />
        <Route path="/states/" component={States} />
        <Route path="/categories/" component={Categories} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
    </Router>

    <Footer />
    
    </>
  );
}

export default App;
