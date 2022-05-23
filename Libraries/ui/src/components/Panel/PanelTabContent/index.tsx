import React, { Children, cloneElement, FC, useCallback, useContext, useEffect, useMemo } from 'react';
import { ReducerContext } from '../contexts';
import { classNames, setActiveName } from './methods';
import { PanelTabContentProps } from './props';

const PanelTabContent: FC<PanelTabContentProps> = (props: PanelTabContentProps) => {
  const {
    name,
    groups,
    children,
    ...otherProps
  }: PanelTabContentProps = props;

  const child: any = Children.only(children);

  const { state, dispatch } = useContext(ReducerContext);

  const visible: boolean = useMemo(() => groups?.includes(state.selectedGroup) as boolean, [groups, state.selectedGroup]);
  const active: boolean = useMemo(() => name === state.activeName, [name, state.activeName]);

  const handleClick = useCallback((e: any) => {
    e.preventDefault();

    dispatch(setActiveName(name));
  }, [dispatch]);

  useEffect(() => {
    if (!visible && active) {
      dispatch(setActiveName(name));
    }

    return () => {};
  }, [visible, active, dispatch]);

  const item: any = cloneElement(child, {
    ...child.props,
    ...otherProps,
    className: classNames`${{
      ...props,
      active
    }}`,
    onClick: handleClick
  });

  if (!visible) {
    return null;
  }

  return item;
}

export default PanelTabContent;
