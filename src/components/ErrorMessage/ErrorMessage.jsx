import css from "../ErrorMessage/ErrorMessage.module.css";

const ErrorMessage = ({ error }) => {
  return (
    <h2 className={css.errorMessage}>
      {error}. Please, try again later or reload the peage.
    </h2>
  );
};

export default ErrorMessage;
