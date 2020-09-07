import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { popValue } from '../slices/numbersSlice';

export const Screen = () => {
  const values = useSelector((state) => state.numbers.numbers);
  const result = useSelector((state) => state.numbers.result);

  const dispatch = useDispatch();

  return (
    <div id="screen" onClick={() => dispatch(popValue())}>
      <h3 className="screenItem" id="display">
        {values}
      </h3>
      <h3 className="screenItem" id="result">
        {result}
      </h3>
    </div>
  );
};
