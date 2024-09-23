import React from "react";
import { Card } from "../Card/Card";
import { Gallery } from "../Gallery/Gallery";

// Our saveImages array gets mapped inside a "Gallery" component
export const SavedImages = ({ savedImageArray, removeFromArray }) => {
  return (
    <div>
      <Gallery title={"Saved images"}>
        {savedImageArray?.map((item) => {
          return <Card removeFromArray={removeFromArray} item={item} />;
        })}
      </Gallery>
    </div>
  );
};
