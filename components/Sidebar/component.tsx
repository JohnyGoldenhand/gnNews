import styles from "./styles.module.scss";
import { useState } from "react";
import cn from "classnames";
import { useSelector } from "react-redux";
import { SelectCountries } from "@/store/countries/slice";

export const Sidebar = () => {
  const [isWrapped, setIsWrapped] = useState<boolean>(false);
  const { countries } = useSelector(SelectCountries);

  // cosnt [currentCountry, setCurrentCountry] = useState();

  return (
    <>
      <div
        className={cn(styles["sidebar"], {
          [styles["sidebar__wrapped"]]: isWrapped,
        })}
      >
        <ul className={styles["list"]}>
          <li>Clear</li>
          {countries.map((country: any) => (
            <li className={styles["list-item"]}>
              {country.name.common + country.flag}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button
          className={styles["button"]}
          onClick={() => setIsWrapped(!isWrapped)}
        >
          1
        </button>
      </div>
    </>
  );
};
