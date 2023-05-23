import { DarkModeControls } from "@/components/DarkModeControls";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>@rbnd/react-dark-mode demo</title>
        <meta name="description" content="Demo of @rbnd/react-dark-mode npm package" />
      </Head>

      <h1>@rbnd/react-dark-mode demo</h1>
      <p>
        This page is demo of `@rbnd/react-dark-mode` npm package. It showcases three different
        modes, light, dark and system preference. It also shows how to correctly include
        `noflash.min.js` so there is no flash of light background with dark mode preference.
      </p>

      <DarkModeControls />
    </main>
  );
}
