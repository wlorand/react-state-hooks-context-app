import React, { useReducer, createContext } from 'react';

// export a Context
export const ContactsContext = createContext();

// set initial state
const initialState = {
  contacts: [
    { id: '098', name: 'Diana Prince', email: 'diana@us.army.mil' },
    { id: '099', name: 'Bruce Wayne', email: 'bruce@batmail.com' },
    { id: '100', name: 'Clark Kent', email: 'clark@metropolitan.com' },
  ],
  loading: false,
  error: null,
};

// Contacts Reducer
const contactsReducer = (state, action) => {
  // typical switch statement to handle diff cases
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        contacts: [...state.contacts, action.payload], // add a contact via array with spread existing
      };
    case 'DEL_CONTACT':
      return {
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ), // DEL via filter
      };
    case 'START':
      return {
        loading: true,
      };
    case 'COMPLETE':
      return {
        loading: false,
      };
    default:
      throw new Error();
  }
};

// export a Context Provider
export const ContactContextProvider = (props) => {
  // create inital state and a dispatch method to update it via useReducer
  const [state, dispatch] = useReducer(contactsReducer, initialState);

  // return a Context Provider
  return (
    <ContactContext.Provider value={[state, dispatch]}>
      {props.children}
    </ContactContext.Provider>
  );
};
