import DarcIcon from 'shared/assets/icons/darkTheme.svg';
import LightIcon from 'shared/assets/icons/lightTheme.svg';
import { Button } from 'shared/ui/Button';
import { Theme, useTheme } from 'app/providers/ThemeProvider';

export const ThemeSwitcher = () => {
    const { theme, toogleTheme } = useTheme();

    return (
        <Button onClick={toogleTheme}>
            {theme === Theme.DARK ? <LightIcon /> : <DarcIcon />}
        </Button>
    );
};
