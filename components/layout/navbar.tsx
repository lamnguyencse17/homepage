import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 border-b-2 border-blue-100 bg-white w-full h-12 font-montserrat flex items-center z-50">
      <div className="container md:columns-3">
        <div>
          <p className="font-semibold text-3xl text-blue-600 max-w-fit mx-auto md:mx-0">
            Lam Projects
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
