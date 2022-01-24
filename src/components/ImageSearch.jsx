import { useState } from 'react';

const ImageSearch = ({ setTerm }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    setTerm(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form className="w-full max-w-sm" onSubmit={onSubmit}>
        <div className="flex items-center  border-b-2 border-green-500 py-2">
          <input
            type="text"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            placeholder="Search Image Term..."
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
