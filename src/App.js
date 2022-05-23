import { useState } from "react";
import "./App.css";

const dummyArray = new Array(100).fill("Dummy");

function App() {
  const [arr, setArr] = useState([]);
  const [text, setText] = useState("");

  const changeHandler = (e) => {
    setText(e.target.value);
    if (e.target.value.includes(" ") || e.target.value.includes(",")) {
      setArr([...arr, e.target.value.replace(/[, ]+/g, "")]);
      setText("");
    }
  };

  const batchCall = async (start, end) => {
    const responses = await Promise.all(/*  */); // For 5 parallel calls
  };

  const submitHandler = () => {
    for (let i = 1; i <= dummyArray.length / 5; i++) {
      batchCall(i === 1 ? 0 : 5 * (i - 1) + 1, 5 * i);
    }
  };

  console.log(arr);
  return (
    <div className="App">
      <div className="App-header">
        <div className="chips">
          {arr.map((na, index) => (
            <span key={index} className="chip">
              {na}
            </span>
          ))}
        </div>
        <input
          className="textarea"
          value={text}
          onChange={changeHandler}
          onKeyPress={(e) => e.key === "Enter" && submitHandler()}
          rows={20}
          cols={90}
        />
      </div>
    </div>
  );
}

export default App;
