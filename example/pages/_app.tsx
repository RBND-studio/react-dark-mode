import { DarkModeProvider } from "@rbnd/react-dark-mode";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Wrap your app with <DarkModeProvider>
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}
