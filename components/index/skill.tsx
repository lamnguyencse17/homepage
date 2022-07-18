import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Language from '@/components/index/skill/language';

const titleVariants: Variants = {
  offscreen: {
    x: 500,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 3,
    },
  },
}
const detailVariants: Variants = {
  offscreen: {
    x: -800,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 3,
    },
  },
};

const Skill = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div
        className="flex flex-col px-2 gap-2 items-end w-full"
      >
        <div className="grid grid-cols-3">
          <motion.div
            className="card-container col-span-2"
            variants={detailVariants}
          >
            <div className="grid grid-cols-2">
              <Language />
              <Language />
            </div>

          </motion.div>
          <motion.div className="flex items-end flex-col col-span-1" variants={titleVariants}>
            <Link href="#skills">
              <a className="text-3xl font-extrabold">Skills</a>
            </Link>
            <p className="text-2xl text-blue-600 text-right">
              Always on my way to create new and better softwares, I have learnt
              a lot along the way
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
