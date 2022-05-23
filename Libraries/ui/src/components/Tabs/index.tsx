import React, { Children, cloneElement, FC, useReducer } from 'react';
import styled from 'styled-components';
import Tab from './Tab';
import { ReducerContext } from './contexts';
import { classNames, reduce, setActiveIndex } from './methods';
import { TabsProps } from './props';
import { TabsSubComponents } from './sub-components';

const StyledDiv: any = styled.div.attrs((props: TabsProps) => ({
  className: classNames`${props}`
}))``;

const StyledList: any = styled.ul``;

const Tabs: FC<TabsProps> & TabsSubComponents = (props: TabsProps) => {
  const {
    initialIndex = 0,
    children,
    onChange: handleChange = (newIndex: number, oldIndex: number) => {},
    ...otherProps
  }: TabsProps = props;

  const [state, dispatch] = useReducer(reduce, {
    activeIndex: initialIndex
  });

  const items: any = Children
    .map(children, (child: any, index: number) => cloneElement(child, {
      ...child.props,
      key: `tab-${index}`,
      index,
      onClick: (e: MouseEvent) => {
        e.preventDefault();

        handleChange(index, state.activeIndex);

        dispatch(setActiveIndex(index));
      }
    }));

  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      <StyledDiv {...otherProps}>
        <StyledList>
          {items}
        </StyledList>
      </StyledDiv>
    </ReducerContext.Provider>
  );
};

Tabs.Tab = Tab;

export default Tabs;
