import { SelectSidebar, wrapSidebar } from "@/store/sidebar/slice";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useState } from "react";
import { MessagePopup } from "../MessagePopup/component";
import cn from "classnames";
import {
  SelectNewsDisplayStyle,
  changeStyleForList,
} from "@/store/newsDisplayStyle/slice";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { isSidebarWrapped } = useSelector(SelectSidebar);
  const { isNewsStyleList } = useSelector(SelectNewsDisplayStyle);
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);

  return (
    <>
      <MessagePopup
        isPopupVisible={isPopupVisible}
        setIsPopupVisible={setIsPopupVisible}
      />
      <div className={styles["navbar"]}>
        <Link href="/" className={styles["logo"]}>
          <h1>GnNews</h1>
        </Link>
        <div className={styles["menu"]}>
          <div
            className={styles["menu-item"]}
            onClick={() => dispatch(changeStyleForList(!isNewsStyleList))}
          >
            change style
          </div>
          <div
            className={styles["menu-item"]}
            onClick={() => setIsPopupVisible(true)}
          >
            info
          </div>
          <button
            className={cn(styles["menu-item"], styles["menu-item__button"])}
            onClick={() => dispatch(wrapSidebar(!isSidebarWrapped))}
          >
            sidebar
          </button>
        </div>
      </div>
    </>
  );
};
