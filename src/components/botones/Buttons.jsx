// import Functions from "../../functions";

import { useState } from "react";

function Buttons() {
  const [index, setIndex] = useState([]);

  //   function agregarNum (setIndex){

  //   }
  //   const handleText = (event) => {
  //     const valueEntry = event.target.value;
  //     setIndex(...index, valueEntry);
  //   };

  const handleChange = (value) => {
    const newArray = [...index];
    newArray.push(value);
    setIndex(newArray);
  };

  const handleClick = (value) => {
    handleChange(value);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    setIndex([]);
  };

  const erraser = (event) => {
    const newArray = [...index];
    newArray.pop();
    setIndex(newArray);
  };

  function resultado() {
    for (let i = 0; i < index.length; i++) {
      if (index[i] === "+") {
        const suma = index[i - 1] + index[i + 1];
        const newSuma = [...index.slice(0, i - 1), suma, ...index.slice(i + 2)];
        setIndex(newSuma);
        return;
      } else if (index[i] === "-") {
        const resta = index[i - 1] - index[i + 1];
        const newResta = [
          ...index.slice(0, i - 1),
          resta,
          ...index.slice(i + 2),
        ];
        setIndex(newResta);
        return;
      } else if (index[i] === "x") {
        const multiplicacion = index[i - 1] * index[i + 1];
        const newMultiplicacion = [
          ...index.slice(0, i - 1),
          multiplicacion,
          ...index.slice(i + 2),
        ];
        setIndex(newMultiplicacion);
        return;
      } else if (index[i] === "/") {
        const division = index[i - 1] / index[i + 1];
        const newDivision = [
          ...index.slice(0, i - 1),
          division,
          ...index.slice(i + 2),
        ];
        setIndex(newDivision);
        return;
      }
    }
  }

  return (
    <div>
      <input value={index.join("")}></input>
      <br />
      <button onClick={handleDelete}>AC</button>
      <button>( )</button>
      <button onClick={() => handleClick("%")}>%</button>
      <button onClick={() => handleClick("/")}>/</button>
      <br />
      <button onClick={() => handleClick(7)}>7</button>
      <button onClick={() => handleClick(8)}>8</button>
      <button onClick={() => handleClick(9)}>9</button>
      <button onClick={() => handleClick("x")}>x</button>
      <br />
      <button onClick={() => handleClick(4)}>4</button>
      <button onClick={() => handleClick(5)}>5</button>
      <button onClick={() => handleClick(6)}>6</button>
      <button onClick={() => handleClick("-")}>-</button>
      <br />
      <button onClick={() => handleClick(1)}>1</button>
      <button onClick={() => handleClick(2)}>2</button>
      <button onClick={() => handleClick(3)}>3</button>
      <button onClick={() => handleClick("+")}>+</button>
      <br />
      <button onClick={() => handleClick(0)}>0</button>
      <button onClick={() => handleClick(".")}>.</button>
      <button onClick={erraser}>C</button>
      <button onClick={resultado}>=</button>
    </div>
  );
}

export default Buttons;
