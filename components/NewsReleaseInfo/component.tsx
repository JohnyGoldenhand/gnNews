import { FC } from "react";
import styles from "./styles.module.scss";
import moment from "moment";
import { truncateText } from "utils/truncateText";

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

  const formatedAuthor = author ? truncateText(author, 15) : "no author";

  return (
    <div className={styles["news-release-info"]}>
      <p>{formattedDate ? formattedDate : "no date"}</p>
      <p>{formatedAuthor}</p>
    </div>
  );
};
