import React, { useState, useRef, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const TextRepeater = () => {
  const [inputText, setInputText] = useState('');
  const [repeatedText, setRepeatedText] = useState('');
  const [repeatCount, setRepeatCount] = useState(1);
  const contentRef = useRef(null);
  const [showScrollDown, setShowScrollDown] = useState(false);

  useEffect(() => {
    // Check if content is scrollable
    if (contentRef.current) {
      const isScrollable = contentRef.current.scrollHeight > contentRef.current.clientHeight;
      setShowScrollDown(isScrollable);

      // Adjust overflow-y dynamically
      contentRef.current.style.overflowY = isScrollable ? 'auto' : 'hidden';
    }
  }, [repeatedText]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleRepeatCountChange = (e) => {
    setRepeatCount(parseInt(e.target.value));
  };

  const handleRepeat = () => {
    const capitalizedText = inputText
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '); // Join with space after each word

    const repeated = Array(repeatCount).fill(capitalizedText).join('\n'); // Join with '\n' to create line breaks
    setRepeatedText(repeated);
  };

  const handleScroll = () => {
    if (contentRef.current) {
      const isAtBottom = contentRef.current.scrollHeight - contentRef.current.scrollTop === contentRef.current.clientHeight;
      setShowScrollDown(!isAtBottom);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[86.6vh] text-black">
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text to repeat"
        className="border border-gray-400 p-2 mb-4"
      />
      <input
        type="number"
        value={repeatCount}
        onChange={handleRepeatCountChange}
        className="border border-gray-400 p-2 mb-4 w-20"
      />
      <button
        onClick={handleRepeat}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Repeat
      </button>
      <div
        ref={contentRef}
        className="border border-gray-400 p-2 mt-4 text-white max-h-60 relative w-[200px] scrollbar-hidden"
        onScroll={handleScroll}
      >
        <strong>Repeated Text:</strong>
        <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          {repeatedText.split(' ').map((word, index) => (
            <span key={index}>{word} </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextRepeater;
