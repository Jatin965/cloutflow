import { useState } from "react";
import "./App.css";

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
          rows={20}
          cols={90}
        />
      </div>
    </div>
  );
}

export default App;
