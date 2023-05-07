import styles from "@/styles/Footer.module.scss";

function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      &copy; Copyright {currYear}, designed & developed by{" "}
      <a href="https://github.com/TomcyT" target="_blank" rel="noreferrer">
        Tomcy Thomas
      </a>
    </div>
  );
}

export default Footer;
