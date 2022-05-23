import React, { ReactNode } from 'react';
import Content from '../../elements/Content';
import Title from '../../elements/Title';
import Column from '../../layouts/Column';
import Columns from '../../layouts/Columns';
import Container from '../../layouts/Container';

export default {
  component: Title,
  title: 'Elements/Title'
};

export const H1 = () => (
  <Shell>
    <Title as="h1">
      This is a heading.
    </Title>
  </Shell>
);

export const H2 = () => (
  <Shell>
    <Title as="h2">
      This is a heading.
    </Title>
  </Shell>
);

export const H3 = () => (
  <Shell>
    <Title as="h3">
      This is a heading.
    </Title>
  </Shell>
);

export const H4 = () => (
  <Shell>
    <Title as="h4">
      This is a heading.
    </Title>
  </Shell>
);

export const H5 = () => (
  <Shell>
    <Title as="h5">
      This is a heading.
    </Title>
  </Shell>
);

export const H6 = () => (
  <Shell>
    <Title as="h6">
      This is a heading.
    </Title>
  </Shell>
);

export const H1WithSizes = () => (
  <Shell>
    <Title as="h1">
      This is a heading.
    </Title>
    <Title as="h1" size={1}>
      This is a heading.
    </Title>
    <Title as="h1" size={2}>
      This is a heading.
    </Title>
    <Title as="h1" size={3}>
      This is a heading.
    </Title>
    <Title as="h1" size={4}>
      This is a heading.
    </Title>
    <Title as="h1" size={5}>
      This is a heading.
    </Title>
    <Title as="h1" size={6}>
      This is a heading.
    </Title>
  </Shell>
);

export const H2WithSizes = () => (
  <Shell>
    <Title as="h2">
      This is a heading.
    </Title>
    <Title as="h2" size={1}>
      This is a heading.
    </Title>
    <Title as="h2" size={2}>
      This is a heading.
    </Title>
    <Title as="h2" size={3}>
      This is a heading.
    </Title>
    <Title as="h2" size={4}>
      This is a heading.
    </Title>
    <Title as="h2" size={5}>
      This is a heading.
    </Title>
    <Title as="h2" size={6}>
      This is a heading.
    </Title>
  </Shell>
);

export const H3WithSizes = () => (
  <Shell>
    <Title as="h3">
      This is a heading.
    </Title>
    <Title as="h3" size={1}>
      This is a heading.
    </Title>
    <Title as="h3" size={2}>
      This is a heading.
    </Title>
    <Title as="h3" size={3}>
      This is a heading.
    </Title>
    <Title as="h3" size={4}>
      This is a heading.
    </Title>
    <Title as="h3" size={5}>
      This is a heading.
    </Title>
    <Title as="h3" size={6}>
      This is a heading.
    </Title>
  </Shell>
);

export const H4WithSizes = () => (
  <Shell>
    <Title as="h4">
      This is a heading.
    </Title>
    <Title as="h4" size={1}>
      This is a heading.
    </Title>
    <Title as="h4" size={2}>
      This is a heading.
    </Title>
    <Title as="h4" size={3}>
      This is a heading.
    </Title>
    <Title as="h4" size={4}>
      This is a heading.
    </Title>
    <Title as="h4" size={5}>
      This is a heading.
    </Title>
    <Title as="h4" size={6}>
      This is a heading.
    </Title>
  </Shell>
);

export const H5WithSizes = () => (
  <Shell>
    <Title as="h5">
      This is a heading.
    </Title>
    <Title as="h5" size={1}>
      This is a heading.
    </Title>
    <Title as="h5" size={2}>
      This is a heading.
    </Title>
    <Title as="h5" size={3}>
      This is a heading.
    </Title>
    <Title as="h5" size={4}>
      This is a heading.
    </Title>
    <Title as="h5" size={5}>
      This is a heading.
    </Title>
    <Title as="h5" size={6}>
      This is a heading.
    </Title>
  </Shell>
);

export const H6WithSizes = () => (
  <Shell>
    <Title as="h6">
      This is a heading.
    </Title>
    <Title as="h6" size={1}>
      This is a heading.
    </Title>
    <Title as="h6" size={2}>
      This is a heading.
    </Title>
    <Title as="h6" size={3}>
      This is a heading.
    </Title>
    <Title as="h6" size={4}>
      This is a heading.
    </Title>
    <Title as="h6" size={5}>
      This is a heading.
    </Title>
    <Title as="h6" size={6}>
      This is a heading.
    </Title>
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
