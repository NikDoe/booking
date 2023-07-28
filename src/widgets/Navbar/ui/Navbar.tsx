import { classNames } from '@/shared/lib/classNames';
import { AppLink } from '@/shared/ui/AppLink';

import styles from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('translation');

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <h1 className={styles.Logo}>LOGO</h1>
            <AppLink to='/'>{t('Главная')}</AppLink>
            <AppLink to='/about'>{t('О Нас')}</AppLink>
        </div>
    );
};
