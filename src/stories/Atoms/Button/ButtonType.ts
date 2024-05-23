import { AnchorHTMLAttributes, AriaRole, ButtonHTMLAttributes } from 'react';

type ButtonExtends = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

interface ButtonType extends ButtonExtends {
  size?: 'small' | 'medium' | 'large';
  kind?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  loading?: boolean;
  classNames?: string;
  block?: boolean;
  href?: string;
  role?: AriaRole;
  hasIconOnly?: boolean;
}

export type { ButtonExtends, ButtonType };
