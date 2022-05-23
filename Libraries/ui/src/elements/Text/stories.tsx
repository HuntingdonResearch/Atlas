import React, { ReactNode } from 'react';
import Content from '../../elements/Content';
import Text from '../../elements/Text';
import Column from '../../layouts/Column';
import Columns from '../../layouts/Columns';
import Container from '../../layouts/Container';

export default {
  component: Text,
  title: 'Elements/Text'
};

export const Simple = () => (
  <Shell>
    <Text>
      This text is within a <strong>span</strong>.
    </Text>
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
