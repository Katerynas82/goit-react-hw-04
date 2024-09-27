import style from '../ImageCard/ImageCard.module.css';

const ImageCard = ({ images, handleImageClick }) => {
  return (
    <>
      <div className={style.imageWrapper}>
        {images.map((image) => (
          <li className={style.img} key={image.id}>
            <a href={image.url}>
              <img
                src={image.urls.small}
                target="_blank"
                alt={image.alt_description || "No description"}
                onClick={() => handleImageClick(image.urls.full)}
              ></img>
            </a>
          </li>
        ))}
      </div>
    </>
  );
};

export default ImageCard;
