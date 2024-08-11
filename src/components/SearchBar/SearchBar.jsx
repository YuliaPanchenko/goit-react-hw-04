import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Here is your toast.");

const SearchBar = ({ onSubmit }) => {
  return (
    <header>
      <form>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
