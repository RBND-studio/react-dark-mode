import { DarkModeControls } from "@/components/DarkModeControls";

export default function Home() {
  return (
    <main>
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
