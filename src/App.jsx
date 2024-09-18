import { useEffect, useState } from "react";
import { Gallery, Options, Card, SavedImages } from "./components/index";

function App() {
  const [data, setData] = useState([]);

  let url = `https://picsum.photos/v2/list?page=2&limit=12`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return (
    <>
      <Options />
      <SavedImages />
      <Gallery>
        {data?.map((item) => {
          return <Card item={item} />;
        })}
      </Gallery>
    </>
  );
}

export default App;
