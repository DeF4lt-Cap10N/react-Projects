/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Minus, Plus, Undo2, Redo2 } from "lucide-react";

const Counter = () => {
  const [history, setHistory] = useState([0]);
  const [current, setCurrent] = useState(0);

  const currValue = history[current];

  const addValueToHistory = (value) => {
    const newHistory = history.slice(0, current + 1);
    setHistory([...newHistory, value]);
    setCurrent(newHistory.length);
  };

  const increment = () => {
    addValueToHistory(currValue+1);
  };

  const decrement = () => {
    addValueToHistory(currValue-1);
  };

  const undoValue = () => {
    if(current>0){
      setCurrent(current-1);
    }
  };

  const redoValue = () => {
    if(current<history.length-1){
      setCurrent(current+1);
    }
  };

  console.log(current, history);

  return (
    <>
      <div className="flex flex-col justify-center items-center p-10">
        <div className="text-3xl">{currValue}</div>
        <div className="flex  gap-10">
          <button
            className="bg-slate-500 px-6 rounded-full m-3"
            onClick={decrement}
          >
            <Minus />
          </button>
          <button
            className="bg-slate-500 px-6 rounded-full m-3"
            onClick={increment}
          >
            <Plus />
          </button>
        </div>
        <div className="flex  gap-2">
          <button
            className="bg-slate-500 px-6 rounded-full m-3"
            onClick={undoValue}
          >
            <Undo2 />
          </button>
          <div className="px-1 rounded-full m-3">
            {current+1}/{history.length}
          </div>
          <button
            className="bg-slate-500 px-6 rounded-full m-3"
            onClick={redoValue}
          >
            <Redo2 />
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
