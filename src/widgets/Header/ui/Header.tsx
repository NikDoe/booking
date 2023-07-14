import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Header.module.scss";
import { Navbar } from "widgets/Navbar";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <div className={classNames(styles.Header, {}, [className])}>
      <Navbar />
    </div>
  );
};
