import React, {Component} from 'react';
import {Router, Redirect, Link, withRouter} from 'react-router-dom'
import {Message, Button, Form, Icon, Divider} from 'semantic-ui-react';
import firebase from '../firebase';

class Login extends Component {

  // Temporary holding static strings here until i will find out where to store them
  loginTitle = "Login to Moody";
  loginFormSignInButtonLabel = "Sign in";
  loginFormEmailPlaceholder = "Email";
  loginFormPasswordPlaceholder = "Password";
  loginMessageTitle = "Not a member?";
  loginMessageSignUp = "Sign up";

  provider = new firebase.auth.GoogleAuthProvider();

  state = {
    redirectToHome: false
  };

  onLogin = () => {
    firebase.auth().signInWithRedirect(this.provider);
    // this.setState({ redirectToHome: true })
  };

  constructor(props) {
    super(props);
    this.state = {
      user: undefined
    };
    firebase.auth().getRedirectResult().then(result => {
      if (result.credential) {
        const token = result.credential.accessToken;
      }
      const user = result.user;
      console.log(result);
    }).catch(function (error) {
      const {code, message, email, credential} = error;
      console.log(error);
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({user: user});
        console.log(user);
      } else {
        // No user is signed in.
      }
    });
  }

  render() {
    const {user, redirectToHome} = this.state;

    if (redirectToHome || user) return <Redirect to="/home/main"/>;

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
          <Button fluid size="big" color="violet" type="submit"
                  onClick={this.onLogin}>{this.loginFormSignInButtonLabel}
          </Button>
        </Form>
        <Message>
          <Icon name='help'/>
          {this.loginMessageTitle}&nbsp;<Link to="/sign-up">{this.loginMessageSignUp}</Link>
        </Message>
        <Divider horizontal>Or</Divider>
        <Button fluid size="big" color='google plus'>
          <Icon name='google plus' /> Sign in with Google
        </Button>
      </div>
    );
  }
}

export default Login;