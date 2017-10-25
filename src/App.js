import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import {Container, Loader} from 'semantic-ui-react';
import Login from './widget-login/Login';
import SignUp from './widget-sign-up/SignUp';
import Home from './home/Home';
import firebase from './firebase';
import PrivateRoute from './route/PrivateRoute';
import './App.css';

class App extends Component {

  homePath = '/home/main';

  constructor(props) {
    super(props);

    this.state = {
      user: undefined,
      canRedirectHome: false,
      redirectHome: false,
      redirectToLogin: false,
      isLoading: true
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user !== null) {
        this.setState({user: user, redirectHome: true, isLoading: false});
      } else {
        this.setState({
          user: null,
          redirectHome: false,
          isLoading: false
        });
      }
    });
  }

  render() {
    const {redirectHome, isLoading} = this.state;

    if (isLoading) {
      return (
        <div>
          <Loader active className="padding-top--lg" inline='centered'/>
        </div>
      )
    } else {
      return (
        <div>
          <Router>
            <div>
              <PrivateRoute user={this.state.user} path="/home" component={Home}/>
              <Container text className="padding-top--lg">
                <Route exact path="/" render={() => (
                  redirectHome ? (
                    <Redirect to={this.homePath}/>
                  ) : (
                    <Login user={this.state.user}/>
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
}

export default App;
