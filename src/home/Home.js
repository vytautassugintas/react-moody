import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Grid, Menu} from 'semantic-ui-react';

export const Main = () => <div><p>Main</p></div>;
export const Topics = () => <div><p>Topics</p></div>;

class Home extends Component {

  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>

        <p>This is HOME</p>
        <Grid columns={3} stackable centered padded>
          <Grid.Column>
            <Router>
              <div>
                <Route path="/home/main" exact component={Main}/>
                <Route path="/home/topics" component={Topics}/>
              </div>
            </Router>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Home;
