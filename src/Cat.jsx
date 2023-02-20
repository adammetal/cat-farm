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

  const onAnswer = (yes) => {
    if (yes === true) {
      onYes(src);
    } else {
      onNo();
    }

    setLoading(true);

    fetch(URL)
      .then((res) => res.json())
      .then((cats) => cats[0])
      .then((cat) => setSrc(cat.url))
      .then(() => setLoading(false));
  };

  if (loading === true) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={src} />
      <button onClick={() => onAnswer(true)}>Yes</button>
      <button onClick={() => onAnswer(false)}>No</button>
    </div>
  );
};

export default Cat;
