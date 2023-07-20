import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader';

import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
    const { t } = useTranslation('translation');
    
    return <div className={classNames(styles.PageLoader, {}, [className])}>
        <Loader  />
        {t('Загрузка')}
    </div>;
};