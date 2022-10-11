import type { AppProps } from "next/app";

import "swiper/css";
import "swiper/css/bundle";
import "../styles/globals.css";
import Seo from "../components/Seo";

function MyApp({ Component, pageProps }: AppProps) {
  /* eslint-disable react/jsx-props-no-spreading */

  return (
    <>
      <Seo
        title="베어어스"
        description="빠른 행동과 실험을 통해 세상을 바꾸는 스타트업"
        url="https://bearus.co/"
        image="/favicon.ico"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
