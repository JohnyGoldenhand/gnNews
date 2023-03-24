import { NewsType } from "@/store/news/types";
import { FC } from "react";

import styles from "./styles.module.scss";
import { NewsCard } from "../NewsCard/component";

export const NewsFeed: FC<NewsType> = (props) => {
  const { articles } = props;
  return (
    <div className={styles["news"]}>
      {articles?.map((article) => (
        <NewsCard articleData={article} />
      ))}
    </div>
  );
};
