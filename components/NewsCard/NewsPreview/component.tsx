import { FC } from "react";
import { ArticlePreviewType } from "./types";

import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import ImagePlaceholder from "public/images/noImagePlaceholder.svg";

export const NewsPreview: FC<ArticlePreviewType> = (props) => {
  const { title, author, url, description } = props.articleData;

  if (!props.isPreviewVisible) return null;

  const miniature = props.articleData.urlToImage
    ? props.articleData.urlToImage.toString()
    : ImagePlaceholder;

  return (
    <div
      className={styles["news-preview"]}
      onClick={() => props.setIsPreviewVisible(false)}
    >
      <div
        className={styles["content"]}
        onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
      >
        <div
          className={styles["close"]}
          onClick={() => props.setIsPreviewVisible(false)}
        >
          x
        </div>

        <h3 className={styles["news-preview__title"]}>{title}</h3>
        <div className={styles["miniature"]}>
          <Image src={miniature} fill alt="miniature" />
        </div>
        <div className={styles["article"]}>
          <div>{description}</div>
        </div>
        <div className={styles["end-section"]}>
          <p>{author}</p>
          <Link href={url}>
            <div>Read more</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
