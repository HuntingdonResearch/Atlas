import { ReactElement } from 'react';

export interface TooltipProps {
  position?:
    | 'top'
    | 'right'
    | 'bottom'
    | 'left';

  text: string;

  children: ReactElement;
}
