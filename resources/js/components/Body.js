import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Body extends Component {
    constructor() {
        super();
        this.state = {
            metadata: []
        };
    }

    componentWillMount() {
        axios.get('metadata').then(response => {
            this.setState({
                metadata: response.data
            });
        }).catch(errors => {
            console.log(response.data);
        })
    }
    
    render() {
        return (
		
            <div className="metadata container">		
                <div>
                    <h1>Metadata API</h1>

                    <div className="row">
                        <div className="col-md-10"></div>
                        <div className="col-md-2">
                            
                        </div>
                    </div><br />

                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>imdbID</th>
                                <th>Type</th>
                                <th>Poster</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.metadata.map(meta => 
                            <tr key={meta.id}>
                                <td> {meta.title}</td>                            
                                <td>  {meta.date}</td>
                                <td> {meta.imdbID}</td>
                                <td> {meta.type}</td>
                                <td>  {meta.poster}</td>                           
                            </tr>
                            )}  
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default Body;
