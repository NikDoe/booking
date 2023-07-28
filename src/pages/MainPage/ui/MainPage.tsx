import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';

import styles from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
    const { t } = useTranslation('mainPage');

    return (
        <div className={classNames(styles.MainPage, {}, [className])}>
            <h1>{t('Главная страница')}</h1>
        </div>
    );
};

export default MainPage;