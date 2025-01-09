import { configureStore } from '@reduxjs/toolkit';

import sortingReducer from './sortingSlice';
import filterReducer from './filterTransferSlice';
import searchIDReducer from './dataSlice';
import ticketsReducer from './getTicketsSlice';

const store = configureStore({
  reducer: {
    sorting: sortingReducer,
    filter: filterReducer,
    searchID: searchIDReducer,
    tickets: ticketsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
