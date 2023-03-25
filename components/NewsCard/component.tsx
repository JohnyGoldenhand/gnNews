import { FC, useState } from "react";
import { ArticleType } from "@/store/news/types";
import styles from "./styles.module.scss";
import Image from "next/image";
import Logo from "public/vercel.svg";
import { NewsReleaseInfo } from "../NewsReleaseInfo/component";
import cn from "classnames";
import { truncateText } from "utils/truncateText";
import { NewsPreview } from "./NewsPreview/component";

interface NewsCardType {
  articleData: ArticleType;
}

export const NewsCard: FC<NewsCardType> = ({ articleData }) => {
  const [isPreviewVisible, setIsPreviewVisible] = useState<boolean>(false);

  return (
    <>
      <NewsPreview
        isPreviewVisible={isPreviewVisible}
        articleData={articleData}
        setIsPreviewVisible={setIsPreviewVisible}
      />
      <div className={styles["card"]} onClick={() => setIsPreviewVisible(true)}>
        <div className={cn(styles["card-content"])}>
          <div className={styles["image"]}>
            <Image
              src={
                articleData.urlToImage
                  ? articleData.urlToImage.toString()
                  : Logo
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
    </>
  );
};
