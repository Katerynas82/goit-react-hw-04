import ImageCard from "../ImageCard/ImageCard";
import style from "../ImagesGallery/ImagesGallery.module.css";

const ImagesGallery = ({images, handleImageClick}) => {
  return (
    <div>
      <ul className= {style.gallery}>
        <ImageCard images={images} handleImageClick={handleImageClick}/> 
      </ul>
    </div>
  );
}

export default ImagesGallery