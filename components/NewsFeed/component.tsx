import { NewsType } from "@/store/news/types";
import { FC } from "react";
import cn from "classnames";

import styles from "./styles.module.scss";
import { NewsCard } from "../NewsCard/component";
import { useSelector } from "react-redux";
import { SelectNewsDisplayStyle } from "@/store/newsDisplayStyle/slice";
import { NewsStyles } from "@/store/newsDisplayStyle/types";

export const NewsFeed: FC<NewsType> = (props) => {
  const { articles } = props;
  const { newsStyle } = useSelector(SelectNewsDisplayStyle);

  return (
    <div
      className={cn(styles["news"], {
        [styles["news__list"]]: newsStyle === NewsStyles.list,
      })}
    >
      {articles?.map((article, id) => (
        <NewsCard articleData={article} key={id} />
      ))}
    </div>
  );
};
