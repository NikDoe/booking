import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";

import styles from "./Footer.module.scss";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const { toogleTheme } = useTheme();

  return (
    <div className={classNames(styles.Footer, {}, [className])}>
      <button onClick={toogleTheme}>тема</button>
    </div>
  );
};
