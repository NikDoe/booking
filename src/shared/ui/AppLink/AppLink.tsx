import { FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames';

import styles from './AppLink.module.scss';

export enum AppLinkTheme {
    DEFAULT = 'default',
    PRIMARY = 'primary',
}

interface AppLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        children,
        className,
        to,
        theme = AppLinkTheme.DEFAULT,
        ...otherProps
    } = props;

    return (
        <Link
            className={classNames(styles.AppLink, {}, [className, styles[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
