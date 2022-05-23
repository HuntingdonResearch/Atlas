import React, { ReactNode } from 'react';
import Content from '../../elements/Content';
import Icon from '../../elements/Icon';
import IconText from '../../elements/IconText';
import Column from '../../layouts/Column';
import Columns from '../../layouts/Columns';
import Container from '../../layouts/Container';

export default {
  component: IconText,
  title: 'Elements/IconText'
};

export const Simple = () => (
  <Shell>
    <IconText>
      <Icon collection="fab" name="github">GitHub</Icon>
    </IconText>
  </Shell>
);

export const WithMultiple = () => (
  <Shell>
    <IconText>
      <Icon collection="fab" name="github">GitHub</Icon>
      <Icon collection="fab" name="twitter">Twitter</Icon>
      <Icon collection="fab" name="google">Google</Icon>
    </IconText>
  </Shell>
);

export const WithColor = () => (
  <Shell>
    <IconText color="info">
      <Icon name="info-circle">Info</Icon>
    </IconText>
    <IconText color="success">
      <Icon name="check-square">Success</Icon>
    </IconText>
    <IconText color="warning">
      <Icon name="exclamation-triangle">Warning</Icon>
    </IconText>
    <IconText color="danger">
      <Icon name="ban">Danger</Icon>
    </IconText>
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
