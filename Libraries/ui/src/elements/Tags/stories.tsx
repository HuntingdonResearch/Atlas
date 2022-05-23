import React, { ReactNode } from 'react';
import Content from '../../elements/Content';
import Tag from '../../elements/Tag';
import Tags from '../../elements/Tags';
import Column from '../../layouts/Column';
import Columns from '../../layouts/Columns';
import Container from '../../layouts/Container';
import Field from '../../forms/Field';
import Control from '../../forms/Control';

export default {
  component: Tags,
  title: 'Elements/Tags'
};

export const Simple = () => (
  <Shell>
    <Tags>
      <Tag color="success">One</Tag>
      <Tag color="info">Two</Tag>
      <Tag color="danger">Three</Tag>
    </Tags>
  </Shell>
);

export const SizeNormal = () => (
  <Shell>
    <Tags size="normal">
      <Tag color="success">One</Tag>
      <Tag color="info">Two</Tag>
      <Tag color="danger">Three</Tag>
    </Tags>
  </Shell>
);

export const SizeMedium = () => (
  <Shell>
    <Tags size="medium">
      <Tag color="success">One</Tag>
      <Tag color="info">Two</Tag>
      <Tag color="danger">Three</Tag>
    </Tags>
  </Shell>
);

export const SizeLarge = () => (
  <Shell>
    <Tags size="large">
      <Tag color="success">One</Tag>
      <Tag color="info">Two</Tag>
      <Tag color="danger">Three</Tag>
    </Tags>
  </Shell>
);

export const SizeOverride = () => (
  <Shell>
    <Tags size="large">
      <Tag color="success">One</Tag>
      <Tag color="info" size="normal">Two</Tag>
      <Tag color="danger">Three</Tag>
    </Tags>
  </Shell>
);

export const WithAddons = () => (
  <Shell>
    <Tags size="large" addons>
      <Tag color="success">npm</Tag>
      <Tag color="light">0.9.3</Tag>
    </Tags>
    <Tags size="large" addons>
      <Tag color="danger">npm</Tag>
      <Tag color="dark">0.9.3</Tag>
    </Tags>
    <Tags size="large" addons>
      <Tag color="danger">npm</Tag>
      <Tag color="danger" delete/>
    </Tags>
  </Shell>
);

export const Fancy = () => (
  <Shell>
    <Field grouped alignment="multiline">
      <Control>
        <Tags addons>
          <Tag as="a" color="link">Technology</Tag>
          <Tag delete/>
        </Tags>
      </Control>

      <Control>
        <Tags addons>
          <Tag as="a" color="link">CSS</Tag>
          <Tag delete/>
        </Tags>
      </Control>

      <Control>
        <Tags addons>
          <Tag as="a" color="link">Flexbox</Tag>
          <Tag delete/>
        </Tags>
      </Control>

      <Control>
        <Tags addons>
          <Tag as="a" color="link">Web Design</Tag>
          <Tag delete/>
        </Tags>
      </Control>

      <Control>
        <Tags addons>
          <Tag as="a" color="link">Open Source</Tag>
          <Tag delete/>
        </Tags>
      </Control>

      <Control>
        <Tags addons>
          <Tag as="a" color="link">Web Community</Tag>
          <Tag delete/>
        </Tags>
      </Control>

      <Control>
        <Tags addons>
          <Tag as="a" color="link">Documentation</Tag>
          <Tag delete/>
        </Tags>
      </Control>
    </Field>
  </Shell>
)

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
