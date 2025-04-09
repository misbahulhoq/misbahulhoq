// DotWave.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const gridRows = 10;
const gridCols = 20;

const DotWave = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClickedIndex(index);
    setTimeout(() => setClickedIndex(null), 1000); // Reset after animation
  };

  const totalDots = gridRows * gridCols;

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="grid-cols-20 grid gap-2">
        {Array.from({ length: totalDots }).map((_, index) => {
          const distance =
            clickedIndex !== null
              ? Math.abs((index % gridCols) - (clickedIndex % gridCols)) +
                Math.abs(
                  Math.floor(index / gridCols) -
                    Math.floor(clickedIndex / gridCols),
                )
              : 0;

          return (
            <motion.div
              key={index}
              className="h-2 w-2 cursor-pointer rounded-full bg-gray-500"
              onClick={() => handleClick(index)}
              animate={{
                scale: clickedIndex !== null ? [1, 2, 1] : 1,
                opacity: clickedIndex !== null ? [1, 0.5, 1] : 1,
              }}
              transition={{
                delay: distance * 0.03,
                duration: 0.4,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DotWave;
