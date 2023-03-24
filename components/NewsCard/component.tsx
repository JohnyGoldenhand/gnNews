import { FC, useEffect } from "react";
import { ArticleType } from "@/store/news/types";
import styles from "./styles.module.scss";
import Image from "next/image";
import Logo from "public/vercel.svg";
import { NewsReleaseInfo } from "../NewsReleaseInfo/component";
import cn from "classnames";

interface NewsCardType {
  articleData: ArticleType;
}

export const NewsCard: FC<NewsCardType> = ({ articleData }) => {
  const truncateText = (str: string, len: number) => {
    return str.length > len ? str.slice(0, len - 1) + "..." : str;
  };

  return (
    <div
      className={styles["card"]}
    >
      <div className={cn(styles["card-content"])}>
        <div className={styles["image"]}>
          <Image
            src={
              articleData.urlToImage ? articleData.urlToImage.toString() : Logo
            }
            fill
            alt="miniature"
          />
        </div>
        <div className={styles["content"]}>
          <h4>{truncateText(articleData.title, 35)}</h4>
          <p>{truncateText(articleData.description, 30)}</p>
        </div>
      </div>
      <NewsReleaseInfo
        author={articleData.author}
        publishedAt={articleData.publisedAt}
      />
    </div>
  );
};
