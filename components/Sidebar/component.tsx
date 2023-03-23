import styles from "./styles.module.scss";
import { useState } from "react";
import cn from "classnames";
import { useSelector } from "react-redux";
import { SelectCountries } from "@/store/countries/slice";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { SelectNews, changeCurrentCountry } from "@/store/news/slice";

export const Sidebar = () => {
  const [isWrapped, setIsWrapped] = useState<boolean>(false);
  const { countries } = useSelector(SelectCountries);
  const { currentCountry } = useSelector(SelectNews);
  const dispatch = useDispatch();

  const handleChangeCountry = (code: string) => {
    dispatch(changeCurrentCountry(code));
  };

  return (
    <>
      <div
        className={cn(styles["sidebar"], {
          [styles["sidebar__wrapped"]]: isWrapped,
        })}
      >
        <ul className={styles["list"]}>
          {countries.map((country: any) => {
            const { name } = country;
            return (
              <li
                className={cn(styles["list-item"], {
                  [styles["list-item__active"]]:
                    country.cca2 === currentCountry.toUpperCase(),
                })}
                key={name.common}
                onClick={() => handleChangeCountry(country.cca2)}
              >
                <h5> {name.common}</h5>
                <Image
                  src={country.flags.png.toString()}
                  width={20}
                  height={15}
                  alt="flag"
                />
              </li>
            );
          })}
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
