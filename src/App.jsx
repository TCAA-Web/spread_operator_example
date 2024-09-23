import { useEffect, useState } from "react";
import { Gallery, Card, SavedImages } from "./components/index";
import { createID } from "./helpers/createID";

function App() {
  // States to save our selected images
  const [data, setData] = useState([]);
  const [savedImageArray, setSavedImageArray] = useState([]);

  // Simple fetch with useEffect that runs if URL changes and on component mount
  let url = `https://picsum.photos/v2/list?page=2&limit=12`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  // Function to add an item to the savedArray
  function addToArray(item) {
    let modifiedItem = {
      ...item,
      uniqueID: createID(), // Creates a "random" ID from our createID function
    };
    let newItemArray = [...savedImageArray, modifiedItem];
    setSavedImageArray(newItemArray);
  }

  // Function to remove specific item from Array
  function removeFromArray(id) {
    console.log(id);
    let clone = [...savedImageArray];
    console.log("clone", clone);
    let result = clone.filter((item) => item.uniqueID !== id);
    setSavedImageArray(result);
  }

  return (
    <>
      <SavedImages
        removeFromArray={removeFromArray}
        savedImageArray={savedImageArray}
      />
      <Gallery title={"Gallery"}>
        {data?.map((item) => {
          return <Card addToArray={addToArray} item={item} />;
        })}
      </Gallery>
    </>
  );
}

export default App;
