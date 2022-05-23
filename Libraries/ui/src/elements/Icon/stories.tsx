import React, { ReactNode } from 'react';
import Content from '../../elements/Content';
import Icon from '../../elements/Icon';
import IconText from '../../elements/IconText';
import Column from '../../layouts/Column';
import Columns from '../../layouts/Columns';
import Container from '../../layouts/Container';

export default {
  component: Icon,
  title: 'Elements/Icon'
};

export const Simple = () => (
  <Shell>
    <Icon collection="fab" name="github">GitHub</Icon>
  </Shell>
);

export const WithColors = () => (
  <Shell>
    <Icon name="info-circle" color="info"/>
    <Icon name="check-square" color="success"/>
    <Icon name="exclamation-triangle" color="warning"/>
    <Icon name="ban" color="danger"/>
  </Shell>
);

export const InSpan = () => (
  <Shell>
    <IconText>
      <Icon collection="fab" name="github">GitHub</Icon>
    </IconText>
    <IconText>
      <Icon collection="fab" name="twitter">Twitter</Icon>
    </IconText>
  </Shell>
);

export const InDiv = () => (
  <Shell>
    <IconText as="div">
      <Icon collection="fab" name="github">GitHub</Icon>
    </IconText>
    <IconText as="div">
      <Icon collection="fab" name="twitter">Twitter</Icon>
    </IconText>
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
