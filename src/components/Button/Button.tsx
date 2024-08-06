import { useStyle } from 'hooks';
import styles from './Button.module.scss';
import { ButtonExtends, ButtonType } from './ButtonType';
import { forwardRef } from 'react';

export const Button = forwardRef<ButtonExtends, ButtonType>(
  (
    {
      type,
      size = 'medium',
      styleType,
      color = 'primary',
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
    ref,
  ) => {
    const { styled: cx } = useStyle(styles);

    const classes = cx('button', size, styleType, color, disabled, classNames, {
      'icon-only': hasIconOnly,
    });
    //클래스 명 : button-size-style-color

    //button-medium-solid-primary
    //button-large-text
    //button-icon / button-icon-only
    return (
      <button type={type} className={classes} {...rest}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
