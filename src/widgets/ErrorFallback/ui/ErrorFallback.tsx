import { classNames } from '@/shared/lib/classNames';

import styles from './ErrorFallback.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';

interface ErrorFallbackProps {
    className?: string;
}

export const ErrorFallback = ({ className }: ErrorFallbackProps) => {
    const { t } = useTranslation('translation');

    const errorMessage = `${t('Произошла ошибка')} 🤔`;
    const buttonText = `${t('Обновить страницу')}`;

    const reloadPage = () => {
        location.reload();
    };

    return <div className={classNames(styles.ErrorFallback, {}, [className])}>
        <h1>{errorMessage}</h1>
        <Button className={styles.Button} onClick={reloadPage}>{buttonText}</Button>
    </div>;
};