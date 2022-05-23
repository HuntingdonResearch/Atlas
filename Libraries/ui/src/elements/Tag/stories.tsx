import React, { ReactNode } from 'react';
import Tag from '../../elements/Tag';
import Content from '../../elements/Content';
import Column from '../../layouts/Column';
import Columns from '../../layouts/Columns';
import Container from '../../layouts/Container';

export default {
  component: Tag,
  title: 'Elements/Tag'
};

export const Simple = () => (
  <Shell>
    <Tag>Tag label</Tag>
  </Shell>
);

export const ColorDark = () => (
  <Shell>
    <Tag color="dark">Dark</Tag>
  </Shell>
);

export const ColorLight = () => (
  <Shell>
    <Tag color="light">Light</Tag>
  </Shell>
);

export const ColorPrimary = () => (
  <Shell>
    <Tag color="primary">Primary</Tag>
  </Shell>
);

export const ColorLink = () => (
  <Shell>
    <Tag color="link">Link</Tag>
  </Shell>
);

export const ColorInfo = () => (
  <Shell>
    <Tag color="info">Info</Tag>
  </Shell>
);

export const ColorSuccess = () => (
  <Shell>
    <Tag color="success">Success</Tag>
  </Shell>
);

export const ColorWarning = () => (
  <Shell>
    <Tag color="warning">Warning</Tag>
  </Shell>
);

export const ColorDanger = () => (
  <Shell>
    <Tag color="danger">Danger</Tag>
  </Shell>
);

export const ColorBlack = () => (
  <Shell>
    <Tag color="black">Black</Tag>
  </Shell>
);

export const ColorWhite = () => (
  <Shell>
    <Tag color="white">White</Tag>
  </Shell>
);

export const ColorDarkLight = () => (
  <Shell>
    <Tag color="dark" light>Dark</Tag>
  </Shell>
);

export const ColorLightLight = () => (
  <Shell>
    <Tag color="light" light>Light</Tag>
  </Shell>
);

export const ColorPrimaryLight = () => (
  <Shell>
    <Tag color="primary" light>Primary</Tag>
  </Shell>
);

export const ColorLinkLight = () => (
  <Shell>
    <Tag color="link" light>Link</Tag>
  </Shell>
);

export const ColorInfoLight = () => (
  <Shell>
    <Tag color="info" light>Info</Tag>
  </Shell>
);

export const ColorSuccessLight = () => (
  <Shell>
    <Tag color="success" light>Success</Tag>
  </Shell>
);

export const ColorWarningLight = () => (
  <Shell>
    <Tag color="warning" light>Warning</Tag>
  </Shell>
);

export const ColorDangerLight = () => (
  <Shell>
    <Tag color="danger" light>Danger</Tag>
  </Shell>
);

export const ColorBlackLight = () => (
  <Shell>
    <Tag color="black" light>Black</Tag>
  </Shell>
);

export const ColorWhiteLight = () => (
  <Shell>
    <Tag color="white" light>White</Tag>
  </Shell>
);

export const SizeNormal = () => (
  <Shell>
    <Tag size="normal">Normal</Tag>
  </Shell>
);

export const SizeMedium = () => (
  <Shell>
    <Tag size="medium">Medium</Tag>
  </Shell>
);

export const SizeLarge = () => (
  <Shell>
    <Tag size="large">Large</Tag>
  </Shell>
);

export const AsRounded = () => (
  <Shell>
    <Tag size="large" rounded>Large</Tag>
  </Shell>
);

export const AsDelete = () => (
  <Shell>
    <Tag size="large" delete onDismiss={() => alert('Clicked!')}/>
  </Shell>
);

export const WithDelete = () => (
  <Shell>
    <Tag size="large" color="info" onDismiss={() => alert('Clicked!')}>
      JavaScript
    </Tag>
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
