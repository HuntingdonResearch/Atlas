import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { MessageBodyProps } from './props';

const StyledDiv: any = styled.div.attrs((props: MessageBodyProps) => ({
  className: classNames`${props}`
}))``;

const MessageBody: FC<MessageBodyProps> = (props: MessageBodyProps) => (
  <StyledDiv {...props}/>
);

export default MessageBody;
