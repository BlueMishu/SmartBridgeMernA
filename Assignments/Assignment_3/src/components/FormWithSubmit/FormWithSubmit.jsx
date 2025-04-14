import { useState } from 'react';

const FormWithSubmit = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted value:', inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border border-gray-300 p-2 rounded mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter text"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default FormWithSubmit;