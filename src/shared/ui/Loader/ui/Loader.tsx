import { classNames } from 'shared/lib/classNames';

import styles from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
    return <div className={classNames(styles.Main , {}, [className])}>
        <div className={styles.Inner}>
            <div></div>
            <div></div>
        </div>
    </div>;
};