import { AnchorHTMLAttributes, AriaRole, ButtonHTMLAttributes } from 'react';

type ButtonExtends = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

interface ButtonType extends ButtonExtends {
  size?: 'small' | 'medium' | 'large';
  styleType?: 'solid' | 'text' | 'icon' | 'link';
  color?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  loading?: boolean;
  classNames?: string;
  block?: boolean;
  href?: string;
  role?: AriaRole;
  hasIconOnly?: boolean;
}

export type { ButtonExtends, ButtonType };
