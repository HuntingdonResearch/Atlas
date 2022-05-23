import React, { ReactNode } from 'react';
import Button from '../../elements/Button';
import Buttons from '../../elements/Buttons';
import Content from '../../elements/Content';
import Column from '../../layouts/Column';
import Columns from '../../layouts/Columns';
import Container from '../../layouts/Container';

export default {
  component: Buttons,
  title: 'Elements/Buttons'
};

export const Simple = () => (
  <Shell>
    <Buttons>
      <Button color="success">Save changes</Button>
      <Button color="info">Save and continue</Button>
      <Button color="danger">Cancel</Button>
    </Buttons>
  </Shell>
);

export const WithList = () => (
  <Shell>
    <Buttons>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
      <Button>Four</Button>
      <Button>Five</Button>
      <Button>Six</Button>
      <Button>Seven</Button>
      <Button>Eight</Button>
      <Button>Nine</Button>
      <Button>Ten</Button>
      <Button>Eleven</Button>
      <Button>Twelve</Button>
      <Button>Thirteen</Button>
      <Button>Fourteen</Button>
      <Button>Fifteen</Button>
      <Button>Sixteen</Button>
      <Button>Seventeen</Button>
      <Button>Eighteen</Button>
      <Button>Nineteen</Button>
      <Button>Twenty</Button>
    </Buttons>
  </Shell>
);

export const WithModifiers = () => (
  <Shell>
    <Buttons addons>
      <Button color="success" selected>Yes</Button>
      <Button>Maybe</Button>
      <Button>No</Button>
    </Buttons>
    <Buttons addons>
      <Button>Yes</Button>
      <Button color="info" selected>Maybe</Button>
      <Button>No</Button>
    </Buttons>
    <Buttons addons>
      <Button>Yes</Button>
      <Button>Maybe</Button>
      <Button color="danger" selected>No</Button>
    </Buttons>
  </Shell>
);

export const AlignmentLeft = () => (
  <Shell>
    <Buttons addons alignment="left">
      <Button>Yes</Button>
      <Button>Maybe</Button>
      <Button>No</Button>
    </Buttons>
  </Shell>
);

export const AlignmentCentered = () => (
  <Shell>
    <Buttons addons alignment="centered">
      <Button>Yes</Button>
      <Button>Maybe</Button>
      <Button>No</Button>
    </Buttons>
  </Shell>
);

export const AlignmentRight = () => (
  <Shell>
    <Buttons addons alignment="right">
      <Button>Yes</Button>
      <Button>Maybe</Button>
      <Button>No</Button>
    </Buttons>
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
