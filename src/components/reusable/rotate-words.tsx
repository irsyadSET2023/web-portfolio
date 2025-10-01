"use client";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

export function RotateWords({
  words = ["Word 1", "Word 2", "Word 3"],
}: {
  words: string[];
}) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000);
    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter w-fit flex items-center justify-center mx-auto">
      {" "}
      <AnimatePresence mode="wait">
        <motion.div
          key={words[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex text-secondary-foreground"
        >
          {words[index].split("").map((char, charIndex) => (
            <motion.span
              key={`${words[index]}-${charIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: charIndex * 0.1, // Each letter appears 0.1s after the previous one
              }}
            >
              {char === " " ? "\u00A0" : char}{" "}
              {/* Non-breaking space for spaces */}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
