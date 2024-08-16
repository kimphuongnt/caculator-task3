import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const [resultMemo, setResultMemo] = useState(0);
  const [operation, setOperation] = useState("+");

  function Calculator(a, b, opera) {
    const numa = parseInt(a), numb = parseInt(b);
    switch (opera) {
      case "+":
        return numa + numb;
      case "-":
        return numa - numb;
      case "*":
        return numa * numb;
      case "/":
        return numb !== 0 ? numa / numb : "Error";
      default:
        return 0;
    }
  }

  const handleMemo = useMemo(() => {
    console.time("Time Calculator Memo");
    const calMemo = Calculator(num1, num2, operation);
    console.timeEnd("Time Calculator Memo");
    setResultMemo(calMemo);
  }, [num1, num2, operation]);

  const handle = () => {
    console.time("Time Calculator");
    const cal = Calculator(num1, num2, operation);
    console.timeEnd("Time Calculator");
    setResult(cal);
  };

  return (
    <>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={handleMemo}>Calculate Memo</button>

      <button onClick={handle}>Calculate</button>
      <div>ResultMemo: {resultMemo}</div>
      <div>Result: {result}</div>
    </>
  );
}

export default App;
