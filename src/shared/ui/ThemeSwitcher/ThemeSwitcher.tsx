import DarcIcon from 'shared/assets/icons/darkTheme.svg';
import LightIcon from 'shared/assets/icons/lightTheme.svg';
import { Button } from 'shared/ui/Button';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';

import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toogleTheme } = useTheme();

    return (
        <Button 
            className={classNames(styles.ThemeSwitcher, {}, [className])} 
            onClick={toogleTheme}
        >
            {theme === Theme.DARK ? <LightIcon /> : <DarcIcon />}
        </Button>
    );
};
