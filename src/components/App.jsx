import React from 'react';
import { Container } from './App.styled';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <AddContactForm />

      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </Container>
  );
}
