import { classNames } from '@/shared/lib/classNames';
import { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';

import styles from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
}

export const Input = memo(function Input(props: InputProps) {
    const { 
        className,
        type = 'text',
        value,
        onChange,
        autoFocus,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            ref.current.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const mods: Record<string, boolean> = {
        [styles.focused]: isFocused,
    };

    return (
        <input 
            ref={ref}
            className={classNames(styles.Input, mods, [className])} 
            type={type} 
            value={value}
            onChange={onChangeHandler}
            onFocus={onFocus}
            onBlur={onBlur}
            {...otherProps}
        />
    );
});