import React from 'react';
import { useSelector } from 'react-redux';

export const Screen = () => {
  const values = useSelector((state) => state.numbers.numbers);
  const result = useSelector((state) => state.numbers.result);

  return (
    <div id="screen">
      <h3 className="screenItem" id="display">
        {values}
      </h3>
      <h3 className="screenItem" id="result">
        {result}
      </h3>
    </div>
  );
};
