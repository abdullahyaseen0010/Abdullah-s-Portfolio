import { useRef, useState } from 'react';
import { useAnimationFrame } from 'framer-motion';

interface UseMarqueeProps {
  speed?: number;
  pauseOnHover?: boolean;
}

export const useMarquee = ({ speed = 30, pauseOnHover = true }: UseMarqueeProps = {}) => {
  const [isPaused, setIsPaused] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const xPos = useRef(0);

  useAnimationFrame((_, delta) => {
    if (!contentRef.current || isPaused) return;

    xPos.current -= (speed * delta) / 1000;
    const contentWidth = contentRef.current.offsetWidth / 2;

    if (xPos.current <= -contentWidth) {
      xPos.current = 0;
    }

    contentRef.current.style.transform = `translateX(${xPos.current}px)`;
  });

  const handlers = pauseOnHover
    ? {
        onMouseEnter: () => setIsPaused(true),
        onMouseLeave: () => setIsPaused(false),
      }
    : {};

  return { contentRef, handlers };
};