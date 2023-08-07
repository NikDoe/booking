import { classNames } from '@/shared/lib/classNames';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { ButtonTheme } from '@/shared/ui/Button/Button';

import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation('translation');
    
    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <h1 className={styles.title}>{t('login-form-title')}</h1>
            <Input
                placeholder={t('login-email-input')} 
                type='email'
            />
            <Input 
                placeholder={t('login-password-input')} 
                type='password'
            />
            <Button
                className={styles.button}
                theme={ButtonTheme.PRIMARY}
            >
                {t('login-btn')}
            </Button>
        </div>
    );
};