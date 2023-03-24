import { FC } from "react";
import { ArticleType } from "@/store/news/types";
import styles from "./styles.module.scss";
import Image from "next/image";
import Logo from "public/vercel.svg";

interface NewsCardType {
  articleData: ArticleType;
}

export const NewsCard: FC<NewsCardType> = ({ articleData }) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["image"]}>
        <Image
          src={
            articleData.urlToImage ? articleData.urlToImage.toString() : Logo
          }
          fill
          alt="miniature"
        />
      </div>
      <h4>{articleData.title}</h4>
      <p>{articleData.description}</p>
      <p>{articleData.publisedAt}</p>
    </div>
  );
};
