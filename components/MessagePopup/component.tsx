import styles from "./styles.module.scss";
import { FC } from "react";
import { MessagePopupType } from "./types";
import message from "public/text/difficultiesMessage.json";

export const MessagePopup: FC<MessagePopupType> = ({
  isPopupVisible,
  setIsPopupVisible,
}) => {
  if (!isPopupVisible) return null;
  return (
    <div
      className={styles["message-popup"]}
      onClick={() => setIsPopupVisible(false)}
    >
      <div
        className={styles["content"]}
        onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
      >
        <div
          className={styles["close"]}
          onClick={() => setIsPopupVisible(false)}
        >
          x
        </div>
        <p>{message.difficulties}</p>
      </div>
    </div>
  );
};
