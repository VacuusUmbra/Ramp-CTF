import { useState, useEffect } from "react";

const TextTyper = ({ text, delay }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayedText((prevText) => {
        if (prevText.length < text.length) {
          return prevText + text[prevText.length];
        } else {
          clearInterval(timer);
          return prevText;
        }
      });
    }, delay);

    return () => clearInterval(timer);
  }, [text, delay]);

  return (
    <div>
      {displayedText.split("").map((char, i) => (
        <li key={`${char}_${i}`}>{char}</li>
      ))}
    </div>
  );
};

export default TextTyper;
