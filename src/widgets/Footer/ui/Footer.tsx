import { classNames } from '@/shared/lib/classNames';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';

import styles from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(styles.Footer, {}, [className])}>
            <ThemeSwitcher />
        </div>
    );
};
