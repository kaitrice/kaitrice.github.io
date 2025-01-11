import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function AnimChar({ character, delay }) {
  return (
    <motion.span
      className="color"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        delay,
        duration: 0.2,
      }}
    >
      {character === " " ? "\u00A0" : character}
    </motion.span>
  );
}

export default function AnimatedTypewriter({ messages, typingSpeed = 0.1, eraseSpeed = 0.1, pause = 1 }) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedCharacters, setDisplayedCharacters] = useState([]);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];

    if (!isErasing && displayedCharacters.length < currentMessage.length) {
      // Typing characters one by one
      const timeout = setTimeout(() => {
        setDisplayedCharacters((chars) => [
          ...chars,
          currentMessage[chars.length],
        ]);
      }, typingSpeed * 1000);
      return () => clearTimeout(timeout);
    } else if (!isErasing && displayedCharacters.length === currentMessage.length) {
      // Pause before erasing
      const timeout = setTimeout(() => setIsErasing(true), pause * 1000);
      return () => clearTimeout(timeout);
    } else if (isErasing && displayedCharacters.length > 0) {
      // Erasing characters one by one
      const timeout = setTimeout(() => {
        setDisplayedCharacters((chars) => chars.slice(0, -1));
      }, eraseSpeed * 1000);
      return () => clearTimeout(timeout);
    } else if (isErasing && displayedCharacters.length === 0) {
      // Move to the next message
      const nextIndex = (currentMessageIndex + 1) % messages.length;
      setIsErasing(false);
      setCurrentMessageIndex(nextIndex);
    }
  }, [displayedCharacters, isErasing, messages, currentMessageIndex, typingSpeed, eraseSpeed, pause]);

  return (
    <>
      {displayedCharacters.map((char, index) => (
        <AnimChar key={index} character={char} delay={0} />
      ))}
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: .5,
          repeat: Infinity,
        }}
        style={{ color: "var(--orange)" }}
      >
        _
      </motion.span>
    </>
  );
}
