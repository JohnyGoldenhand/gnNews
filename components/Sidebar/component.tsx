import styles from "./styles.module.scss";
import cn from "classnames";
import { useSelector } from "react-redux";
import { SelectCountries } from "@/store/countries/slice";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { SelectNews, changeCurrentCountry } from "@/store/news/slice";
import { SelectSidebar } from "@/store/sidebar/slice";
import { useRouter } from "next/router";

export const Sidebar = () => {
  const { countries } = useSelector(SelectCountries);
  const { currentCountry } = useSelector(SelectNews);
  const { isSidebarWrapped } = useSelector(SelectSidebar);
  const dispatch = useDispatch();
  const router = useRouter();

  const isHomepage = router.pathname === "/";

  const handleChangeCountry = (code: string) => {
    dispatch(changeCurrentCountry(code));
    router.push(`/country/${code}`);
  };

  return (
    <>
      <div
        className={cn(styles["sidebar"], {
          [styles["sidebar__wrapped"]]: isSidebarWrapped,
        })}
      >
        <ul className={styles["list"]}>
          {countries.map((country: any) => {
            const { name } = country;
            return (
              <li
                className={cn(styles["list-item"], {
                  [styles["list-item__active"]]:
                    country.cca2 === currentCountry && !isHomepage,
                })}
                key={name.common}
                onClick={() => handleChangeCountry(country.cca2)}
              >
                <Image
                  src={country.flags.png.toString()}
                  width={20}
                  height={15}
                  alt="flag"
                />
                <h5> {name.common}</h5>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
