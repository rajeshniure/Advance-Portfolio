import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Base hook configuration with optimized settings
const createScrollHook = (animation: {
  initial: { opacity: number; x?: number; y?: number; scale?: number };
  animate: { opacity: number; x?: number; y?: number; scale?: number };
}) => (delay: number = 0, threshold: number = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: threshold,
    margin: "-100px 0px -100px 0px"
  });

  return {
    ref,
    isInView,
    initial: animation.initial,
    animate: isInView ? animation.animate : animation.initial,
    transition: { 
      duration: 0.6, // Reduced duration for faster animations
      delay: delay * 0.1
    }
  };
};

export const useScrollAnimation = createScrollHook({
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 }
});

export const useScrollAnimationLeft = createScrollHook({
  initial: { opacity: 0, x: -80 },
  animate: { opacity: 1, x: 0 }
});

export const useScrollAnimationRight = createScrollHook({
  initial: { opacity: 0, x: 80 },
  animate: { opacity: 1, x: 0 }
});

export const useScrollAnimationScale = createScrollHook({
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 }
}); 