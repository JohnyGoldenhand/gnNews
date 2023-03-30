import React from "react";
import { useSelector } from "react-redux";
import { SelectCountries } from "@/store/countries/slice";
import styles from "./styles.module.scss";
import { SelectSidebar } from "@/store/sidebar/slice";
import Image from "next/image";
import { useRouter } from "next/router";

export const NewsMenuDiscover = () => {
  const { countries } = useSelector(SelectCountries);
  const { isSidebarWrapped } = useSelector(SelectSidebar);
  const router = useRouter();
  return (
    <div className={styles["discover-news"]}>
      <h2 className={styles["discover-news__title"]}>
        Discover news for countries:
      </h2>
      {isSidebarWrapped &&
        countries.map((country) => (
          <div
            className={styles["discover-news__position"]}
            onClick={() => router.push(`/country/${country.cca2}`)}
          >
            <div key={country.cca2}>{country.name.common}</div>
            <div className={styles["discover-news__flag"]}>
              <Image src={country.flags.svg} fill alt="country flag" />
            </div>
          </div>
        ))}
    </div>
  );
};
