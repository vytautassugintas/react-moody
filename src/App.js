import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Grid} from 'semantic-ui-react';
import Login from "./widget-login/Login";
import SignUp from "./widget-sign-up/SignUp";
import Home from "./home/Home";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-login">
        <Grid columns={3} stackable centered padded>
          <Grid.Column>
            <Router>
              <div>
                <Route path="/" exact component={Login}/>
                <Route path="/sign-up" component={SignUp}/>
                <Route path="/home" component={Home}/>
              </div>
            </Router>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
