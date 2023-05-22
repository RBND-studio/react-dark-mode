import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />

        {/* Noflash script */}
        <Script strategy="beforeInteractive" src="/noflash.min.js" />

        {/* Outside of Next.js codebase you would replace the next/script with following: */}
        {/* <script src="/noflash.min.js"></script> */}
        {/* Also make sure to not use either `async` and `defer` <script> HTML attributes */}

        <NextScript />
      </body>
    </Html>
  );
}
