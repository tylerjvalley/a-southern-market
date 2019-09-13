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
import './Main.css';



class AllStates extends Component {

    state = {
        activeState: null, /* /states/ */
       
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        let url = this.props.history.location.pathname;
        this.setState({ activeState: url }, function(){});


    }

    

    selectStateHandler(selected) {
        
        this.setState({activeState: `/states/${selected}`}, function() {
            this.props.history.replace(this.state.activeState);
            
        })
        
    }

    

   

    

    render() {
        let browsing, vendors
        switch (this.props.history.location.pathname) {
            case '/states/Alabama':
                browsing = (<h1>Browsing Vendors from Alabama</h1>)
                vendors = (<Alabama />)
                break;
            case '/states/Arkansas':
                browsing = (<h1>Browsing Vendors from Arkansas</h1>)
                vendors = (<Arkansas />)
                break;
            case '/states/Florida':
                browsing = (<h1>Browsing Vendors from Florida</h1>)
                vendors = (<Florida />)
                break;
            case '/states/Georgia':
                browsing = (<h1>Browsing Vendors from Georgia</h1>)
                vendors = (<Georgia />)
                break;
            case '/states/Kentucky':
                browsing = (<h1>Browsing Vendors from Kentucky</h1>)
                vendors = (<Kentucky />)
                break;
            case '/states/Louisiana':
                browsing = (<h1>Browsing Vendors from Louisiana</h1>)
                vendors = (<Louisiana />)
                break;
            case '/states/Mississippi':
                browsing = (<h1>Browsing Vendors from Mississippi</h1>)
                vendors = (<Mississippi />)
                break;
            case '/states/North-Carolina':
                browsing = (<h1>Browsing Vendors from North Carolina</h1>)
                vendors = (<NorthCarolina />)
                break;
            case '/states/Oklahoma':
                browsing = (<h1>Browsing Vendors from Oklahoma</h1>)
                vendors = (<Oklahoma />)
                break;
            case '/states/South-Carolina':
                browsing = (<h1>Browsing Vendors from South Carolina</h1>)
                vendors = (<SouthCarolina />)
                break;
            case '/states/Tennessee':
                browsing = (<h1>Browsing Vendors from Tennessee</h1>)
                vendors = (<Tennessee />)
                break;
            case '/states/Texas':
                browsing = (<h1>Browsing Vendors from Texas</h1>)
                vendors = (<Texas />)
                break;
            case '/states/Virginia':
                browsing = (<h1>Browsing Vendors from Virginia</h1>)
                vendors = (<Virginia />)
                break;
            case '/states/West-Virginia':
                browsing = (<h1>Browsing Vendors from West Virginia</h1>)
                vendors = (<WestVirginia />)
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