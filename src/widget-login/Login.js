import React, {Component} from 'react';
import {Router, Redirect, Link, withRouter} from 'react-router-dom'
import {Message, Button, Form, Icon} from 'semantic-ui-react';

class Login extends Component {

  // Temporary holding static strings here until i will find out where to store them
  loginTitle = "Login to Moody";
  loginFormSignInButtonLabel = "Log in".toUpperCase();
  loginFormEmailPlaceholder = "Email";
  loginFormPasswordPlaceholder = "Password";
  loginMessageTitle = "Not a member?";
  loginMessageSignUp = "Sign up";

  state = {
    redirectToHome: false
  };

  onLogin = () => {
    this.setState({ redirectToHome: true })
  };

  render() {
    const { redirectToHome } = this.state;

    if (redirectToHome) {
      return (
        <Redirect to="/home"/>
      )
    }
    return (
      <div>
        <h1>{this.loginTitle}</h1>
        <Form size="big">
          <Form.Field>
            <input type="email" placeholder={this.loginFormEmailPlaceholder}/>
          </Form.Field>
          <Form.Field>
            <input type="password" placeholder={this.loginFormPasswordPlaceholder}/>
          </Form.Field>
          <Button fluid size="big" color="violet" type="submit" onClick={this.onLogin}>{this.loginFormSignInButtonLabel}</Button>
        </Form>
        <Message>
          <Icon name='help'/>
          {this.loginMessageTitle}&nbsp;<Link to="/sign-up">{this.loginMessageSignUp}</Link>
        </Message>
      </div>
    );
  }
}

export default Login;