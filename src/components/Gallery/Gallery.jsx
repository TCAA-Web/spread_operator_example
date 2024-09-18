import React from "react";
import style from "./Gallery.module.scss";

export const Gallery = ({ children }) => {
  return (
    <div>
      Gallery
      <section className={style.galleryStyle}>{children}</section>
    </div>
  );
};
