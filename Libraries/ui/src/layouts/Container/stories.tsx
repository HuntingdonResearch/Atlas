import React from 'react';
import Notification from '../../elements/Notification';
import Container from '../../layouts/Container';

export default {
  component: Container,
  title: 'Layouts/Container'
};

export const Simple = () => (
  <Container>
    <Notification color="primary">
      This container is <strong>centered</strong> on desktop and larger viewports.
    </Notification>
  </Container>
);

export const Widescreen = () => (
  <Container size="widescreen">
    <Notification color="primary">
      This container is <strong>fullwidth</strong> <em>until</em> the <code>$widescreen</code> breakpoint.
    </Notification>
  </Container>
);

export const MaxDesktop = () => (
  <Container size="max-desktop">
    <Notification color="primary">
      This container has a <code>max-width</code> of <code>$desktop - $container-offset</code> on widescreen and fullhd.
    </Notification>
  </Container>
);

export const MaxWidescreen = () => (
  <Container size="max-widescreen">
    <Notification color="primary">
      This container has a <code>max-width</code> of <code>$widescreen - $container-offset</code> on fullhd.
    </Notification>
  </Container>
);

export const Fluid = () => (
  <Container fluid>
    <Notification color="primary">
      This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any viewport size.
    </Notification>
  </Container>
);
