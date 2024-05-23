import { useStyle } from '@/hooks';
import styles from './Button.module.scss';
import { ButtonExtends, ButtonType } from './ButtonType';
import { forwardRef } from 'react';

export const Button = forwardRef<ButtonExtends, ButtonType>(
  (
    {
      type,
      size = 'medium',
      kind = 'primary',
      children,
      classNames,
      disabled = false,
      loading = false,
      block = false,
      href,
      role,
      hasIconOnly = false,
      ...rest
    },
    ref
  ) => {
    const { styled } = useStyle(styles);
    const btnStyle = kind === 'primary' ? 'primary' : 'secondary';

    const classes = styled('button', `${size}`, disabled, btnStyle, classNames);

    return (
      <button type={type} className={classes} {...rest}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
