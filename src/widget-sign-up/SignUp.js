import React, {Component} from 'react';
import {Router, Link} from 'react-router-dom'
import {Message, Button, Form, Icon} from 'semantic-ui-react';

class SignUp extends Component {

  // Temporary holding static strings here until i will find out where to store them
  signUpTitle = "Sign up to Moody";
  signUpFormSignInButtonLabel = "Register".toUpperCase();
  signUpFormNamePlaceholder = "Name";
  signUpFormEmailPlaceholder = "Email";
  signUpFormPasswordPlaceholder = "Password";
  signUpMessageTitle = "Already member?";
  signUpLoginMessage = "Login";

  render() {
    return (
      <div>
        <h1>{this.signUpTitle}</h1>
        <Form size="big">
          <Form.Field>
            <input type="text" placeholder={this.signUpFormNamePlaceholder}/>
          </Form.Field>
          <Form.Field>
            <input type="email" placeholder={this.signUpFormEmailPlaceholder}/>
          </Form.Field>
          <Form.Field>
            <input type="password" placeholder={this.signUpFormPasswordPlaceholder}/>
          </Form.Field>
          <Button fluid size="big" color="violet" type="submit">{this.signUpFormSignInButtonLabel}</Button>
        </Form>
        <Message>
          <Icon name='help'/>
          {this.signUpMessageTitle}&nbsp;<Link to="/">{this.signUpLoginMessage}</Link>
        </Message>
      </div>
    );
  }
}

export default SignUp;