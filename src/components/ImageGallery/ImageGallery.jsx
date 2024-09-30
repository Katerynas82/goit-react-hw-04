import ImageCard from "../ImageCard/ImageCard";
import style from "../ImageGallery/ImageGallery.module.css";

const ImageGallery = ({ images, handleImageClick }) => {
  return (
    <>
      <ul className={style.imageWrapper}>
        {images.map((image) => (
          <li className={style.img} key={image.id}>
            <ImageCard images={image} handleImageClick={handleImageClick} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
