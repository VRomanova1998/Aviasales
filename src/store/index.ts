import { configureStore } from '@reduxjs/toolkit';

import sortingReducer from './sortingSlice';
import filterReducer from './filterTransferSlice';

export default configureStore({
  reducer: {
    sorting: sortingReducer,
    filter: filterReducer,
  },
});
