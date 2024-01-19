import { Variants } from "framer-motion";

export const slideAnimationLeft: Variants = {
  offscreen: {
    opacity: 0.5,
    x: -200,
    y: 200,
    transition: { duration: 2 },
  },
  onscreen: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 2 },
  },
};
