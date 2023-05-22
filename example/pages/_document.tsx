import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />

        {/* Noflash script */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/noflash.min.js" />

        <NextScript />
      </body>
    </Html>
  );
}
