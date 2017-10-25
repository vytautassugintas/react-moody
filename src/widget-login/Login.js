import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {Message, Button, Form, Icon, Divider, Loader} from 'semantic-ui-react';
import firebase from '../firebase';
import {setUser} from '../store/actions';

class Login extends Component {

  // Temporary holding static strings here until i will find out where to store them
  loginTitle = "Login to Moody";
  loginFormSignInButtonLabel = "Sign in";
  loginFormEmailPlaceholder = "Email";
  loginFormPasswordPlaceholder = "Password";
  loginMessageTitle = "Not a member?";
  loginMessageSignUp = "Sign up";


  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  componentDidMount() {
    if (this.props.user === null) {
      this.setState({isLoading: false});
    }
  }

  onLogin = () => {

  };

  signInWithGoogle = () => {
    this.setState({isLoading: true});
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
      .signInWithRedirect(provider)
      .then(() => {
        firebase.auth().getRedirectResult()
          .then(result => {
            const {user = null} = result;
            this.props.dispatch(setUser(user));
            this.setState({isLoading: false});
          })
          .catch((error) => {
            this.setState({isLoading: false});
          })
      });
  };

  render() {
    const {isLoading} = this.state;

    if (isLoading) {
      return (
        <div>
          <Loader active className="padding-top--lg" inline='centered'/>
        </div>
      )
    } else {
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
            <Icon name='google plus'/> Sign in with Google
          </Button>
        </div>
      );
    }
  }
}

export default connect()(Login);