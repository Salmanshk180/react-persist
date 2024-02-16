import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./Store";
import { decrement, increment } from "./CounterSlice";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
