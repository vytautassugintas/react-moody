import React, {Component} from 'react';
import { Button, Modal, Header, Icon, Form, Input, TextArea } from 'semantic-ui-react';


class Main extends Component {

  state = {activeItem: 'main'};

  createPoll = () => {

  };

  handleItemClick = (e, {name}) => {
    this.setState({activeItem: name});
  };

  render() {
    const {location} = this.props;
    const {activeItem} = this.state;

    return (
      <div>
        <h1>Hello Name Surname</h1>
        <Modal size="tiny" dimmer='blurring' trigger={
          <Button color='violet' content='Create poll' icon='plus' labelPosition='left' />} closeIcon>
          <Header content='Create new a Poll' />
          <Modal.Content>
            <Form>
              <Form.Field>
                <input type="text" placeholder="Title"/>
              </Form.Field>
              <Form.Field>
                <input type="text" placeholder="Something else"/>
              </Form.Field>
              <Button fluid color="violet" type="submit" onClick={this.onLogin}>Create poll</Button>
            </Form>
          </Modal.Content>
        </Modal>

      </div>
    );
  }
}

export default Main;
