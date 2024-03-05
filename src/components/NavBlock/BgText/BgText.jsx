import React, { useState, useEffect } from 'react';

const texts = [
  { id: 1, text: 'Text 1', animation: 'fade' },
  { id: 2, text: 'Text 2', animation: 'slide-right' },
  { id: 3, text: 'Text 3', animation: 'slide-left' },
  { id: 4, text: 'Text 4', animation: 'scale-in' },
  { id: 5, text: 'Text 5', animation: 'bounce' },
];

const TextSlideShow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      {texts.map((item, idx) => (
        <div
          key={item.id}
          className={`absolute text-3xl font-bold text-center ${
            idx === index ? 'animate-' + item.animation : 'hidden'
          }`}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default TextSlideShow;
