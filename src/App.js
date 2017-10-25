import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import {connect} from 'react-redux';
import {Container, Loader} from 'semantic-ui-react';
import Login from './widget-login/Login';
import SignUp from './widget-sign-up/SignUp';
import Home from './home/Home';
import firebase from './firebase';
import PrivateRoute from './route/PrivateRoute';
import {setUser} from './store/actions';
import './App.css';

class App extends Component {

  homePath = '/home/main';

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user !== null) {
        this.props.dispatch(setUser(user));
      } else {
        this.props.dispatch(setUser(null));
      }
      this.setState({isLoading: false});
    });
  }

  render() {
    const {isLoading} = this.state;
    const redirectHome = this.props.user !== null;

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
              <PrivateRoute user={this.props.user} path="/home" component={Home}/>
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
}

const mapStateToProps = state => ({
  user: (state.user)
});

export default connect(mapStateToProps)(App);
