import { motion, Variants } from "framer-motion";
import Link from "next/link";

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

const SkillSection = () => {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        variants={cardVariants}
        className="flex flex-col items-center"
      >
        <h1 className="text-3xl">Languages</h1>
      </motion.div>
    </motion.div>
  );
};

const Skill = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        className="flex flex-col px-2 gap-2 items-end w-full"
        variants={cardVariants}
      >
        <Link href="#skills">
          <a className="text-3xl font-montserrat">Skills</a>
        </Link>

        <div className="grid grid-cols-3">
          <div></div>
          <div></div>
          <div className="flex items-center">
            <p className="text-2xl text-blue-600 text-right">
              Always on my way to create new and better softwares, I have learnt
              a lot along the way
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skill;
