import { configureStore } from '@reduxjs/toolkit';
import numbersReducer from '../slices/numbersSlice';

export default configureStore({
  reducer: {
    numbers: numbersReducer,
  },
});
