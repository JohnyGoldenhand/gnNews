import Head from "next/head";
import styles from "../styles/home.module.scss";
import { Footer } from "components/Footer/component";

export default function Home() {
  return (
    <>
      <Head>
        <title>GnNews</title>
        <meta name="description" content="News App" />
      </Head>
      <div className={styles["main"]}>
        <h2>Home</h2>
      </div>
      <Footer />
    </>
  );
}
