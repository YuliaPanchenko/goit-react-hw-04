import toast, { Toaster } from "react-hot-toast";
import css from "../SearchBar/SearchBar.module.css";

const notify = () => toast("Please enter search term!");

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const image = form.elements.image.value;

    if (form.elements.image.value.trim() === "") {
      notify();
      return;
    }
    console.log(image);

    onSubmit(image);
    form.reset();
  };

  return (
    <header className={css.formHeader}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.formInput}
          type="text"
          name="image"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.formBtn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
