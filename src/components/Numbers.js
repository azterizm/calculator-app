import React from 'react';
import {
  numberAdded,
  clearScreen,
  addSign,
  dotSign,
  setResult,
} from '../slices/numbersSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Numbers = () => {
  const registeredNumbers = useSelector((state) => state.numbers.numbers);
  const dispatch = useDispatch();

  let numbers = [];
  for (let i = 9; i >= 0; i--) {
    numbers.push(
      <button key={i} className={`number${i}`} onClick={() => registerHandler(i)}>
        {i}
      </button>
    );

    // Line breaks
    if (i && i === 7) {
      numbers.push(
        <React.Fragment key={`line-break${i}`}>
          <div key={`line-break${i}`} className="line-break"></div>
        </React.Fragment>
      );
    }
    if (i && i === 4) {
      numbers.push(
        <React.Fragment key={`line-break${i}`}>
          <div key={`line-break${i}`} className="line-break"></div>
        </React.Fragment>
      );
    }
  }

  const registerHandler = (number) => {
    dispatch(numberAdded(number));
  };

  const clearHandler = () => {
    dispatch(clearScreen());
  };

  const dotHandler = () => {
    dispatch(dotSign());
  };

  const signHandler = () => {
    dispatch(addSign());
  };

  const percentHandler = () => {
    const result = registeredNumbers.join('') / 100;
    dispatch(setResult(result));
    dispatch(clearScreen());
    dispatch(numberAdded(result));
  };

  return (
    <div id="characters">
      <button className="clearBtn" onClick={() => clearHandler()}>
        C
      </button>
      <button className="numberSign" onClick={() => signHandler()}>
        /
      </button>
      <button className="numberPercent" onClick={() => percentHandler()}>
        %
      </button>
      <div className="line-break"></div>
      {numbers}
      <button className="numberDot" onClick={() => dotHandler()}>
        .
      </button>
    </div>
  );
};
