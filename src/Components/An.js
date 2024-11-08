import React from 'react';
import TypingEffect from 'react-typing-effect';

function TypingText() {
  return (
    <TypingEffect
      text={["Welcome to my portfolio!", "I'm a React Developer.", "Let's create something amazing!"]}
      speed={100}
      eraseSpeed={50}
      eraseDelay={2000}
    />
  );
}

export default TypingText;
