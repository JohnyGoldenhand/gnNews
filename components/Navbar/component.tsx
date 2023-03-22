import styles from "./styles.module.scss";

export const Navbar = () => {
  return (
    <div className={styles["navbar"]}>
      <h1>GnNews</h1>
      <div className={styles["menu"]}>
        <div className={styles["menu-item"]}>change style</div>
        <div className={styles["menu-item"]}>info</div>
      </div>
    </div>
  );
};
