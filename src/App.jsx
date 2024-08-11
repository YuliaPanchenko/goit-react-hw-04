import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=QPr4h1RkC7EADmqtvFooYswOJC37zxtDKZ3NK3ZARFc"
      )
      .then(({ data }) => {
        setImages(data);
      });
  }, []);

  const onSubmit = () => {};
  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery images={images} />
    </>
  );
}

export default App;
