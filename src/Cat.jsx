import { useState, useEffect } from "react";

const URL = "https://api.thecatapi.com/v1/images/search";

const Cat = ({ onYes, onNo }) => {
  const [src, setSrc] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setSrc(res[0].url);
      });
  }, []);

  if (loading === true) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <img src={src} />
      <button onClick={() => onYes(src)}>Yes</button>
      <button onClick={onNo}>No</button>
    </div>
  );
};

export default Cat;
