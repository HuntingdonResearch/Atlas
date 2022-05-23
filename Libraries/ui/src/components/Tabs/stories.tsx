import React, { ReactNode } from 'react';
import Tabs from '../../components/Tabs';
import Icon from '../../elements/Icon';
import Column from '../../layouts/Column';
import Columns from '../../layouts/Columns';
import Container from '../../layouts/Container';

export default {
  component: Tabs,
  title: 'Components/Tabs'
};

export const Simple = () => (
  <Shell>
    <Tabs>
      <Tabs.Tab>Pictures</Tabs.Tab>
      <Tabs.Tab>Music</Tabs.Tab>
      <Tabs.Tab>Videos</Tabs.Tab>
      <Tabs.Tab>Documents</Tabs.Tab>
    </Tabs>
  </Shell>
);

export const AlignmentLeft = () => (
  <Shell>
    <Tabs alignment="left">
      <Tabs.Tab>Pictures</Tabs.Tab>
      <Tabs.Tab>Music</Tabs.Tab>
      <Tabs.Tab>Videos</Tabs.Tab>
      <Tabs.Tab>Documents</Tabs.Tab>
    </Tabs>
  </Shell>
);

export const AlignmentCentered = () => (
  <Shell>
    <Tabs alignment="centered">
      <Tabs.Tab>Pictures</Tabs.Tab>
      <Tabs.Tab>Music</Tabs.Tab>
      <Tabs.Tab>Videos</Tabs.Tab>
      <Tabs.Tab>Documents</Tabs.Tab>
    </Tabs>
  </Shell>
);

export const AlignmentRight = () => (
  <Shell>
    <Tabs alignment="right">
      <Tabs.Tab>Pictures</Tabs.Tab>
      <Tabs.Tab>Music</Tabs.Tab>
      <Tabs.Tab>Videos</Tabs.Tab>
      <Tabs.Tab>Documents</Tabs.Tab>
    </Tabs>
  </Shell>
);

export const Icons = () => (
  <Shell>
    <Tabs alignment="left">
      <Tabs.Tab>
        <Icon name="image" size="small"/>
        <span>Pictures</span>
      </Tabs.Tab>
      <Tabs.Tab>
        <Icon name="music" size="small"/>
        <span>Music</span>
      </Tabs.Tab>
      <Tabs.Tab>
        <Icon name="film" size="small"/>
        <span>Videos</span>
      </Tabs.Tab>
      <Tabs.Tab>
        <Icon name="file-text-o" size="small"/>
        <span>Documents</span>
      </Tabs.Tab>
    </Tabs>
  </Shell>
);

export const SizeSmall = () => (
  <Shell>
    <Tabs size="small">
      <Tabs.Tab>Pictures</Tabs.Tab>
      <Tabs.Tab>Music</Tabs.Tab>
      <Tabs.Tab>Videos</Tabs.Tab>
      <Tabs.Tab>Documents</Tabs.Tab>
    </Tabs>
  </Shell>
);

export const SizeNormal = () => (
  <Shell>
    <Tabs size="normal">
      <Tabs.Tab>Pictures</Tabs.Tab>
      <Tabs.Tab>Music</Tabs.Tab>
      <Tabs.Tab>Videos</Tabs.Tab>
      <Tabs.Tab>Documents</Tabs.Tab>
    </Tabs>
  </Shell>
);

export const SizeMedium = () => (
  <Shell>
    <Tabs size="medium">
      <Tabs.Tab>Pictures</Tabs.Tab>
      <Tabs.Tab>Music</Tabs.Tab>
      <Tabs.Tab>Videos</Tabs.Tab>
      <Tabs.Tab>Documents</Tabs.Tab>
    </Tabs>
  </Shell>
);

export const SizeLarge = () => (
  <Shell>
    <Tabs size="large">
      <Tabs.Tab>Pictures</Tabs.Tab>
      <Tabs.Tab>Music</Tabs.Tab>
      <Tabs.Tab>Videos</Tabs.Tab>
      <Tabs.Tab>Documents</Tabs.Tab>
    </Tabs>
  </Shell>
);

export const LookBoxed = () => (
  <Shell>
    <Tabs look="boxed">
      <Tabs.Tab>Pictures</Tabs.Tab>
      <Tabs.Tab>Music</Tabs.Tab>
      <Tabs.Tab>Videos</Tabs.Tab>
      <Tabs.Tab>Documents</Tabs.Tab>
    </Tabs>
  </Shell>
);

export const LookToggle = () => (
  <Shell>
    <Tabs look="toggle">
      <Tabs.Tab>Pictures</Tabs.Tab>
      <Tabs.Tab>Music</Tabs.Tab>
      <Tabs.Tab>Videos</Tabs.Tab>
      <Tabs.Tab>Documents</Tabs.Tab>
    </Tabs>
  </Shell>
);

export const LookToggleRounded = () => (
  <Shell>
    <Tabs look="toggle-rounded">
      <Tabs.Tab>Pictures</Tabs.Tab>
      <Tabs.Tab>Music</Tabs.Tab>
      <Tabs.Tab>Videos</Tabs.Tab>
      <Tabs.Tab>Documents</Tabs.Tab>
    </Tabs>
  </Shell>
);

export const Fullwidth = () => (
  <Shell>
    <Tabs fullwidth>
      <Tabs.Tab>Pictures</Tabs.Tab>
      <Tabs.Tab>Music</Tabs.Tab>
      <Tabs.Tab>Videos</Tabs.Tab>
      <Tabs.Tab>Documents</Tabs.Tab>
    </Tabs>
  </Shell>
);

export const Fancy = () => (
  <Shell fluid>
    <Tabs alignment="centered" size="large" look="boxed" fullwidth>
      <Tabs.Tab>
        <Icon name="image" size="small"/>
        <span>Pictures</span>
      </Tabs.Tab>
      <Tabs.Tab>
        <Icon name="music" size="small"/>
        <span>Music</span>
      </Tabs.Tab>
      <Tabs.Tab>
        <Icon name="film" size="small"/>
        <span>Videos</span>
      </Tabs.Tab>
      <Tabs.Tab>
        <Icon name="file-text-o" size="small"/>
        <span>Documents</span>
      </Tabs.Tab>
    </Tabs>
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
