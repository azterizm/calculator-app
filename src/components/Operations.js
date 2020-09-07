import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { numberAdded, setResult, clearScreen } from '../slices/numbersSlice';

export const Operations = () => {
  const values = useSelector((state) => state.numbers.numbers);
  const dispatch = useDispatch();

  const resultHandler = () => {
    if (values[0] === 0) {
      dispatch(setResult('Error'));
      dispatch(clearScreen());
      return;
    }

    const joinResult = values.join('');
    // eslint-disable-next-line no-eval
    const result = eval(joinResult);
    dispatch(setResult(result));
    dispatch(clearScreen());
    dispatch(numberAdded(result));
  };

  return (
    <div id="operations">
      <div
        id="multiply"
        className="operation-sign"
        onClick={() => dispatch(numberAdded('*'))}
      >
        &times;
      </div>
      <div
        id="divide"
        className="operation-sign"
        onClick={() => dispatch(numberAdded('/'))}
      >
        &divide;
      </div>
      <div
        id="subtract"
        className="operation-sign"
        onClick={() => dispatch(numberAdded('-'))}
      >
        &minus;
      </div>
      <div id="add" className="operation-sign" onClick={() => dispatch(numberAdded('+'))}>
        &#x2b;
      </div>
      <div id="equals" className="operation-sign" onClick={() => resultHandler()}>
        &#x3d;
      </div>
    </div>
  );
};
