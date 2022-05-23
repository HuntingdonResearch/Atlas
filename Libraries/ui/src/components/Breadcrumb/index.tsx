import React, { FC } from 'react';
import styled from 'styled-components';
import BreadcrumbItem from './BreadcrumbItem';
import { classNames } from './methods';
import { BreadcrumbProps } from './props';
import { BreadcrumbSubComponents } from './sub-components';

const StyledDiv: any = styled.nav.attrs((props: BreadcrumbProps) => ({
  className: classNames`${props}`,
  'aria-label': 'breadcrumbs'
}))``;

const StyledList: any = styled.ul``;

const Breadcrumb: FC<BreadcrumbProps> & BreadcrumbSubComponents = (props: BreadcrumbProps) => {
  const {
    alignment,
    separator,
    size,
    children,
    ...otherProps
  }: BreadcrumbProps = props;

  return (
    <StyledDiv alignment={alignment} separator={separator} size={size} {...otherProps}>
      <StyledList>
        {children}
      </StyledList>
    </StyledDiv>
  );
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
