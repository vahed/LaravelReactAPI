import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './Header';
import Buttons from './Buttons';
import Body from './Body';

export default class Main extends Component {
    render() {
        return (
            <div>
                <BrowserRouter> 
                    <Header />				
                </BrowserRouter><br/><br/><br/>           
                <Buttons/><br/><br/><br/> 
				<Body />
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
