import { motion, Variants } from "framer-motion";
import Link from "next/link";

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Skill = () => {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div className="card" variants={cardVariants}>
        <div className="w-fit whitespace-nowrap px-2">
          <Link href="#skills">
            <a className="text-3xl font-montserrat">Skills</a>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skill;
