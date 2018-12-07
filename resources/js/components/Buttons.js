import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form ,Button, Table } from 'react-router-dom';
import axios from 'axios';
//import Body from './Body';

class Buttons extends Component {
    //initial the state of three array variable and bind them to onClick methods
	constructor(props) {
		super(props);
		this.state = { buttonOne: {},
					   buttonTwo: {},
					   buttonThree: {}
		}
        
        this.handleClickButtonOne = this.handleClickButtonOne.bind(this);
		this.handleClickButtonTwo = this.handleClickButtonTwo.bind(this);
		this.handleClickButtonThree = this.handleClickButtonThree.bind(this);
		
    }
    //post data to Laravel controller and store json into database on clicking first button
    handleClickButtonOne(e){
		e.preventDefault();
		axios.post('postdata',{
			data: JSON.stringify(this.state.buttonOne)
		  })
		  .then(function (response) {
			console.log(response);
           //alert(response);
		 }) 
    };
	//post data to Laravel controller and store json into database on clicking second button
    handleClickButtonTwo(e){
		e.preventDefault();
		axios.post('postdata',{
			data: JSON.stringify(this.state.buttonTwo)
		  })
		  .then(function (response) {
			console.log(response);
           //alert(response);
		 }) 
    };
	//post data to Laravel controller and store json into database on clicking third button
	handleClickButtonThree(e){
		e.preventDefault();
		axios.post('postdata',{
			data: JSON.stringify(this.state.buttonThree)
		  })
		  .then(function (response) {
			console.log(response);
           //alert(response);
		 }) 
    };
	//fetch all API data from three URLs and store them into new states  
	componentDidMount(){
        Promise.all([
            fetch('http://www.omdbapi.com/?s=Matrix&apikey=720c3666'),
            fetch('http://www.omdbapi.com/?s=Matrix%20Reloaded&apikey=720c3666 '),
			fetch('http://www.omdbapi.com/?s=Matrix​%20Revolutions&apikey=720c3666')
        ])
        .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
        .then(([data1, data2, data3]) => this.setState({
            buttonOne: data1, 
            buttonTwo: data2,
			buttonThree: data3
        }));
    }
    //render buttons
	render() {
        return (
            <div className="container">
                    <button className="btn btn-primary" onClick={(e) =>this.handleClickButtonOne(e)}>
                        Fetch API1
                    </button>&nbsp;&nbsp;
					<button className="btn btn-primary" onClick={this.handleClickButtonTwo}>
                        Fetch API2
                    </button>&nbsp;&nbsp; 
					<button className="btn btn-primary" onClick={this.handleClickButtonThree}>
                        Fetch API3
                    </button>
            </div>
        );
    }
}
export default Buttons;
