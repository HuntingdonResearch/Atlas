import React from 'react';
import { OrdersFrontendProps } from './props';

export function OrdersFrontend(props: OrdersFrontendProps) {
  const { children }: OrdersFrontendProps = props;

  return (
    <orders-frontend>
      {children}
    </orders-frontend>
  );
}