import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { Navbar } from "@/components/Navbar/component";
import "../styles/global.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div>
        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
          }
        `}</style>
      </div>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}
