import { classNames } from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import { useCallback, useState } from 'react';

import AuthIcon from 'shared/assets/icons/auth.svg';

import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthOpen(prev => !prev);
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
                    onClick={onToggleModal}
                >
                    <AuthIcon />
                </Button>
                {/*eslint-disable-next-line i18next/no-literal-string */}
                <Modal isOpen={isAuthOpen} onClose={onToggleModal}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ab et perferendis mollitia. Voluptatem dolor numquam
                    aliquam eaque asperiores? Possimus laudantium
                    reprehenderit doloribus alias officiis aliquid mollitia
                    at necessitatibus fugiat earum?
                </Modal>
            </div>
        </div>
    );
};
