import React, {Component} from 'react';
import {Button, Modal, Header, Icon, Form, Input, TextArea} from 'semantic-ui-react';
import {createStore} from 'redux';
import {createPoll, addTodo} from '../../store/actions';
import todoApp from '../../store/reducers';

class Main extends Component {

  constructor(props) {
    super(props);
    this.store = createStore(todoApp);
    this.state = {
      pollName: "",
      somethingElse: ""
    };

    this.store.dispatch(addTodo('Learn about actions'));
  }

  addPoll = () => {
    this.store.dispatch(createPoll(this.state));
  };

  handleInputChange = (event) => {
    const {value, name} = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    this.store.subscribe(() =>
      console.log(this.store.getState())
    );
    return (
      <div>
        <h1>Hello Name Surname {this.state.pollName}</h1>
        <Modal size="tiny" dimmer='blurring' trigger={
          <Button color='violet' content='Create poll' icon='plus' labelPosition='left'/>} closeIcon>
          <Header content='Create new a Poll'/>
          <Modal.Content>
            <Form>
              <Form.Field>
                <input
                  name="pollName"
                  type="text"
                  placeholder="Title"
                  value={this.state.pollName}
                  onChange={this.handleInputChange}
                />
              </Form.Field>
              <Form.Field>
                <input
                  name="somethingElse"
                  type="text"
                  placeholder="Something else"
                  value={this.state.somethingElse}
                  onChange={this.handleInputChange}
                />
              </Form.Field>
              <Button fluid color="violet" type="submit" onClick={this.addPoll}>Create poll</Button>
            </Form>
          </Modal.Content>
        </Modal>

      </div>
    );
  }
}

export default Main;
