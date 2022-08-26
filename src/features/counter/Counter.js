import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          + increment
        </button>
<<<<<<< HEAD
       
          <span>{count}</span>{' '}
        
=======
        <h1>
        <span>{count}</span> </h1>
>>>>>>> develop
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          - Decrement
        </button>
      </div>
    </div>
  );
}
