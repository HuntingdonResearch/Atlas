import React, { ReactNode } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Icon from '../../elements/Icon';
import Column from '../../layouts/Column';
import Columns from '../../layouts/Columns';
import Container from '../../layouts/Container';

export default {
  component: Breadcrumb,
  title: 'Components/Breadcrumb'
};

export const Simple = () => (
  <Shell>
    <Breadcrumb>
      <Breadcrumb.Item>
        <a href="#">Bulma</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Documentation</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Components</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        <a href="#" aria-current="page">Breadcrumb</a>
      </Breadcrumb.Item>
    </Breadcrumb>
  </Shell>
);

export const AlignmentLeft = () => (
  <Shell>
    <Breadcrumb alignment="left">
      <Breadcrumb.Item>
        <a href="#">Bulma</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Documentation</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Components</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        <a href="#" aria-current="page">Breadcrumb</a>
      </Breadcrumb.Item>
    </Breadcrumb>
  </Shell>
);

export const AlignmentCentered = () => (
  <Shell>
    <Breadcrumb alignment="centered">
      <Breadcrumb.Item>
        <a href="#">Bulma</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Documentation</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Components</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        <a href="#" aria-current="page">Breadcrumb</a>
      </Breadcrumb.Item>
    </Breadcrumb>
  </Shell>
);

export const AlignmentRight = () => (
  <Shell>
    <Breadcrumb alignment="right">
      <Breadcrumb.Item>
        <a href="#">Bulma</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Documentation</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Components</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        <a href="#" aria-current="page">Breadcrumb</a>
      </Breadcrumb.Item>
    </Breadcrumb>
  </Shell>
);

export const Icons = () => (
  <Shell>
    <Breadcrumb>
      <Breadcrumb.Item>
        <a href="#">
          <Icon size="small" name="home"/>
          <span>Bulma</span>
        </a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">
          <Icon size="small" name="book"/>
          <span>Documentation</span>
        </a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">
          <Icon size="small" name="puzzle-piece"/>
          <span>Components</span>
        </a>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        <a href="#" aria-current="page">
          <Icon size="small" name="thumbs-up"/>
          <span>Breadcrumb</span>
        </a>
      </Breadcrumb.Item>
    </Breadcrumb>
  </Shell>
);

export const SeparatorArrow = () => (
  <Shell>
    <Breadcrumb separator="arrow">
      <Breadcrumb.Item>
        <a href="#">Bulma</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Documentation</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Components</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        <a href="#" aria-current="page">Breadcrumb</a>
      </Breadcrumb.Item>
    </Breadcrumb>
  </Shell>
);

export const SeparatorBullet = () => (
  <Shell>
    <Breadcrumb separator="bullet">
      <Breadcrumb.Item>
        <a href="#">Bulma</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Documentation</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Components</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        <a href="#" aria-current="page">Breadcrumb</a>
      </Breadcrumb.Item>
    </Breadcrumb>
  </Shell>
);

export const SeparatorDot = () => (
  <Shell>
    <Breadcrumb separator="dot">
      <Breadcrumb.Item>
        <a href="#">Bulma</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Documentation</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Components</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        <a href="#" aria-current="page">Breadcrumb</a>
      </Breadcrumb.Item>
    </Breadcrumb>
  </Shell>
);

export const SeparatorSucceeds = () => (
  <Shell>
    <Breadcrumb separator="succeeds">
      <Breadcrumb.Item>
        <a href="#">Bulma</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Documentation</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Components</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        <a href="#" aria-current="page">Breadcrumb</a>
      </Breadcrumb.Item>
    </Breadcrumb>
  </Shell>
);

export const SizeSmall = () => (
  <Shell>
    <Breadcrumb size="small">
      <Breadcrumb.Item>
        <a href="#">Bulma</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Documentation</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Components</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        <a href="#" aria-current="page">Breadcrumb</a>
      </Breadcrumb.Item>
    </Breadcrumb>
  </Shell>
);

export const SizeNormal = () => (
  <Shell>
    <Breadcrumb size="normal">
      <Breadcrumb.Item>
        <a href="#">Bulma</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Documentation</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Components</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        <a href="#" aria-current="page">Breadcrumb</a>
      </Breadcrumb.Item>
    </Breadcrumb>
  </Shell>
);

export const SizeMedium = () => (
  <Shell>
    <Breadcrumb size="medium">
      <Breadcrumb.Item>
        <a href="#">Bulma</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Documentation</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Components</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        <a href="#" aria-current="page">Breadcrumb</a>
      </Breadcrumb.Item>
    </Breadcrumb>
  </Shell>
);

export const SizeLarge = () => (
  <Shell>
    <Breadcrumb size="large">
      <Breadcrumb.Item>
        <a href="#">Bulma</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Documentation</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">Components</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        <a href="#" aria-current="page">Breadcrumb</a>
      </Breadcrumb.Item>
    </Breadcrumb>
  </Shell>
);

export const Fancy = () => (
  <Shell>
    <Breadcrumb alignment="centered" separator="bullet" size="large">
      <Breadcrumb.Item>
        <a href="#">
          <Icon size="small" name="home"/>
          <span>Bulma</span>
        </a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">
          <Icon size="small" name="book"/>
          <span>Documentation</span>
        </a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#">
          <Icon size="small" name="puzzle-piece"/>
          <span>Components</span>
        </a>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        <a href="#" aria-current="page">
          <Icon size="small" name="thumbs-up"/>
          <span>Breadcrumb</span>
        </a>
      </Breadcrumb.Item>
    </Breadcrumb>
  </Shell>
);

function Shell({ children, fluid = false }: { children: ReactNode, fluid?: boolean }) {
  return (
    <Container fluid={fluid}>
      <Columns centered>
        <Column size="half">
          {children}
        </Column>
      </Columns>
    </Container>
  );
}
