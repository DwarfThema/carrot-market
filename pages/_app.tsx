import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{ fetcher: (url: string) => fetch(url).then((res) => res.json()) }}
    >
      <div className="w-full max-w-xl mx-auto">
        <Component {...pageProps} />
      </div>
      <Script
        //@ts-ignore
        src="https://connect.facebook.net/en_US/sdk.js"
        onLoad={() => {
          //@ts-ignore
          window.fbAsyncInit = function () {
            //@ts-ignore
            FB.init({
              appId: "your-app-id",
              autoLogAppEvents: true,
              xfbml: true,
              version: "v14.0",
            });
          };
        }}
        strategy="beforeInteractive"
      />
    </SWRConfig>
  );
}

export default MyApp;
