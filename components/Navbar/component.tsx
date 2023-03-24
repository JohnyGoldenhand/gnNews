import { SelectSidebar, wrapSidebar } from "@/store/sidebar/slice";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { isSidebarWrapped } = useSelector(SelectSidebar);

  return (
    <div className={styles["navbar"]}>
      <Link href="/" className={styles["logo"]}>
        <h1>GnNews</h1>
      </Link>
      <div className={styles["menu"]}>
        <div className={styles["menu-item"]}>change style</div>
        <div className={styles["menu-item"]}>info</div>
        <button
          className={styles["menu-item__button"]}
          onClick={() => dispatch(wrapSidebar(!isSidebarWrapped))}
        >
          sidebar
        </button>
      </div>
    </div>
  );
};
