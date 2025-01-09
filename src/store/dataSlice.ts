import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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

export const fetchSearchID = createAsyncThunk('data/searchID', async function () {
  try {
    const response = await fetch('https://aviasales-test-api.kata.academy/search');
    if (!response.ok) {
      throw new Error('Ошибка со стороны сервера');
    }
    const results = await response.json();
    return results;
  } catch (error) {
    return Promise.reject(error);
  }
});

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
