import style from "../ImageCard/ImageCard.module.css";

const ImageCard = ({ images, handleImageClick }) => {
  return (
    <>
      <a href={images.url} rel="noopener noreferrer">
        <img
          src={images.urls.small}
          target="_blank"
          className={style.img}
          alt={images.alt_description || "No description"}
          onClick={() => handleImageClick(images.urls.full)}
        ></img>
      </a>
    </>
  );
};

export default ImageCard;
