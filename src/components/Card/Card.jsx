import React from "react";
import AddIcon from "../../assets/add.png";
import RemoveIcon from "../../assets/remove.png";
import style from "./Card.module.scss";

// A card component to display our images. Takes the image, an add and a remove function
// Conditionally renders the remove button only if the remove function is passed to it as a prop
export const Card = ({ item, addToArray, removeFromArray }) => {
  return (
    <div className={style.container}>
      {removeFromArray ? (
        <img
          onClick={() => removeFromArray(item.uniqueID)}
          src={RemoveIcon}
          className={style.addIconStyle}
          alt="Remove Icon"
        />
      ) : (
        <img
          onClick={() => addToArray(item)}
          src={AddIcon}
          className={style.addIconStyle}
          alt="Add Icon"
        />
      )}
      <img className={style.cardStyle} src={item.download_url} />
      <div className={style.authorStyle}>{item.author}</div>
    </div>
  );
};
