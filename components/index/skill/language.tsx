import { Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    x: 500,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Language = () => {
  return <></>;
};

export default Language;
