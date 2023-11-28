import React, { useState } from "react";

function Calculator() {
  const [inp1, setInp1] = useState(0);
  const [inp2, setInp2] = useState(0);
  const [answer, setAnswer] = useState("");

  function add() {
    if (isNaN(inp1) || isNaN(inp2)) {
      setAnswer("Sadece eded daxil ede bilersiniz!");
    } else {
      setAnswer(inp1 + inp2);
    }
  }
  function subtract() {
    if (isNaN(inp1) || isNaN(inp2)) {
      setAnswer("Sadece eded daxil ede bilersiniz!");
    } else {
      setAnswer(inp1 - inp2);
    }
  }
  function multiplicat() {
    if (isNaN(inp1) || isNaN(inp2)) {
      setAnswer("Sadece eded daxil ede bilersiniz!");
    } else {
      setAnswer(inp1 * inp2);
    }
  }
  function division() {
    if (isNaN(inp1) || isNaN(inp2)) {
      setAnswer("Sadece eded daxil ede bilersiniz!");
    } else {
      if (inp2 !==0) {
        setAnswer(inp1 / inp2);
      }else{
        setAnswer("0'a bolme yoxdur")
      }
    }
  }

  return (
    <div>
      <div className="input">
        <input
          type="text"
          placeholder="Eded daxil edin..."
          onChange={(e) => setInp1(parseInt(e.target.value))}
        />
        <input
          type="text"
          placeholder="Eded daxil edin..."
          onChange={(e) => setInp2(parseInt(e.target.value))}
        />
      </div>
      <div className="buttons">
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiplicat}>*</button>
        <button onClick={division}>/</button>
      </div>
      <div className="answer">
        <span>{answer}</span>
      </div>
    </div>
  );
}

export default Calculator;
