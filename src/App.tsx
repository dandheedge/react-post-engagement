import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <button className="btn" type="button">
      Hello daisyUI
    </button>
  );
}

export default App;
