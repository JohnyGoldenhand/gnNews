import { NewsType } from "@/store/news/types";
import { FC } from "react";
import cn from "classnames";

import styles from "./styles.module.scss";
import { NewsCard } from "../NewsCard/component";
import { useSelector } from "react-redux";
import { SelectNewsDisplayStyle } from "@/store/newsDisplayStyle/slice";

export const NewsFeed: FC<NewsType> = (props) => {
  const { articles } = props;
  const { isNewsStyleList } = useSelector(SelectNewsDisplayStyle);

  return (
    <div
      className={cn(styles["news"], {
        [styles["news__list"]]: isNewsStyleList,
      })}
    >
      {articles?.map((article, id) => (
        <NewsCard articleData={article} key={id} />
      ))}
    </div>
  );
};
