import React, { useState, useContext } from 'react';

// Semantic UI Design System
import { Segment, Form, Input, Button } from 'semantic-ui-react';

// util libs
import _ from 'lodash';

// import the context
import { ContactContext } from '../context/ContactContext';

function ContactForm() {
  // Subscribe to contacts state via useContext and get access dispatch function
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(ContactContext);

  // form vars
  const name = useFormInput('');
  const email = useFormInput('');

  // form submit handler
  const handleSubmit = () => {
    dispatch({
      type: 'ADD_CONTACT',
      payload: {
        id: _.uniqueId(10),
        name: name.value,
        email: email.value,
      },
    });
    // Reset Form
    name.onReset();
    email.onReset();
  };

  return (
    <Segment basic>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="3">
          <Form.Field width={6}>
            <Input placeholder="Enter Name" {...name} required />
          </Form.Field>
          <Form.Field width={6}>
            <Input placeholder="Enter Email" {...email} type="email" required />
          </Form.Field>
          <Form.Field width={4}>
            <Button fluid primary>
              New Contact
            </Button>
          </Form.Field>
        </Form.Group>
      </Form>
    </Segment>
  );
}

function useFormInput(initialValue) {
  // set state bit
  const [value, setValue] = useState(initialValue);

  // form util fxns
  const handleChange = (e) => setValue(e.target.value);
  const handleReset = () => setValue('');

  // return an object with event listeners for any input value
  return {
    value,
    onChange: handleChange,
    onReset: handleReset,
  };
}

export default ContactForm;
