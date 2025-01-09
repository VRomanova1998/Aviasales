import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { TicketType } from '../types/types';

import store from '.';

type initialStateType = {
  tickets: TicketType[];
  loading: boolean;
  error: boolean;
};
const initialState: initialStateType = {
  tickets: [],
  loading: true,
  error: false,
};

export const fetchTickets = createAsyncThunk('dataTickets/tickets', async () => {
  try {
    const id = store.getState().searchID.data.searchId;
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`);
    if (!response.ok) {
      throw new Error('Ошибка со стороны сервера');
    }
    const results = await response.json();
    return results.tickets;
  } catch (error) {
    return Promise.reject(error);
  }
});

const dataTickets = createSlice({
  name: 'dataTickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.tickets = action.payload;
      })
      .addCase(fetchTickets.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default dataTickets.reducer;
