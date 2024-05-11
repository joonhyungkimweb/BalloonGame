//   const [theme, setTheme] = useTheme();
//   const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

import { atom, useAtomValue, useSetAtom } from "jotai";
import { detectBrowserTheme } from "../shared/utils/themeUtils";

const themeAtom = atom<"light" | "dark">(detectBrowserTheme());
const toggleThemeAtom = atom(null, (_, set) => {
  set(themeAtom, (prev) => (prev === "light" ? "dark" : "light"));
});

const useThemeAtom = () => ({
  theme: useAtomValue(themeAtom),
  toggleTheme: useSetAtom(toggleThemeAtom),
});

export default useThemeAtom;
