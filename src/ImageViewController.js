import React, { Component } from 'react';
import Login from './screens/login/Login';
import Home from './screens/home/Home';
import Profile from './screens/profile/Profile';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Redirect} from 'react-router-dom';

class ImageViewController extends Component {

    constructor() {
        super();
        this.baseUrl = "v1/users/self/";
    }
    render() {
        return (
            <Router>
                <div className="main-container">
                    <Route exact path='/' render={(props) => <Login {...props} baseUrl={this.baseUrl} />} />
                    <Route path='/home' render={(props) => (sessionStorage.getItem("access-token") !==null? <Home {...props} baseUrl={this.baseUrl} loggedIn="true" showSearchTab ="true" /> :  <Redirect to="/"/>)} />
                    <Route path='/profile' render={(props) =>(sessionStorage.getItem("access-token") !==null? <Profile {...props} baseUrl={this.baseUrl} loggedIn="true" />: <Redirect to="/"/>) } />
                </div>
            </Router>
        )
    }
}

export default ImageViewController;
