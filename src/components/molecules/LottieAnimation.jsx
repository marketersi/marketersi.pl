import { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from './data.json';

const LottieAnimation = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const handleMouseEnter = () => {
    setDirection(1);
    setIsPaused(false);
  };

  const handleMouseLeave = () => {
    setDirection(-1);
    setIsPaused(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsPaused(true); // Pause the animation after it plays initially
    }, 3000); // Adjust the time based on your animation length
  }, []);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Lottie
        options={defaultOptions}
        height={150}
        width={400}
        isPaused={isPaused}
        direction={direction}
      />
    </div>
  );
};

export default LottieAnimation;
