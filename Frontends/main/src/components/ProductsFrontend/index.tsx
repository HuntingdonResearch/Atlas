import React from 'react';
import { ProductsFrontendProps } from './props';

export function ProductsFrontend(props: ProductsFrontendProps) {
  const { children }: ProductsFrontendProps = props;

  return (
    <products-frontend>
      {children}
    </products-frontend>
  );
}