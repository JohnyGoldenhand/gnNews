import Head from "next/head";
import styles from "../styles/home.module.scss";
import { useEffect } from "react";
import { fetchCountries } from "store/countries/thunk";
import { AppDispatch } from "store/store";
import { useDispatch } from "react-redux";
import Image from "next/image";
import NewsBackground from "public/images/cyber-news-new.jpg";
import { NewsMenuDiscover } from "@/components/NewsMenuDiscover/component";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <>
      <Head>
        <title>GnNews</title>
        <meta name="description" content="News App" />
      </Head>
      <div className={styles["main"]}>
        <Image src={NewsBackground} fill alt="news hero image" />
        <NewsMenuDiscover />
      </div>
    </>
  );
}
