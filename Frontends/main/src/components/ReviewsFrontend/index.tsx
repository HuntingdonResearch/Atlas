import React from 'react';
import { ReviewsFrontendProps } from './props';

export function ReviewsFrontend(props: ReviewsFrontendProps) {
  const { children }: ReviewsFrontendProps = props;

  return (
    <reviews-frontend>
      {children}
    </reviews-frontend>
  );
}