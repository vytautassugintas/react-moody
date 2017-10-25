import React, {Component} from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import {connect} from 'react-redux';
import {Container, Menu} from 'semantic-ui-react';
import Main from './main/Main';
import firebase from '../firebase';
import {setUser} from '../store/actions';

export const Poll = () => <div><p>Poll</p></div>;
export const Topics = () => <div><p>Topics</p></div>;

class Home extends Component {

  logout = () => {
    firebase.auth().signOut().then(() => {
      this.props.dispatch(setUser(null));
      this.props.history.push('/');
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Menu pointing secondary>
            <Menu.Item as={NavLink} to="/home/main">Main</Menu.Item>
            <Menu.Item as={NavLink} to="/home/poll">Poll</Menu.Item>
            <Menu.Item as={NavLink} to="/home/topics">Topics</Menu.Item>
            <Menu.Item onClick={this.logout}>Logout</Menu.Item>

          </Menu>
          <Container text>
            <div>
              <Route path="/home/main" component={Main}/>
              <Route path="/home/poll" component={Poll}/>
              <Route path="/home/topics" component={Topics}/>
            </div>
          </Container>
        </div>
      </Router>
    );
  }
}

export default connect()(Home);
