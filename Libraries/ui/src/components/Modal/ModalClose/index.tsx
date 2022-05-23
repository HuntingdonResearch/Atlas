import React, { FC } from 'react';
import styled from 'styled-components';
import useKeyEvent from '../../../hooks/useKeyEvent';
import { classNames } from './methods';
import { ModalCloseProps } from './props';

const StyledDiv: any = styled.div.attrs((props: ModalCloseProps) => ({
  className: classNames`${props}`
}))``;

const ModalClose: FC<ModalCloseProps> = (props: ModalCloseProps) => {
  const {
    onClick: handleClick = () => {}
  }: ModalCloseProps = props;

  useKeyEvent('Escape', handleClick);

  return (
    <StyledDiv {...props} aria-label="close" onClick={handleClick}/>
  );
};

export default ModalClose;
