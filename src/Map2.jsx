


import React, { useState } from "react";

export default function App() {
  const texts = ["Hello", "Welcome", "React", "World"]; 
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide All" : "Show All"}
      </button>

      {/* {show &&
        texts.map((e, index) => (
          <h1 key={index}>{e}</h1>
        ))} */}
    </div>
  );
}