import React, { useState } from "react";
import { Variants, motion } from "framer-motion";

interface TestProps {}

const Test: React.FC<TestProps> = ({}) => {
  const [isAnimationActive, setIsAnimationActive] = useState<boolean>(true);

  const variants: Variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: [0, 1390, 0], // Move up by 20px and then back to 0
      transition: {
        duration: 1, // Duration of the animation
        repeat: Infinity, // Repeat forever
        repeatType: "loop",
        ease: "linear",
      },
    },
  };

  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "200px",
        }}
      >
        <motion.div
          animate={isAnimationActive ? "animate" : "no-animate"}
          initial="initial"
          style={{
            width: "50px",
            height: "50px",
            background: "red",
            position: "absolute",
          }}
          variants={variants}
        />
      </div>
      <button onClick={() => setIsAnimationActive((prev) => !prev)}>
        {isAnimationActive ? "STOP" : "START"}
      </button>
    </div>
  );
};

export default Test;
