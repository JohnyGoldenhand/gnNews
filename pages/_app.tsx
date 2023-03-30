import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "store/store";
import { Navbar } from "components/Navbar/component";
import "../styles/global.scss";
import { Sidebar } from "@/components/Sidebar/component";
import { Footer } from "@/components/Footer/component";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Navbar />
      <Sidebar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}
