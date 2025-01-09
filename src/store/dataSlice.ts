import { createSlice } from '@reduxjs/toolkit';

import { fetchSearchID } from '../helper';

type initialDataState = {
  data: { searchId?: string };
  loading: boolean;
  error: boolean;
};

const initialState: initialDataState = {
  data: {},
  loading: false,
  error: false,
};

fetchSearchID();

const searchID = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchID.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchSearchID.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.data = action.payload;
      })
      .addCase(fetchSearchID.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default searchID.reducer;
