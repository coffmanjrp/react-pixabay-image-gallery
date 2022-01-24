import { useState, useEffect } from 'react';
import { ImageCard, ImageSearch } from './components';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
      );
      const data = await res.json();

      setImages(data.hits);
      setIsLoading(false);
    };

    try {
      fetchData();
    } catch (err) {
      throw new Error(err);
    }
  }, [term]);

  return (
    <div className="container mx-auto">
      <ImageSearch setTerm={setTerm} />

      {!isLoading && images.length === 0 && (
        <h1 className="text-6xl text-center mx-auto mt-32 ">No Images Found</h1>
      )}

      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32 ">Loading...</h1>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-4 md:mx-0">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
