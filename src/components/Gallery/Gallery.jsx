import React from "react";
import style from "./Gallery.module.scss";

// Our Gallery component that displays a grid and a title
export const Gallery = ({ children, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <section className={style.galleryStyle}>{children}</section>
    </div>
  );
};
