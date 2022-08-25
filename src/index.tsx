import { createContext, ReactNode, useContext, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

type SchemeMode = "system" | "dark" | "light";

type ISchemeContext = {
  mode: SchemeMode;
  setMode: (value: SchemeMode) => void;
};

const SchemeContext = createContext<ISchemeContext>({
  mode: "system",
  setMode: () => {},
});

type Props = {
  children?: ReactNode;
};

const preferDarkQuery = "(prefers-color-scheme: dark)";
const mediaQueryEventTarget =
  typeof window !== "undefined" ? window.matchMedia(preferDarkQuery) : null;
export const SchemeProvider = ({ children }: Props) => {
  const [mode, setMode] = useLocalStorage<SchemeMode>("scheme-mode", "system");

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
    <SchemeContext.Provider value={{ mode, setMode }}>
      {children}
    </SchemeContext.Provider>
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

export const useScheme = () => useContext(SchemeContext);
