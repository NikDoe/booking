import { classNames } from "shared/lib/classNames/classNames";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О Нас</Link>
    </div>
  );
};
