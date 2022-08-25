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
  children?: ReactNode;
};

const preferDarkQuery = "(prefers-color-scheme: dark)";
const mediaQueryEventTarget =
  typeof window !== "undefined" ? window.matchMedia(preferDarkQuery) : null;
export const DarkModeProvider = ({ children }: Props) => {
  const [mode, setMode] = useLocalStorage<Mode>("scheme-mode", "system");

  useEffect(() => {
    const listener = (e: MediaQueryListEvent) => {
      if (mode === "system") setClassOnDocument(e.matches);
    };
    mediaQueryEventTarget?.addEventListener("change", listener);
    return () => mediaQueryEventTarget?.removeEventListener("change", listener);
  }, [mode]);

  useEffect(() => {
    if (mode === "dark") return setClassOnDocument(true);
    if (mode === "light") return setClassOnDocument(false);
    setClassOnDocument(window.matchMedia(preferDarkQuery).matches);
  }, [mode]);

  return (
    <DarkModeContext.Provider value={{ mode, setMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const setClassOnDocument = (darkTheme: boolean) => {
  const classNameDark = "dark-mode";
  const classNameLight = "light-mode";
  const element =
    typeof window !== "undefined" ? document.querySelector("html") : null;
  if (!element) return;
  element.classList.add(darkTheme ? classNameDark : classNameLight);
  element.classList.remove(darkTheme ? classNameLight : classNameDark);
};

export const useDarkMode = () => useContext(DarkModeContext);
