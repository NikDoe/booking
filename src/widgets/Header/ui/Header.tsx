import { classNames } from '@/shared/lib/classNames';
import { Navbar } from '@/widgets/Navbar';
import { LangSwitcher } from '@/shared/ui/LangSwitcher';
import { Button } from '@/shared/ui/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from '@/features/AuthByEmail';

import AuthIcon from 'shared/assets/icons/auth.svg';

import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthOpen(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthOpen(true);
    }, []);

    return (
        <div 
            data-testid='header'
            className={classNames(styles.Header, {}, [className])}
        >
            <Navbar />
            <div className={styles.left}>
                <LangSwitcher />
                <Button 
                    className={styles.button}
                    onClick={onOpenModal}
                >
                    <AuthIcon />
                </Button>
                <LoginModal isOpen={isAuthOpen} onClose={onCloseModal} />
            </div>
        </div>
    );
};
