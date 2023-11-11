import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contacts);
  const filter = useSelector(store => store.filter);

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  return (
    <>
      <ul>
        {getFilteredContacts().length > 0 ? (
          getFilteredContacts().map(({ id, name, phone }) => (
            <li key={id}>
              {name}: {phone}{' '}
              <button type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>No contacts found</p>
        )}
      </ul>
    </>
  );
}
