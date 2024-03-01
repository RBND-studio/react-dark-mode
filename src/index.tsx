import { createContext, ReactNode, useContext, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export type Mode = "system" | "dark" | "light";

export type IDarkModeContext = {
  mode: Mode;
  setMode: (value: Mode) => void;
};

const DarkModeContext = createContext<IDarkModeContext>({
  mode: "system",
  setMode: () => {},
});

type Props = {
  darkModeClass?: string;
  lightModeClass?: string;
  children?: ReactNode;
};

const preferDarkQuery = "(prefers-color-scheme: dark)";
const mediaQueryEventTarget =
  typeof window !== "undefined" ? window.matchMedia(preferDarkQuery) : null;
export const DarkModeProvider = ({ children, darkModeClass, lightModeClass }: Props) => {
  const [mode, setMode] = useLocalStorage<Mode>("scheme-mode", "system");

  useEffect(() => {
    const listener = (e: MediaQueryListEvent) => {
      if (mode === "system") setClassOnDocument(e.matches, darkModeClass, lightModeClass);
    };
    mediaQueryEventTarget?.addEventListener("change", listener);
    return () => mediaQueryEventTarget?.removeEventListener("change", listener);
  }, [mode]);

  useEffect(() => {
    if (mode === "dark") return setClassOnDocument(true, darkModeClass, lightModeClass);
    if (mode === "light") return setClassOnDocument(false, darkModeClass, lightModeClass);
    setClassOnDocument(window.matchMedia(preferDarkQuery).matches, darkModeClass, lightModeClass);
  }, [mode]);

  return (
    <DarkModeContext.Provider value={{ mode, setMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const setClassOnDocument = (darkTheme: boolean, darkModeClass?: string, lightModeClass?: string) => {
  const classNameDark = darkModeClass || "dark-mode";
  const classNameLight = lightModeClass || "light-mode";
  const element =
    typeof window !== "undefined" ? document.querySelector("html") : null;
  if (!element) return;
  element.classList.add(darkTheme ? classNameDark : classNameLight);
  element.classList.remove(darkTheme ? classNameLight : classNameDark);
};

export const useDarkMode = () => useContext(DarkModeContext);
