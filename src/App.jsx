import { useState } from "react";
import Cat from "./Cat";
import "./App.css";

function App() {
  const [cats, setCats] = useState([]);

  const resetCats = () => setCats([]);

  return (
    <div className="App">
      <h1>Welcome to cat farm!!!</h1>
      <Cat
        onYes={(src) => {
          setCats((prev) => [...prev, src]);
        }}
        onNo={() => {}}
      />
      <div>
        <button onClick={resetCats}>Reset</button>
      </div>
      <div className="grid">
        {cats.map((src) => (
          <img key={src} src={src} />
        ))}
      </div>
    </div>
  );
}

export default App;
