import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Grid} from 'semantic-ui-react';

export const Main = () => <div><p>Main</p></div>;
export const Topics = () => <div><p>Topics</p></div>;

class Home extends Component {
  render() {
    return (
      <div>
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
