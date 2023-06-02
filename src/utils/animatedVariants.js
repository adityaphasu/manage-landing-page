export const fadeInX = (value) => ({
  hidden: {
    opacity: 0,
    x: value === "positive" ? 45 : value === "negative" ? -45 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
});

export const fadeInY = {
  hidden: {
    opacity: 0,
    y: -45,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const stagger = (value) => ({
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      delay: 0.25,
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    x: value === "positive" ? 45 : value === "negative" ? -45 : 0,
  },
});
