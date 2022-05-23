import React, { Children, cloneElement, FC } from 'react';
import styled from 'styled-components';
import { TileProps } from './props';
import { classNames } from './methods';

const StyledDiv: any = styled.div.attrs((props: TileProps) => ({
  className: classNames`${props}`
}))``;

const Tile: FC<TileProps> = (props: TileProps) => {
  const {
    coalescing,
    children
  }: TileProps = props;

  return coalescing
    ? (
      <>
        {
          Children.map(children, (child: any, index: number) => cloneElement(child, {
            ...child.props,
            key: `tile-${index}`,
            className: classNames`${props}`
          }))
        }
      </>
    )
    : (
      <StyledDiv {...props}/>
    );

};

export default Tile;
