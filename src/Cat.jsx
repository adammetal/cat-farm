import { useState, useEffect } from "react";
import Loader from "./Loader";

const URL = "https://api.thecatapi.com/v1/images/search";

const fetchCat = (signal) =>
  fetch(URL, { signal })
    .then((res) => res.json())
    .then((res) => res[0].url);

const Cat = ({ onYes, onNo }) => {
  const [src, setSrc] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    fetchCat(controller.signal)
      .then((url) => {
        setLoading(false);
        setSrc(url);
      })
      .catch((e) => {
        console.log(e);
      });

    return () => {
      controller.abort();
    };
  }, []);

  const onAnswer = (yes) => {
    if (yes === true) {
      onYes(src);
    } else {
      onNo();
    }

    setLoading(true);

    fetchCat(null)
      .then((url) => setSrc(url))
      .then(() => setLoading(false));
  };

  if (loading === true) {
    return <Loader />;
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
