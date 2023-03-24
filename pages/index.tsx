import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { SelectNews } from "../store/news/slice";
import { useEffect } from "react";
import { fetchNewsData } from "../store/news/thunk";
import { fetchCountries } from "store/countries/thunk";
import { AppDispatch } from "store/store";
import { Sidebar } from "components/Sidebar/component";
import styles from "../styles/home.module.scss";
import { NewsFeed } from "components/NewsFeed/component";
import { Footer } from "components/Footer/component";

export default function Home() {
  const {
    news: { articles },
    currentCountry,
  } = useSelector(SelectNews);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchNewsData());
  }, [currentCountry]);

  return (
    <>
      <Head>
        <title>GnNews</title>
        <meta name="description" content="News App" />
      </Head>
      <div className={styles["main"]}>
        <Sidebar />
        <NewsFeed articles={articles} />
      </div>
      <Footer />
    </>
  );
}
