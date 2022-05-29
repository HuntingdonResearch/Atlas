import React from 'react';
import { UsersFrontendProps } from './props';

export function UsersFrontend(props: UsersFrontendProps) {
  const { children }: UsersFrontendProps = props;

  return (
    <users-frontend>
      {children}
    </users-frontend>
  );
}