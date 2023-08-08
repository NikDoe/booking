import { classNames } from '@/shared/lib/classNames';
import { InputHTMLAttributes, Ref, forwardRef, memo, useState } from 'react';

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

const InputComponent = forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => {
    const { 
        className,
        type = 'text',
        value,
        onChange,
        autoFocus,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);


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

InputComponent.displayName = 'InputComponent';

export const Input = memo(InputComponent);