import React, {Component} from 'react';
import {Button, Card, Grid, Header, Form} from 'semantic-ui-react';
import {connect} from 'react-redux'
import AddPoll from './AddPoll';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pollsList = this.props.polls.polls.map((poll, index) => (
      <Card key={index}>
        <Card.Content>
          <Card.Header>
            {poll.name}
          </Card.Header>
          <Card.Meta>
            {poll.description}
          </Card.Meta>
          <Card.Description>
            Steve wants to add you to the group <strong>best friends</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>Approve</Button>
            <Button basic color='red'>Decline</Button>
          </div>
        </Card.Content>
      </Card>
    ));

    return (
      <div>
        <h1>Hello Name Surname</h1>
        <Grid columns='2' divided>
          <Grid.Row>
            <Grid.Column>
              <AddPoll />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Card.Group>
          {pollsList}
        </Card.Group>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  polls: (state.polls, state.todos)
});

export default connect(mapStateToProps)(Main);
