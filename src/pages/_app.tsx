import type { AppProps } from "next/app";
import Header from "../shared/header/header";
import Footer from "../shared/footer/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}
