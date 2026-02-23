import { useEffect, useState } from 'react';

export const useCounterAnimation = (
  targetValue: number,
  isVisible: boolean,
  duration: number = 2000
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(targetValue * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, targetValue, duration]);

  return count;
};
