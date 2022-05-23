import React, { ReactNode } from 'react';
import Content from '../../elements/Content';
import Progress from '../../elements/Progress';
import Column from '../../layouts/Column';
import Columns from '../../layouts/Columns';
import Container from '../../layouts/Container';

export default {
  component: Progress,
  title: 'Elements/Progress'
};

export const Simple = () => (
  <Shell>
    <Progress value={40} max={100}>40%</Progress>
  </Shell>
);

export const ColorDark = () => (
  <Shell>
    <Progress color="dark" value={40} max={100}>40%</Progress>
  </Shell>
);

export const ColorLight = () => (
  <Shell>
    <Progress color="light" value={40} max={100}>40%</Progress>
  </Shell>
);

export const ColorPrimary = () => (
  <Shell>
    <Progress color="primary" value={40} max={100}>40%</Progress>
  </Shell>
);

export const ColorLink = () => (
  <Shell>
    <Progress color="link" value={40} max={100}>40%</Progress>
  </Shell>
);

export const ColorInfo = () => (
  <Shell>
    <Progress color="info" value={40} max={100}>40%</Progress>
  </Shell>
);

export const ColorSuccess = () => (
  <Shell>
    <Progress color="success" value={40} max={100}>40%</Progress>
  </Shell>
);

export const ColorWarning = () => (
  <Shell>
    <Progress color="warning" value={40} max={100}>40%</Progress>
  </Shell>
);

export const ColorDanger = () => (
  <Shell>
    <Progress color="danger" value={40} max={100}>40%</Progress>
  </Shell>
);

export const ColorBlack = () => (
  <Shell>
    <Progress color="black" value={40} max={100}>40%</Progress>
  </Shell>
);

export const ColorWhite = () => (
  <Shell>
    <Progress color="white" value={40} max={100}>40%</Progress>
  </Shell>
);

export const SizeSmall = () => (
  <Shell>
    <Progress size="small" value={40} max={100}>40%</Progress>
  </Shell>
);

export const SizeNormal = () => (
  <Shell>
    <Progress size="normal" value={40} max={100}>40%</Progress>
  </Shell>
);

export const SizeMedium = () => (
  <Shell>
    <Progress size="medium" value={40} max={100}>40%</Progress>
  </Shell>
);

export const SizeLarge = () => (
  <Shell>
    <Progress size="large" value={40} max={100}>40%</Progress>
  </Shell>
);

export const Indeterminate = () => (
  <Shell>
    <Progress color="primary" size="small" max={100}>Waiting...</Progress>
    <Progress color="danger" size="normal" max={100}>Waiting...</Progress>
    <Progress color="dark" size="medium" max={100}>Waiting...</Progress>
    <Progress color="info" size="large" max={100}>Waiting...</Progress>
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
