import { BallTriangle } from "react-loader-spinner";
import style from '../Loader/Loader.module.css';

const Loader = () => {
  return (
    <div>
      <BallTriangle
        height={80}
        width={80}
        radius={5}
        color="#8525de"
        ariaLabel="ball-triangle-loading"
        
        wrapperClass={style.wrapper}
        visible={true}
      />
    </div>
  );
};

export default Loader;
