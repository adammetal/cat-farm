import { useState } from "react";
import Cat from "./Cat";
import "./App.css";

function App() {
  const [cats, setCats] = useState([]);

  return (
    <div className="App">
      <Cat
        onYes={(src) => {
          setCats((prev) => [...prev, src]);
        }}
      />
      <div>
        {cats.map((src) => (
          <img key={src} src={src} />
        ))}
      </div>
    </div>
  );
}

export default App;
