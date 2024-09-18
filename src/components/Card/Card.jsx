import React from "react";
import AddIcon from "../../assets/add.png";
import style from "./Card.module.scss";

export const Card = (item) => {
  console.log(item);
  return (
    <div className={style.container}>
      <img src={AddIcon} className={style.addIconStyle} alt="Add Icon" />
      <img className={style.cardStyle} src={item.item.download_url} />
      <div className={style.authorStyle}>{item.item.author}</div>
    </div>
  );
};
