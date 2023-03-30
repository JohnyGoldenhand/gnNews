import { FC } from "react";
import { NewsCardType } from "components/NewsCard/types";
import styles from "./styles.module.scss";

export const NewsListItem: FC<NewsCardType> = ({
  articleData: { title, description },
  setIsPreviewVisible,
}) => {
  return (
    <div
      className={styles["list-item"]}
      onClick={() => setIsPreviewVisible && setIsPreviewVisible(true)}
    >
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};
