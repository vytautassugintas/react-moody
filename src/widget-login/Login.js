import React, {Component} from 'react';
import {Router, Link} from 'react-router-dom'
import {Message, Button, Form, Icon} from 'semantic-ui-react';

class Login extends Component {

  // Temporary holding static strings here until i will find out where to store them
  loginTitle = "Login to Moody";
  loginFormSignInButtonLabel = "Log in".toUpperCase();
  loginFormEmailPlaceholder = "Email";
  loginFormPasswordPlaceholder = "Password";
  loginMessageTitle = "Not a member?";
  loginMessageSignUp = "Sign up";

  render() {
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
          <Button fluid size="big" color="violet" type="submit">{this.loginFormSignInButtonLabel}</Button>
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