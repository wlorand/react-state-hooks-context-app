import React, { useReducer, createContext } from 'react';

// create a Context (and export it)
export const ContactContext = createContext();

// set initial state -- with mock-data: still as always an {}
// + here the ubiq loading boolean and error state property - data state stuff
const initialState = {
  contacts: [
    { id: '098', name: 'Diana Prince', email: 'diana@us.army.mil' },
    { id: '099', name: 'Bruce Wayne', email: 'bruce@batmail.com' },
    { id: '100', name: 'Clark Kent', email: 'clark@metropolitan.com' },
  ],
  loading: false,
  error: null,
};

// Contacts Reducer Fxn -- like all reducers, takes in state and action and returns state
// open question - does this replace state or merge it in ?
const contactReducer = (state, action) => {
  // typical switch statement to handle diff CRUD cases
  // TODO: Rewrite your Todo App with Hooks to use this consolidated CRUD approach
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        // ADD a contact via array with spread existing
        // to work the payload should be an object with id, name and email fields (no TS, no enforce)
        contacts: [...state.contacts, action.payload],
      };
    case 'DELETE_CONTACT':
      // DELETE contact via filter
      // note: i'm surprised this works w/o calling out the action.payload.id field specifically
      return {
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
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
      // TODO: needs more fleshout - pass a msg to the error
      throw new Error();
  }
};

// export a Context Provider
export const ContactContextProvider = (props) => {
  // create inital state and a dispatch method to update it via useReducer
  // notice useReducer takes in 1- a reducer; 2- the initialState
  // - so this is where state is assigned to initialState (as in old Redux)
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // return a Context Provider
  return (
    <ContactContext.Provider value={[state, dispatch]}>
      {props.children}
    </ContactContext.Provider>
  );
};
