import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink";

import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <h1 className={styles.Logo}>LOGO</h1>
      <AppLink to='/'>Главная</AppLink>
      <AppLink to='/about'>О Нас</AppLink>
    </div>
  );
};
