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
  state = {
    redirectToHome: false
  };

  onLogin = () => {
    this.setState({ redirectToHome: true })
  };

  signInWithGoogle = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider).then(() => {
      firebase.auth().getRedirectResult().then(result => {
        if (result.credential) {
          const {accessToken} = result.credential;
        }
        const {user} = result;
        //TODO: dispatch user here
        if(user) {
          this.setState({redirectToHome: true})
        }
      }).catch(function (error) {
        const {code, message, email, credential} = error;
      });
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      user: undefined
    };
  }

  render() {
    const {redirectToHome} = this.state;

    if (redirectToHome) return <Redirect to="/home/main"/>;

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
        <Button fluid size="big" color='google plus'
                onClick={this.signInWithGoogle}>
          <Icon name='google plus' /> Sign in with Google
        </Button>
      </div>
    );
  }
}

export default Login;