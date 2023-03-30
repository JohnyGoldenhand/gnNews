import { SelectSidebar, wrapSidebar } from "@/store/sidebar/slice";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useState } from "react";
import { MessagePopup } from "../MessagePopup/component";
import cn from "classnames";
import {
  SelectNewsDisplayStyle,
  changeNewsStyle,
} from "@/store/newsDisplayStyle/slice";
import { NewsStyles } from "@/store/newsDisplayStyle/types";
import SidecarIcon from "public/images/sidebar.svg";
import MessageIcon from "public/images/messageIcon.svg";
import ListIcon from "public/images/listStyle.svg";
import TilesIcon from "public/images/squareStyles.svg";
import Image from "next/image";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { isSidebarWrapped } = useSelector(SelectSidebar);
  const { newsStyle } = useSelector(SelectNewsDisplayStyle);
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const handleChangeNewsStyle = () => {
    if (newsStyle === NewsStyles.list) {
      dispatch(changeNewsStyle(NewsStyles.tiles));
    } else {
      dispatch(changeNewsStyle(NewsStyles.list));
    }
  };

  const newsStyleImage = newsStyle === NewsStyles.list ? TilesIcon : ListIcon;

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
            className={cn(styles["menu-item"], styles["menu-item__button"])}
            onClick={handleChangeNewsStyle}
          >
            <Image src={newsStyleImage} fill alt="change style icon" />
          </div>
          <div
            className={cn(styles["menu-item"], styles["menu-item__button"])}
            onClick={() => setIsPopupVisible(true)}
          >
            <Image src={MessageIcon} fill alt="message icon" />
          </div>
          <button
            className={cn(styles["menu-item"], styles["menu-item__button"])}
            onClick={() => dispatch(wrapSidebar(!isSidebarWrapped))}
          >
            <Image src={SidecarIcon} fill alt="sidebar icon" />
          </button>
        </div>
      </div>
    </>
  );
};
