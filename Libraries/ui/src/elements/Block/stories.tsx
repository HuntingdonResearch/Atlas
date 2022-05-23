import React, { ReactNode } from 'react';
import Content from '../../elements/Content';
import Block from '../../elements/Block';
import Column from '../../layouts/Column';
import Columns from '../../layouts/Columns';
import Container from '../../layouts/Container';

export default {
  component: Block,
  title: 'Elements/Block'
};

export const Simple = () => (
  <Shell>
    <Block>
      This text is within a <strong>block</strong>.
    </Block>
    <Block>
      This text is within a <strong>second block</strong>. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
    </Block>
    <Block>
      This text is within a <strong>third block</strong>. This block has no margin at the bottom.
    </Block>
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
