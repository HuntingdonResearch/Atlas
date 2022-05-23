import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { MessageHeaderProps } from './props';

const StyledDiv: any = styled.div.attrs((props: MessageHeaderProps) => ({
  className: classNames`${props}`
}))``;

const StyledParagraph: any = styled.p.attrs((props: MessageHeaderProps) => ({
}))``;

const StyledButton: any = styled.button.attrs((props: MessageHeaderProps) => ({
  className: `delete`
}))``;

const MessageHeader: FC<MessageHeaderProps> = (props: MessageHeaderProps) => {
  const {
    delete: hasDelete,
    onDelete: handleDelete = () => {},
    children
  }: MessageHeaderProps = props;

  return (
    <StyledDiv{...props}>
      {
        !!children && <StyledParagraph>{children}</StyledParagraph>
      }
      {
        hasDelete && <StyledButton aria-label="delete" onClick={handleDelete}/>
      }
    </StyledDiv>
  );
};

export default MessageHeader;
