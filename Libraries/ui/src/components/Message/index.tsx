import React, { FC } from 'react';
import styled from 'styled-components';
import MessageBody from './MessageBody';
import MessageHeader from './MessageHeader';
import { classNames } from './methods';
import { MessageProps } from './props';
import { MessageSubComponents } from './sub-components';

const StyledArticle: any = styled.article.attrs((props: MessageProps) => ({
  className: classNames`${props}`
}))``;

const Message: FC<MessageProps> & MessageSubComponents = (props: MessageProps) => (
  <StyledArticle {...props}/>
);

Message.Header = MessageHeader;

Message.Body = MessageBody;

export default Message;
