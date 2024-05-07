
import { createSlice } from '@reduxjs/toolkit';

export const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    message: null,
    type: null, 
  },
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
      
    },
    clearMessage: state => {
      state.message = null;
      state.type = null;
    },
  },
});

export const { setMessage, clearMessage } = alertSlice.actions;


export default alertSlice.reducer;