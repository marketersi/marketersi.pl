import React, { ReactNode } from "react";
import { motion, Variant } from "framer-motion";

type AnimationWrapperProps = {
  children: ReactNode;
  animationVariants: { [key: string]: Variant };
};

const AnimationWrapper = ({
  children,
  animationVariants,
}: AnimationWrapperProps) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={animationVariants}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
