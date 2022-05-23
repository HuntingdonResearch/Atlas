import React, { ReactNode } from 'react';
import Anchor from '../../elements/Anchor';
import Content from '../../elements/Content';
import Column from '../../layouts/Column';
import Columns from '../../layouts/Columns';
import Container from '../../layouts/Container';

export default {
  component: Anchor,
  title: 'Elements/Anchor'
};

export const Simple = () => (
  <Shell>
    <Anchor href="https://www.example.com">
      This text is within a <strong>span</strong>.
    </Anchor>
  </Shell>
);

export const TextColorDark = () => (
  <Shell>
    <Anchor href="https://www.example.com" textColor="dark">
      This text is within a <strong>span</strong>.
    </Anchor>
  </Shell>
);

export const TextColorLight = () => (
  <Shell>
    <Anchor href="https://www.example.com" textColor="light">
      This text is within a <strong>span</strong>.
    </Anchor>
  </Shell>
);

export const TextColorPrimary = () => (
  <Shell>
    <Anchor href="https://www.example.com" textColor="primary">
      This text is within a <strong>span</strong>.
    </Anchor>
  </Shell>
);

export const TextColorLink = () => (
  <Shell>
    <Anchor href="https://www.example.com" textColor="link">
      This text is within a <strong>span</strong>.
    </Anchor>
  </Shell>
);

export const TextColorInfo = () => (
  <Shell>
    <Anchor href="https://www.example.com" textColor="info">
      This text is within a <strong>span</strong>.
    </Anchor>
  </Shell>
);

export const TextColorSuccess = () => (
  <Shell>
    <Anchor href="https://www.example.com" textColor="success">
      This text is within a <strong>span</strong>.
    </Anchor>
  </Shell>
);

export const TextColorWarning = () => (
  <Shell>
    <Anchor href="https://www.example.com" textColor="warning">
      This text is within a <strong>span</strong>.
    </Anchor>
  </Shell>
);

export const TextColorDanger = () => (
  <Shell>
    <Anchor href="https://www.example.com" textColor="danger">
      This text is within a <strong>span</strong>.
    </Anchor>
  </Shell>
);

export const TextColorBlack = () => (
  <Shell>
    <Anchor href="https://www.example.com" textColor="black">
      This text is within a <strong>span</strong>.
    </Anchor>
  </Shell>
);

export const TextColorWhite = () => (
  <Shell>
    <Anchor href="https://www.example.com" textColor="white">
      This text is within a <strong>span</strong>.
    </Anchor>
  </Shell>
);

export const BackColorDark = () => (
  <Shell>
    <Anchor href="https://www.example.com" backColor="dark">
      This text is within a <strong>span</strong>.
    </Anchor>
  </Shell>
);

export const BackColorLight = () => (
  <Shell>
    <Anchor href="https://www.example.com" backColor="light">
      This text is within a <strong>span</strong>.
    </Anchor>
  </Shell>
);

export const BackColorPrimary = () => (
  <Shell>
    <Anchor href="https://www.example.com" backColor="primary">
      This text is within a <strong>span</strong>.
    </Anchor>
  </Shell>
);

export const BackColorLink = () => (
  <Shell>
    <Anchor href="https://www.example.com" backColor="link">
      This text is within a <strong>span</strong>.
    </Anchor>
  </Shell>
);

export const BackColorInfo = () => (
  <Shell>
    <Anchor href="https://www.example.com" backColor="info">
      This text is within a <strong>span</strong>.
    </Anchor>
  </Shell>
);

export const BackColorSuccess = () => (
  <Shell>
    <Anchor href="https://www.example.com" backColor="success">
      This text is within a <strong>span</strong>.
    </Anchor>
  </Shell>
);

export const BackColorWarning = () => (
  <Shell>
    <Anchor href="https://www.example.com" backColor="warning">
      This text is within a <strong>span</strong>.
    </Anchor>
  </Shell>
);

export const BackColorDanger = () => (
  <Shell>
    <Anchor href="https://www.example.com" backColor="danger">
      This text is within a <strong>span</strong>.
    </Anchor>
  </Shell>
);

export const BackColorBlack = () => (
  <Shell>
    <Anchor href="https://www.example.com" backColor="black">
      This text is within a <strong>span</strong>.
    </Anchor>
  </Shell>
);

export const BackColorWhite = () => (
  <Shell>
    <Anchor href="https://www.example.com" backColor="white">
      This text is within a <strong>span</strong>.
    </Anchor>
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
