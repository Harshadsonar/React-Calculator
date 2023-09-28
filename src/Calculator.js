import React, { useState } from 'react';

const Calculator = () => {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [show, setShow] = useState(false);
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const validate = (e) => {
    if (!num1 || num1 === '') {
      setError(true);
      setErrorMsg('Num 1 should not be empty');
      return false;
    }
    if (isNaN(num1)) {
      setError(true);
      setErrorMsg('Num 1 should be an integer');
      return false;
    }
    if (!num2 || num2 === '') {
      setError(true);
      setErrorMsg('Num 2 should not be empty');
      return false;
    }
    if (isNaN(num2)) {
      setError(true);
      setErrorMsg('Num 2 should be an integer');
      return false;
    }
    if (e.target.classList.contains('divide') && +num2 === 0) {
      setError(true);
      setErrorMsg('Cannot divide by zero');
      return false;
    }
    return true;
  };

  const handleClick = (e) => {
    e.preventDefault();
    const res = validate(e);
    if (res) {
      setError(false);
      setErrorMsg('');
      if (e.target.classList.contains('plus')) {
        setResult(+num1 + +num2);
      } else if (e.target.classList.contains('minus')) {
        setResult(parseFloat(num1) + parseFloat(num2));
      } else if (e.target.classList.contains('multiply')) {
        setResult(+num1 * +num2);
      } else {
        setResult(parseFloat(num1) / parseFloat(num2));
      }
    }
    setShow(true);
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input
        type="text"
        id="num1"
        name="num1"
        placeholder="Num 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="text"
        id="num2"
        name="num2"
        placeholder="Num 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <div className="buttons">
        <button className="btn plus" onClick={(e) => handleClick(e)}>
          +
        </button>
        <button className="btn minus" onClick={(e) => handleClick(e)}>
          -
        </button>
        <button className="btn multiply" onClick={(e) => handleClick(e)}>
          *
        </button>
        <button className="btn divide" onClick={(e) => handleClick(e)}>
          /
        </button>
      </div>

      {show && (
        <div className="result">
          <h3 className={`status ${error ? 'error' : ''}`}>{`${
            error ? 'Error' : 'Success'
          }`}</h3>
          <p className="message">{error ? errorMsg : `Result = ${result}`}</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
