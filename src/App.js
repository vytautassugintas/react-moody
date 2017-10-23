import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'semantic-ui-react';
import Login from "./widget-login/Login";
import SignUp from "./widget-sign-up/SignUp";
import Home from "./home/Home";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path="/home" component={Home}/>
            <Container text className="padding-top--lg">
              <Route path="/" exact component={Login}/>
              <Route path="/sign-up" component={SignUp}/>
            </Container>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
