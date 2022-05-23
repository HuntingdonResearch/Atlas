import React, { FC, useRef } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { ModalBackgroundProps } from './props';

const StyledDiv: any = styled.div.attrs((props: ModalBackgroundProps) => ({
  className: classNames`${props}`
}))``;

const ModalBackground: FC<ModalBackgroundProps> = (props: ModalBackgroundProps) => {
  const {
    onClick: handleClick = () => {}
  }: ModalBackgroundProps = props;

  const ref = useRef(null);

  return (
    <StyledDiv ref={ref} {...props} onClick={handleClick}/>
  );
};

export default ModalBackground;
