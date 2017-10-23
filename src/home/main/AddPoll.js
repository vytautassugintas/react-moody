import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Button, Modal, Header, Form} from 'semantic-ui-react';
import {createPoll} from '../../store/actions';

class AddPoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
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

  open = () => {
    this.setState({ open: true });
  };

  close = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.open} color='violet' content='Create poll' icon='plus' labelPosition='left'/>
        <Modal open={this.state.open} onClose={this.close} size="tiny" dimmer='blurring' closeIcon>
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
              <Button onClick={this.addPoll} fluid color="violet" type="submit">Create poll</Button>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default connect()(AddPoll);