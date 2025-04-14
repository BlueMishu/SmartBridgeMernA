import { useState } from 'react';

const TextUpdater = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type something..."
      />
      <p className="mt-2 text-gray-700">You typed: {text}</p>
    </div>
  );
};

export default TextUpdater;