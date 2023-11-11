import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        if (state.some(con => con.name === action.payload.name)) {
          alert('Contact with this name already exist');
          return;
        }
        if (state.some(con => con.phone === action.payload.phone)) {
          alert('Contact with this phone already exist');
          return;
        }
        state.push(action.payload);
      },
      prepare({ name, phone }) {
        return {
          payload: {
            name,
            phone,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      state = state.filter(({ id }) => id !== action.payload);
      return state;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
