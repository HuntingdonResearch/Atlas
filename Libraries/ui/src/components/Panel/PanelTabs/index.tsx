import React, { Children, cloneElement, FC, useContext } from 'react';
import styled from 'styled-components';
import { ReducerContext } from '../contexts';
import { classNames, setSelectedGroup } from './methods';
import { PanelTabsProps } from './props';

const StyledParagraph: any = styled.p.attrs((props: PanelTabsProps) => ({
  className: classNames`${props}`
}))``;

const PanelTabs: FC<PanelTabsProps> = (props: PanelTabsProps) => {
  const {
    children,
    ...otherProps
  }: PanelTabsProps = props;

  const { dispatch } = useContext(ReducerContext);

  const tabs: any = Children
    .toArray(children)
    .map((child: any) => cloneElement(child, {
      ...child.props,
      key: `panel-tab-${child.props.group}`,
      group: child.props.group,
      onClick: () => dispatch(setSelectedGroup(child.props.group))
    }));

  return (
    <StyledParagraph {...otherProps}>
      {tabs}
    </StyledParagraph>
  );
};

export default PanelTabs;
