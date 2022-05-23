import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { BreadcrumbItemProps } from './props';

const StyledListItem: any = styled.li.attrs((props: BreadcrumbItemProps) => ({
  className: classNames`${props}`
}))``;

const BreadcrumbItem: FC<BreadcrumbItemProps> = (props: BreadcrumbItemProps) => (
  <StyledListItem {...props}/>
);

export default BreadcrumbItem;
