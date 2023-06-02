import { motion } from "framer-motion";

const AnimatedComponent = ({ tag, variants, ...otherProps }) => {
  const MotionTag = motion[tag];

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, threshold: 1 }}
      transition={{ duration: 0.8, delay: 0.25 }}
      variants={variants}
      {...otherProps}></MotionTag>
  );
};

export default AnimatedComponent;
