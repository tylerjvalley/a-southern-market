import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Account from './Components/Account/Account';
import Dashboard from './Components/Account/Dashboard/Dashboard';
import Admin from './Components/Admin/Admin';
import Register from './Components/Account/Register/Register';
import Cart from './Components/Cart/Cart';
import States from './Components/AllStates/Main/Main';
import Categories from './Components/AllCategories/Main/Main';
import AddItem from './Components/Admin/AddItem/AddItem';
import AddVendor from './Components/Admin/AddVendor/AddVendor';
import EditItem from './Components/Admin/EditItem/EditItem';
import EditVendor from './Components/Admin/EditVendor/EditVendor';
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
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/admin" component={Admin} />
        <Route path="/cart" component={Cart} />
        <Route path="/states/" component={States} />
        <Route path="/categories/" component={Categories} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin/add-item" component={AddItem} />
        <Route path="/admin/add-vendor" component={AddVendor} />
        <Route path="/admin/edit-item" component={EditItem} />
        <Route path="/admin/edit-vendor" component={EditVendor} />
        <Route component={NoMatch} />
      </Switch>
    </Router>

    <Footer />
    
    </>
  );
}

export default App;
