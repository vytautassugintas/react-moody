import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Button, Modal, Header, Form} from 'semantic-ui-react';
import {createPoll} from '../../store/actions';

class AddPoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: ""
    };
  }

  componentWillMount() {
    this.initialState = this.state
  }

  addPoll = () => {
    this.props.dispatch(createPoll({
      name: this.state.name,
      description: this.state.description
    }));
    this.setState(this.initialState)
  };

  handleInputChange = (event) => {
    const {value, name} = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Modal size="tiny" dimmer='blurring' trigger={
        <Button color='violet' content='Create poll' icon='plus' labelPosition='left'/>} closeIcon>
        <Header content='Create new a Poll'/>
        <Modal.Content>
          <Form>
            <Form.Field>
              <input
                name="name"
                type="text"
                placeholder="Title"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </Form.Field>
            <Form.Field>
              <input
                name="description"
                type="text"
                placeholder="Something else"
                value={this.state.description}
                onChange={this.handleInputChange}
              />
            </Form.Field>
            <Button fluid color="violet" type="submit" onClick={this.addPoll}>Create poll</Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default connect()(AddPoll);