import React, { useState, useContext } from 'react';

// import the context
import { ContactContext } from '../context/ContactContext';

// design system components
import { Segment, Table, Button, Icon } from 'semantic-ui-react';

function ContactTable() {
  // Subscribe to contacts state via useContext and get access dispatch function
  const [state, dispatch] = useContext(ContactContext);

  // declare local component state for internal use
  const [selectedId, setSelectedId] = useState(''); // sample contact id: '099'

  // component method that calls the dispatch() you can access from subscribing to the context
  const deleteContact = (id) => {
    dispatch({
      type: 'DELETE_CONTACT',
      payload: id,
    });
  };

  // component method
  const removeUser = () => {
    deleteContact(selectedId);
    setSelectedId(''); // Clear selection
  };

  // define data rows for use in the UI table  -- access 'state' var from useContext() call
  const dataRows = state.contacts.map((contact) => (
    <Table.Row
      key={contact.id}
      onClick={() => setSelectedId(contact.id)}
      active={contact.id === selectedId}
    >
      <Table.Cell>{contact.id}</Table.Cell>
      <Table.Cell>{contact.name}</Table.Cell>
      <Table.Cell>{contact.email}</Table.Cell>
    </Table.Row>
  ));

  return (
    <Segment>
      <Table celled striped selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{dataRows}</Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan="4">
              <Button
                floated="right"
                icon
                labelPosition="left"
                color="red"
                size="small"
                disabled={!selectedId}
                onClick={removeUser}
              >
                <Icon name="trash" /> Remove User
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Segment>
  );
}

export default ContactTable;
