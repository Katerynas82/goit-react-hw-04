import style from '../LoadMoreBtn/LoadMoreBtn.module.css';

const LoadMoreBtn = ({handleChangePage}) => {
  return (
    <div className={style.loadMoreContainer}>
      <button className={style.button} onClick={handleChangePage}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn