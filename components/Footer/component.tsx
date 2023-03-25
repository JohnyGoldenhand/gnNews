import { SelectNews } from "@/store/news/slice";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import Clock from "react-live-clock";
import NoSsr from "react-no-ssr";

export const Footer = () => {
  const { news } = useSelector(SelectNews);
  const postsAmount = news.articles?.length;

  return (
    <div className={styles["footer"]}>
      <NoSsr>
        <Clock format={"HH:mm:ss"} ticking={true} />
      </NoSsr>
      <p>posts on current page: {postsAmount}</p>
    </div>
  );
};
