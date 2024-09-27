import { Formik, Form, Field } from "formik";
import toast from "react-hot-toast";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import style from '../SearchBar/SearchBar.module.css';


const SearchBar = ({ setQuery, onSubmit }) => {
  const initialValues = { query: "" };

  const handleSubmit = (values, { resetForm }) => {
    if (!values.query || values.query.trim() === "") {
   
           toast.error("Please enter a search term!");
      return;
    }

    setQuery(values.query);
    onSubmit(values.query);
    resetForm();
  };

  return (
    <>
      <header className={style.header}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <Field className={style.input} name="query" placeholder="Search images and photos" />
            <button className={style.button} type="submit">Search</button>
          </Form>
        </Formik>
      </header>
      <ErrorMessage/>
    </>
  );
};

export default SearchBar;
