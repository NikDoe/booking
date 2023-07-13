import { FC, useMemo, useState } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from "../lib/ThemeContext";

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider: FC<Props> = ({ children }) => {
  const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );
  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
