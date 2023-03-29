import cn from "classnames";
import styles from "./styles.module.scss";
import Image from "next/image";
import { truncateText } from "utils/truncateText";
import { FC } from "react";
import Logo from "public/vercel.svg";
import { NewsCardType } from "../types";

export const NewsTile: FC<NewsCardType> = ({
  articleData: { title, urlToImage, description },
  setIsPreviewVisible,
}) => (
  <div className={styles["card"]} onClick={() => setIsPreviewVisible(true)}>
    <div className={cn(styles["card-content"])}>
      <div className={styles["card-image"]}>
        <Image
          src={urlToImage ? urlToImage.toString() : Logo}
          fill
          alt="miniature"
        />
      </div>
      <div className={styles["card-description"]}>
        <h4>{truncateText(title, 35)}</h4>
        <p>{truncateText(description, 30)}</p>
      </div>
    </div>
  </div>
);
