import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [result, setResult] = useState({
    A: {},
    B: {},
  });

  const handleAjax = (service, url) => async () => {
    console.log("Callig... ", url);
    const response = await fetch(url);
    const result = await response.json();
    console.log("result", result);
    setResult((prev) => ({ ...prev, [service]: result }));
  };

  return (
    <div className="container">
      <div className="text-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h3>API call from service-dialog-a</h3>
      <div className="card">
        <button onClick={handleAjax("A", "http://localhost:3001")}>
          Call Service A
        </button>
        <pre className="output">
          <code>{JSON.stringify(result?.A, null, 2)}</code>
        </pre>
      </div>

      <h3>API call from service-dialog-b</h3>
      <div className="card">
        <button onClick={handleAjax("B", "http://localhost:3002")}>
          Call Service B
        </button>
        <pre className="output">
          <code>{JSON.stringify(result?.B, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
}

export default App;
