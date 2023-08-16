"use client";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/slice/counterSlice";
import type { RootState } from "../store/store";
import React from "react";

const Counter = () => {
  const counterValue = useSelector(
    (state: RootState) => state.counterSlice.value
  );
  const dispatch = useDispatch();
  const increase = () => {
    dispatch(counterActions.increment());
  };
  const decrease = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div className="flex min-h-full flex-col justify-center items-center py-5 p-24">
      <div className="  font-extrabold text-3xl text-center py-4">
        Counter App
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={increase}
          className="font-bold text-2xl rounded-md bg-green-500 py-1 px-3"
        >
          Increase
        </button>
        <p className="px-4 font-normal text-2xl">
          Counter Value {counterValue}{" "}
        </p>
        <button
          onClick={decrease}
          className="font-bold text-2xl rounded-md bg-green-500 py-1 px-3"
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
