import { ReactNode } from 'react';
import { ToastColor } from '../../types/ToastColor';
import { ToastPosition } from '../../types/ToastPosition';

export interface ToastProps {
  children: ReactNode;

  offsetTop?: string | number;

  offsetLeft?: string | number;

  offsetBottom?: string | number;

  offsetRight?: string | number;

  dismissible?: boolean;

  onDismiss?: () => void;

  color?: ToastColor;

  duration?: number;

  position?: ToastPosition;

  pausesOnHover?: boolean;

  closesOnClick?: boolean;

  opacity?: number;
}
