import React, {Component} from 'react';
import {Button, Modal, Header, Form} from 'semantic-ui-react';
import {createStore} from 'redux';
import {connect} from 'react-redux'
import {createPoll} from '../../store/actions';
import todoApp from '../../store/reducers';
import AddTodo from './AddTodo';

class Main extends Component {

  constructor(props) {
    super(props);
    this.store = createStore(todoApp);
    this.state = {
      polls: [...this.store.getState().todos.polls],
      pollName: "",
      somethingElse: ""
    };
  }

  addPoll = ({dispatch}) => {
    dispatch(createPoll(this.state));
    this.setState(state => ({
          polls: [...state.polls, {
            pollName: this.state.pollName,
            somethingElse: this.state.somethingElse
          }]
        }
      )
    )
  };

  handleInputChange = (event) => {
    const {value, name} = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const pollsList = this.props.polls.polls.map((poll, index) => (
      <p key={index}>{poll.pollName}</p>
    ));

    console.log(this.state);
    console.log(this.props);

    return (
      <div>
        <h1>Hello Name Surname {this.state.pollName}</h1>
        <div>
          {pollsList}
        </div>

        <AddTodo />


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

const mapStateToProps = state => {
  return {
    polls: (state.polls, state.todos)
  };
};

Main = connect(mapStateToProps)(Main);

export default Main;
