import { SelectNews } from "@/store/news/slice";
import styles from "./styles.module.scss";
import moment from "moment";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const Footer = () => {
  const [currentTime, setCurrentTime] = useState(moment().format("HH:mm:ss"));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format("HH:mm:ss"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const { news } = useSelector(SelectNews);
  const postsAmount = news.articles?.length;

  return (
    <div className={styles["footer"]}>
      <p>{currentTime}</p>
      <p>posts on current page: {postsAmount}</p>
    </div>
  );
};
