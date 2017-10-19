import React, {Component} from 'react';
import {Grid, Message, Button, Form, Icon} from 'semantic-ui-react';
import LoginWidget from "./login-widget/Login";
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App-login">
        <Grid columns={3} stackable centered padded>
          <Grid.Column>
            <LoginWidget />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
