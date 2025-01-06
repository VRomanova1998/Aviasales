import { createSlice } from '@reduxjs/toolkit';

const sortingSlice = createSlice({
  name: 'sorting',
  initialState: {
    sorting: null,
  },
  reducers: {
    toggleSorting(state, action) {
      // console.log(state);
      // console.log(action);
      state.sorting = action.payload.sortingButtonName;
    },
  },
});

export const { toggleSorting } = sortingSlice.actions;

export default sortingSlice.reducer;
