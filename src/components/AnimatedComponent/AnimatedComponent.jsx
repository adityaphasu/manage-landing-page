import { motion, useReducedMotion } from "framer-motion";

const AnimatedComponent = ({ tag, variants, ...otherProps }) => {
  const MotionTag = motion[tag];
  const prefersReducedMotion = useReducedMotion();

  const shouldAnimate = prefersReducedMotion ? {} : variants;

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, threshold: 1 }}
      transition={{ duration: 0.8, delay: 0.25 }}
      variants={shouldAnimate}
      {...otherProps}></MotionTag>
  );
};

export default AnimatedComponent;
