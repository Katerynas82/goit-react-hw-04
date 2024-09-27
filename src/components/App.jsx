import { useEffect, useState } from "react";
import { fetchImages } from "../services/api";
import ImagesGallery from "./ImagesGallery/ImagesGallery";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./SearchBar/SearchBar";
import ImageModal from "./ImageModal/ImageModal";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState("");
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getImages = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchImages(page, query);
        setIsLoading(false);
        setImages((prev) => [...prev, ...data]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) {
      getImages();
    }
  }, [page, query]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleSetQuery = (topic) => {
    setQuery(topic);
    setImages([]);
    setPage(1);
  };
  const handleImageClick = (url) => {
    setLargeImageUrl(url);
    setImageModal(true);
  };

  return (
    <div>
      <SearchBar setQuery={handleSetQuery} />
      {images.length > 0 && (
        <ImagesGallery images={images} handleImageClick={handleImageClick} />
      )}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn handleChangePage={handleChangePage} />
      )}

      {isLoading && <Loader />}
      {isError && <ErrorMessage />}

      <ImageModal
        imageModal={imageModal}
        setImageModal={setImageModal}
        largeImageUrl={largeImageUrl}
      />
    </div>
  );
};

export default App;
