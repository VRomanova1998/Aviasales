import { createSlice } from '@reduxjs/toolkit';

import { TicketType } from '../types/types';
import { fetchTickets } from '../helper';

type initialStateType = {
  tickets: TicketType[];
  loading: boolean;
  error: boolean;
};
const initialState: initialStateType = {
  tickets: [],
  loading: false,
  error: false,
};

fetchTickets();

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
