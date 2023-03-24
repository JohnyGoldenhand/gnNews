import { FC } from "react";
import styles from "./styles.module.scss";
import moment from "moment";

interface NewsReleaseInfoType {
  publishedAt: string;
  author: string;
}

export const NewsReleaseInfo: FC<NewsReleaseInfoType> = ({
  publishedAt,
  author,
}) => {
  const date = moment(publishedAt);
  const formattedDate = date.format("LL");
  return (
    <div className={styles["news-release-info"]}>
      <p>{formattedDate ? formattedDate : "no date"}</p>
      <p>{author ? author : "no author"}</p>
    </div>
  );
};
