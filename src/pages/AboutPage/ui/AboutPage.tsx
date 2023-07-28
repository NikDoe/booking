import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';

import styles from './AboutPage.module.scss';

interface AboutPageProps {
    className?: string;
}

const AboutPage = ({ className }: AboutPageProps) => {
    const { t } = useTranslation('aboutPage');

    return (
        <div className={classNames(styles.AboutPage, {}, [className])}>
            <h1>{t('Страница О Нас')}</h1>
        </div>
    );
};

export default AboutPage;
