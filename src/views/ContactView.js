import React from 'react';

// context provider
import { ContactContextProvider } from '../context/ContactContext';

// child components
import ContactTable from '../components/ContactTable.js';
import ContactForm from '../components/ContactForm.js';

// design system components
import { Segment, Header } from 'semantic-ui-react';

function ContactView() {
  return (
    <ContactContextProvider>
      <Segment basic>
        <Header as="h3">Contacts</Header>
        <ContactForm />
        <ContactTable />
      </Segment>
    </ContactContextProvider>
  );
}

export default ContactView;
