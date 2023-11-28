import React from 'react';
import './Title.css';

function Title({ lines }) {
  return (
    <div className="title-container pt-20 ms-10 flex-col slide-in-left tracking-wide">
      <span className='title-text text-4xl ms-1'>BeeHive is...</span>
      <div className='title-content text-8xl mt-5'>
        {lines.map((line, lineIndex) => (
          <React.Fragment key={lineIndex}>
            {console.log(line.bold)} {/* Add this line for logging */}
            {line.text.map((word, wordIndex) => (
              <React.Fragment key={wordIndex}>
                <span className={line.bold[wordIndex] ? 'font-bold ms-3' : 'me-3'}>{word} </span>
              </React.Fragment>
            ))}
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Title;
