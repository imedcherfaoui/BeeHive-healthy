import React, { useEffect, useState } from 'react';
import './Title.css';

const texts = [
  "British",
  "Healthy",
  "Food"
];

const Title = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearTimeout(intervalId);
  }, [textIndex]);

  return (
    <div id="container">
      <span id="text" className="text blur-animation">
        {texts[textIndex]}
      </span>
    </div>
  );
};

export default Title;
