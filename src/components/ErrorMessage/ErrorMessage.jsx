import { Toaster } from "react-hot-toast";
import style from "../ErrorMessage/ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={style.wrapper}>
      <Toaster
        containerStyle={{
          top: 10,
          left: 720,
          bottom: 20,
          right: 20,
          zIndex: 1001,
        }}
      />
    </div>
  );
};

export default ErrorMessage;
