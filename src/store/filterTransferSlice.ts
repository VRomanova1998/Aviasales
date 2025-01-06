import { createSlice } from '@reduxjs/toolkit';

type Filter = {
  filter: { id: string; name: string; checked: boolean }[];
  buttonActive: string;
};

const initialState: Filter = {
  filter: [
    { id: '1', name: 'Все', checked: false },
    { id: '2', name: 'Без пересадок', checked: false },
    { id: '3', name: '1 пересадка', checked: false },
    { id: '4', name: '2 пересадки', checked: false },
    { id: '5', name: '3 пересадки', checked: false },
  ],
  buttonActive: 'Null',
};

const filterTransferSlice = createSlice({
  name: 'filterTransfer',
  initialState,
  reducers: {
    toggleChecked(state, action) {
      state.filter = state.filter.map((item) => {
        return item.name === action.payload.value ? { ...item, checked: !item.checked } : item;
      });
    },
    checkAll(state) {
      state.filter = state.filter.map((item) => {
        return { ...item, checked: true };
      });
    },
    removeAll(state) {
      state.filter = state.filter.map((item) => {
        return { ...item, checked: false };
      });
    },
    changeButtonActive(state, action) {
      state.buttonActive = action.payload;
    },
    removeChecked(state) {
      state.filter = state.filter.map((item, index) => {
        return index === 0 ? { ...item, checked: false } : item;
      });
    },
  },
});

export const { toggleChecked, checkAll, removeAll, changeButtonActive, removeChecked } = filterTransferSlice.actions;

export default filterTransferSlice.reducer;
