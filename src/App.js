import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const INCREMENTS = [2, 3, 5, 10, 100];

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="container-fluid">
        <h1>Counter App</h1>
        <div>Count: {count}</div>

        <button
          type="button"
          className="btn btn-primary btn-lg btn-block"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>

        <button
          type="button"
          className="btn btn-secondary btn lg btn-block"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <div>
          <p>Increments Of </p>
          {INCREMENTS.map((value) => {
            return (
              <button
                className="btn btn-dark"
                onClick={() => setCount(count + value)}
              >
                +{value}
              </button>
            );
          })}
        </div>
        <button
          className="btn btn-lg btn secondary"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
