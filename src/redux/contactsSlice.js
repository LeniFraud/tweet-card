import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: initialState,

  reducers: {
    addContact: (state, action) => {
      //   const isContactExists = state.contacts.some(
      //     contact =>
      //       contact.name.toLowerCase() === action.payload.name.toLowerCase()
      //   );

      //   if (isContactExists)
      //     return alert(`Contact ${action.payload.name} already exists!`);

      state.contacts = [action.payload, ...state.contacts];
    },

    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },

    filterChange: (state, action) => {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact, filterChange } =
  contactsSlice.actions;
