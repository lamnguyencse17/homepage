import styles from "@/styles/components/layout/footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.note}>© Nguyễn Quang Lâm 2022</div>
      </div>
    </footer>
  );
};

export default Footer;
