import Footer from "./layout/footer";
import Navbar from "./layout/navbar";
import { motion } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

const pageMotionVariant = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
