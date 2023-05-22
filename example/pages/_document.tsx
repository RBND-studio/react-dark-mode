import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html>
      <Head>
        {/* Make sure your global styles and/or css variables are in the HTML file, not in an external CSS file.  */}
        <style>{`
          .light-mode {
            color-scheme: light;
            background-color: white;
            color: black;
          }
          .dark-mode {
            /* Don't forget the color-scheme css attribute. This will avoid light scrollbars in dark mode. */
            color-scheme: dark;
            background-color: black;
            color: white;
          }
        `}</style>

        {/* Noflash script in the <head> of the HTML document */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/noflash.min.js" />
      </Head>
      <body>
        <Main />


        <NextScript />
      </body>
    </Html>
  );
}
