import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Alabama from '../Alabama';
import Georgia from '../Georgia';
import Florida from '../Florida';
import Arkansas from '../Arkansas';
import Kentucky from '../Kentucky';
import Louisiana from '../Louisiana';
import Mississippi from '../Mississippi';
import NorthCarolina from '../NorthCarolina';
import Oklahoma from '../Oklahoma';
import SouthCarolina from '../SouthCarolina';
import Tennessee from '../Tennessee';
import Texas from '../Texas';
import Virginia from '../Virginia';
import WestVirginia from '../WestVirginia';
import axios from 'axios';
import './Main.css';



class AllStates extends Component {

    state = {
        activeState: null, /* /states/ */
        vendors: []
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        let url = this.props.history.location.pathname;
        this.setState({ activeState: url }, function(){});
        axios.get('/api/vendors/all')
            .then(res => {
                if (res) {
                    const allVendors = [];
                    res.data.map(vendor => {
                        return allVendors.push(vendor);
                    })
                    this.setState({ vendors: allVendors })
                }
            })

    }

    seperateVendors = (state) => {
       const stateVendors = []
       this.state.vendors.map(vendor => {
           return vendor.state === state ? stateVendors.push(vendor) : null;
       })

        return stateVendors;
    }

    selectStateHandler(selected) {
        
        this.setState({activeState: `/states/${selected}`}, function() {
            this.props.history.replace(this.state.activeState);
            
        })
        
    }
    
    render() {
        let browsing, vendors, selectedVendors
        switch (this.props.history.location.pathname) {
            case '/states/Alabama':
                browsing = (<h1>Browsing Vendors from Alabama</h1>)
                selectedVendors = this.seperateVendors('AL');
                vendors = (<Alabama vendors={selectedVendors} />);
                break;
            case '/states/Arkansas':
                browsing = (<h1>Browsing Vendors from Arkansas</h1>)
                selectedVendors = this.seperateVendors('AR');
                vendors = (<Arkansas vendors={selectedVendors} />)
                break;
            case '/states/Florida':
                browsing = (<h1>Browsing Vendors from Florida</h1>)
                selectedVendors = this.seperateVendors('FL');
                vendors = (<Florida vendors={selectedVendors}/>)
                break;
            case '/states/Georgia':
                browsing = (<h1>Browsing Vendors from Georgia</h1>)
                selectedVendors = this.seperateVendors('GA');
                vendors = (<Georgia vendors={selectedVendors} />)
                break;
            case '/states/Kentucky':
                browsing = (<h1>Browsing Vendors from Kentucky</h1>)
                selectedVendors = this.seperateVendors('KY');
                vendors = (<Kentucky vendors={selectedVendors} />)
                break;
            case '/states/Louisiana':
                browsing = (<h1>Browsing Vendors from Louisiana</h1>)
                selectedVendors = this.seperateVendors('LA');
                vendors = (<Louisiana vendors={selectedVendors} />)
                break;
            case '/states/Mississippi':
                browsing = (<h1>Browsing Vendors from Mississippi</h1>)
                selectedVendors = this.seperateVendors('MS');
                vendors = (<Mississippi vendors={selectedVendors} />)
                break;
            case '/states/North-Carolina':
                browsing = (<h1>Browsing Vendors from North Carolina</h1>)
                selectedVendors = this.seperateVendors('NC');
                vendors = (<NorthCarolina vendors={selectedVendors} />)
                break;
            case '/states/Oklahoma':
                browsing = (<h1>Browsing Vendors from Oklahoma</h1>)
                selectedVendors = this.seperateVendors('OK');
                vendors = (<Oklahoma vendors={selectedVendors} />)
                break;
            case '/states/South-Carolina':
                browsing = (<h1>Browsing Vendors from South Carolina</h1>)
                selectedVendors = this.seperateVendors('SC');
                vendors = (<SouthCarolina vendors={selectedVendors} />)
                break;
            case '/states/Tennessee':
                browsing = (<h1>Browsing Vendors from Tennessee</h1>)
                selectedVendors = this.seperateVendors('TN');
                vendors = (<Tennessee vendors={selectedVendors} />)
                break;
            case '/states/Texas':
                browsing = (<h1>Browsing Vendors from Texas</h1>)
                selectedVendors = this.seperateVendors('TX');
                vendors = (<Texas vendors={selectedVendors} />)
                break;
            case '/states/Virginia':
                browsing = (<h1>Browsing Vendors from Virginia</h1>)
                selectedVendors = this.seperateVendors('VA');
                vendors = (<Virginia vendors={selectedVendors} />)
                break;
            case '/states/West-Virginia':
                browsing = (<h1>Browsing Vendors from West Virginia</h1>)
                selectedVendors = this.seperateVendors('WV');
                vendors = (<WestVirginia vendors={selectedVendors} />)
                break;
            default: 
                browsing = (<h1>Please Select a State</h1>)
        }


         return (
            
            <div className="states-page-body">
                <div className="states-sidebar">
                    <ListGroup variant="flush">
                        <ListGroup.Item onClick={() => this.selectStateHandler('Alabama')}>Alabama</ListGroup.Item>
                        <ListGroup.Item onClick={() => this.selectStateHandler('Arkansas')}>Arkansas</ListGroup.Item>
                        <ListGroup.Item onClick={() => this.selectStateHandler('Florida')}>Florida</ListGroup.Item>
                        <ListGroup.Item onClick={() => this.selectStateHandler('Georgia')}>Georgia</ListGroup.Item>
                        <ListGroup.Item onClick={() => this.selectStateHandler('Kentucky')}>Kentucky</ListGroup.Item>
                        <ListGroup.Item onClick={() => this.selectStateHandler('Louisiana')}>Louisiana</ListGroup.Item>
                        <ListGroup.Item onClick={() => this.selectStateHandler('Mississippi')}>Mississippi</ListGroup.Item>
                        <ListGroup.Item onClick={() => this.selectStateHandler('North-Carolina')}>North Carolina</ListGroup.Item>
                        <ListGroup.Item onClick={() => this.selectStateHandler('Oklahoma')}>Oklahoma</ListGroup.Item>
                        <ListGroup.Item onClick={() => this.selectStateHandler('South-Carolina')}>South Carolina</ListGroup.Item>
                        <ListGroup.Item onClick={() => this.selectStateHandler('Tennessee')}>Tennessee</ListGroup.Item>
                        <ListGroup.Item onClick={() => this.selectStateHandler('Texas')}>Texas</ListGroup.Item>
                        <ListGroup.Item onClick={() => this.selectStateHandler('Virginia')}>Virginia</ListGroup.Item>
                        <ListGroup.Item onClick={() => this.selectStateHandler('West-Virginia')}>West Virginia</ListGroup.Item>
                    </ListGroup>
                </div>

                <div className="vendors-list">

                    {browsing}
                    <hr />  
                     {vendors}
                    
                               
                </div>

                

            </div>
        )
        
    }
    
}


export default AllStates;