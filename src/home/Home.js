import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect, NavLink, Link} from 'react-router-dom'
import {Container, Menu} from 'semantic-ui-react';

export const Poll = () => <div><p>Poll</p></div>;
export const Main = () => <div><p>Main</p></div>;
export const Topics = () => <div><p>Topics</p></div>;

class Home extends Component {

  state = {activeItem: 'main'};

  handleItemClick = (e, {name}) => {
    this.setState({activeItem: name});
  };

  render() {
    const {location} = this.props;
    const {activeItem} = this.state;

    return (
      <Router>
        <div>
          <Menu pointing secondary>
            <Menu.Item><NavLink to="/home/main">Main</NavLink></Menu.Item>
            <Menu.Item><NavLink to="/home/poll">Poll</NavLink></Menu.Item>
            <Menu.Item><NavLink to="/home/topics">Topics</NavLink></Menu.Item>
          </Menu>
          <Container text className="padding--large">
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
