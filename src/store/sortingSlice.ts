import { createSlice } from '@reduxjs/toolkit';

const sortingSlice = createSlice({
  name: 'sorting',
  initialState: {
    sorting: '',
  },
  reducers: {
    toggleSorting(state, action) {
      state.sorting = action.payload.changeSort;
    },
  },
});

export const { toggleSorting } = sortingSlice.actions;

export default sortingSlice.reducer;
