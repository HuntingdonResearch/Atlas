import React, { FC } from 'react';
import styled from 'styled-components';
import Delete from '../Delete';
import { classNames } from './methods';
import { NotificationProps } from './props';

const StyledDiv: any = styled.div.attrs((props: NotificationProps): any => ({
  className: classNames`${props}`
}))``;

const Notification: FC<NotificationProps> = (props: NotificationProps) => {
  const {
    children,
    onDismiss: handleDismiss
  }: NotificationProps = props;

  return (
    <StyledDiv {...props}>
      {
        handleDismiss && <Delete onClick={handleDismiss}/>
      }
      {
        children
      }
    </StyledDiv>
  );
};

export default Notification;
