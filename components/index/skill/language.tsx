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
  return <div
    className="card-container"
  >
      <div
        className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
        <h1 className="mb-2 text-3xl font-medium tracking-tight text-gray-900">Languages</h1>
        <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions
          of 2021 so far, in reverse chronological order.</p>
      </div>
  </div>
};

export default Language;
