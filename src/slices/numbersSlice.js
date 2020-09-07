import { createSlice } from '@reduxjs/toolkit';

const numbersSlice = createSlice({
  name: 'numbers',
  initialState: {
    numbers: [],
    result: '',
    minusSign: false,
    dotSign: false,
    history: [],
  },
  reducers: {
    numberAdded: (state, action) => {
      state.numbers.push(action.payload);
    },
    operationAdded: (state, action) => {
      state.numbers.push(action.payload);
    },
    clearScreen: (state) => {
      state.numbers = [];
    },
    addSign: (state) => {
      if (state.minusSign === false) {
        state.numbers.unshift('-');
        state.minusSign = true;
      } else if (state.minusSign) {
        state.numbers.shift();
        state.minusSign = false;
      }
    },
    dotSign: (state) => {
      if (state.dotSign === false) {
        state.numbers.push('.');
        state.dotSign = true;
      }
    },
    setResult: (state, action) => {
      state.result = action.payload.toString();
    },
    popValue: (state) => {
      state.numbers.pop();
    },
  },
});

export const {
  numberAdded,
  operationAdded,
  clearScreen,
  addSign,
  dotSign,
  setResult,
  popValue,
} = numbersSlice.actions;

export default numbersSlice.reducer;
