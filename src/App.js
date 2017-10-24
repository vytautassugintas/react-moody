import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import {Container} from 'semantic-ui-react';
import Login from "./widget-login/Login";
import SignUp from "./widget-sign-up/SignUp";
import Home from "./home/Home";
import firebase from "./firebase";
import './App.css';

class App extends Component {

  homePath = '/home/main';

  constructor(props) {
    super(props);

    this.state = {
      user: undefined,
      canRedirectHome: false,
      redirectHome: false
    };

    // if (this.props.location.pathname !== this.homePath) {
    //   this.setState({canRedirectHome: true});
    // }
    //
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({user: user, redirectHome: true});
      }
    });
  }

  render() {
    const {redirectHome} = this.state;

    return (
      <div>
        <Router>
          <div>
            <Route path="/home" component={Home}/>
            <Container text className="padding-top--lg">
              <Route exact path="/" render={() => (
                redirectHome ? (
                  <Redirect to={this.homePath}/>
                ) : (
                  <Login />
                )
              )}/>
              <Route path="/sign-up" component={SignUp}/>
            </Container>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
