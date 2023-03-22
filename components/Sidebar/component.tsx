import styles from "./styles.module.scss";
import { useState } from "react";
import cn from "classnames";

export const Sidebar = () => {
  const [isWrapped, setIsWrapped] = useState<boolean>(true);

  return (
    <>
      <div
        className={cn(styles["sidebar"], {
          [styles["sidebar__wrapped"]]: isWrapped,
        })}
      >
        <ul className={styles["list"]}>
          <li className={styles["list-item"]}>Poland</li>
        </ul>
      </div>
      <div>
        <button onClick={() => setIsWrapped(!isWrapped)}>Show Sidebar</button>
      </div>
    </>
  );
};
