import Footer from "./layout/footer";
import Navbar from "./layout/navbar";
import styles from "@/styles/components/layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.body}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
