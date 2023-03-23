import { NewsType } from "@/store/news/types";
import { FC } from "react";

export const NewsFeed: FC<NewsType> = (props) => {
  const { articles } = props;
  return (
    <div>
      {articles?.map((article) => (
        <>
          <p>{article.author}</p>
          <p>{article.title}</p>
        </>
      ))}
    </div>
  );
};
