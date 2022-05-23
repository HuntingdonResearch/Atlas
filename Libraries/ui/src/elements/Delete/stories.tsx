import React, { ReactNode } from 'react';
import Content from '../../elements/Content';
import Delete from '../../elements/Delete';
import Column from '../../layouts/Column';
import Columns from '../../layouts/Columns';
import Container from '../../layouts/Container';

export default {
  component: Delete,
  title: 'Elements/Delete'
};

export const Simple = () => (
  <Shell>
    <Delete/>
  </Shell>
);

export const SizeSmall = () => (
  <Shell>
    <Delete size="small"/>
  </Shell>
);

export const SizeNormal = () => (
  <Shell>
    <Delete size="normal"/>
  </Shell>
);

export const SizeMedium = () => (
  <Shell>
    <Delete size="medium"/>
  </Shell>
);

export const SizeLarge = () => (
  <Shell>
    <Delete size="large"/>
  </Shell>
);

function Shell({ children, fluid = false }: { children: ReactNode, fluid?: boolean }) {
  return (
    <Container fluid={fluid}>
      <Columns centered>
        <Column size="half">
          <Content>
            {children}
          </Content>
        </Column>
      </Columns>
    </Container>
  );
}
