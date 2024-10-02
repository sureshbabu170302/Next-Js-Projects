"use client";

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center w-[100px]">
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 rounded px-4 py-2 m-4"
      >
        Increment
      </button>
      <p className="text-5xl font-bold">{count}</p>
      <button
        onClick={() => setCount(count - 1)}
        className="bg-blue-500 rounded px-4 py-2 m-4"
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
