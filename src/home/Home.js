import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect, NavLink, Link} from 'react-router-dom'
import {Container, Menu} from 'semantic-ui-react';
import Main from './main/Main';
import {createStore} from 'redux'

import todoApp from '../store/reducers'
import {
  addTodo,
  removeTodo,
} from '../store/actions'


let store = createStore(todoApp);

export const Poll = () => <div><p>Poll</p></div>;
export const Topics = () => <div><p>Topics</p></div>;

class Home extends Component {

  render() {
    store.subscribe(() =>
      console.log(store.getState())
    );

    store.dispatch(addTodo('Learn about actions'));
    store.dispatch(addTodo('Learn about reducers'));
    store.dispatch(addTodo('Learn about store'));

    return (
      <Router>
        <div>
          <Menu pointing secondary>
            <Menu.Item as={NavLink} to="/home/main">Main</Menu.Item>
            <Menu.Item as={NavLink} to="/home/poll">Poll</Menu.Item>
            <Menu.Item as={NavLink} to="/home/topics">Topics</Menu.Item>
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

export default Home;
