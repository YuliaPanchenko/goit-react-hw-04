import css from "../ImageGallery/ImageGallery.module.css";
import { ImageCard } from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className={css.wrap}>
      <ul className={css.imgList}>
        {images.map((image) => {
          return (
            <li
              className={css.imgItem}
              key={image.id}
              onClick={() => onImageClick(image)}
            >
              <ImageCard
                url={image.urls.small}
                desc={image.urls.alt_description}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImageGallery;
