import { FC, useState } from "react";
import { ArticleType } from "@/store/news/types";
import styles from "./styles.module.scss";
import Image from "next/image";
import Logo from "public/vercel.svg";
import { NewsReleaseInfo } from "../NewsReleaseInfo/component";
import cn from "classnames";
import { truncateText } from "utils/truncateText";
import { NewsPreview } from "./NewsPreview/component";
import { useSelector } from "react-redux";
import { SelectNewsDisplayStyle } from "@/store/newsDisplayStyle/slice";

interface NewsCardType {
  articleData: ArticleType;
}

export const NewsCard: FC<NewsCardType> = ({ articleData }) => {
  const [isPreviewVisible, setIsPreviewVisible] = useState<boolean>(false);
  const { isNewsStyleList } = useSelector(SelectNewsDisplayStyle);

  const NewsTile: FC<NewsCardType> = ({
    articleData: { title, urlToImage, description },
  }) => (
    <div className={styles["card"]} onClick={() => setIsPreviewVisible(true)}>
      <div className={cn(styles["card-content"])}>
        <div className={styles["image"]}>
          <Image
            src={urlToImage ? urlToImage.toString() : Logo}
            fill
            alt="miniature"
          />
        </div>
        <div className={styles["content"]}>
          <h4>{truncateText(title, 35)}</h4>
          <p>{truncateText(description, 30)}</p>
        </div>
      </div>
    </div>
  );

  const NewsListItem: FC<NewsCardType> = ({ articleData: { title } }) => {
    return (
      <div
        className={styles["list-item"]}
        onClick={() => setIsPreviewVisible(true)}
      >
        <h4>{title}</h4>
      </div>
    );
  };

  return (
    <>
      <NewsPreview
        isPreviewVisible={isPreviewVisible}
        articleData={articleData}
        setIsPreviewVisible={setIsPreviewVisible}
      />
      <div>
        {isNewsStyleList ? (
          <NewsListItem articleData={articleData} />
        ) : (
          <NewsTile articleData={articleData} />
        )}
        <NewsReleaseInfo
          author={articleData.author}
          publishedAt={articleData.publisedAt}
        />
      </div>
    </>
  );
};
