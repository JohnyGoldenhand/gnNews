import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { SelectNews } from "../store/news/newsSlice";
import { useEffect } from "react";
import { fetchNewsData } from "../store/news/newsSlice";
import { AppDispatch } from "@/store/store";
import { Sidebar } from "@/components/Sidebar/component";
import styles from "../styles/home.module.scss";

export default function Home() {
  const { data, error, status } = useSelector(SelectNews);
  const dispatch = useDispatch<AppDispatch>();

  const showArticles = () => {
    console.log(data, error, status);
  };

  useEffect(() => {
    dispatch(fetchNewsData());
  }, []);

  return (
    <>
      <Head>
        <title>GnNews</title>
        <meta name="description" content="News App" />
      </Head>
      <div className={styles["main"]}>
        <Sidebar />
        <button onClick={showArticles}>ShowNews</button>
      </div>
    </>
  );
}
