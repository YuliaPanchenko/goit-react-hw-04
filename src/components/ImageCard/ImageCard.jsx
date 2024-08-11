import React from "react";
import css from "../ImageCard/ImageCard.module.css";

export const ImageCard = ({ url, desc }) => {
  return (
    <div className={css.imgdWrap}>
      <img className={css.image} src={url} alt={desc} />
    </div>
  );
};

// export default ImageCard;
