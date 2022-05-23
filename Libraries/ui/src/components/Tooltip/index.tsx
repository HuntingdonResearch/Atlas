import React, { Children, cloneElement, FC, ReactElement } from 'react';
import { TooltipProps } from './props';

const Tooltip: FC<TooltipProps> = (props: TooltipProps) => {
  const {
    text,
    children
  }: TooltipProps = props;

  return (
    <>
      {
        Children
          .map(children, (child: ReactElement, index: number): ReactElement => cloneElement(child, {
            key: `child-${index}`,
            ...child.props,
            'data-tooltip': text
          }))
      }
    </>
  );
};

export default Tooltip;
