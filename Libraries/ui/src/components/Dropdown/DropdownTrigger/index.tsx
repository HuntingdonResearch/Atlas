import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '../../../elements/Button';
import Icon from '../../../elements/Icon';
import { classNames } from './methods';
import { DropdownTriggerProps } from './props';

const StyledDiv: any = styled.div.attrs((props: DropdownTriggerProps) => ({
  className: classNames`${props}`
}))``;

const DropdownTrigger: FC<DropdownTriggerProps> = (props: DropdownTriggerProps) => {
  const {
    name,
    children,
    toggleActive
  }: DropdownTriggerProps = props;

  return (
    <StyledDiv>
      <Button aria-haspopup={true} aria-controls={name} onClick={toggleActive}>
        <span>
          {
            children
          }
        </span>
        <Icon name="angle-down"/>
      </Button>
    </StyledDiv>
  );
};

export default DropdownTrigger;
