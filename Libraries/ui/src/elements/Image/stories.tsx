import React, { ReactNode } from 'react';
import Content from '../../elements/Content';
import Image from '../../elements/Image';
import Column from '../../layouts/Column';
import Columns from '../../layouts/Columns';
import Container from '../../layouts/Container';

export default {
  component: Image,
  title: 'Elements/Image'
};

export const Simple = () => (
  <Shell>
    <Image size="128x128">
      <img src="https://via.placeholder.com/128.png" alt="Placeholder"/>
    </Image>
  </Shell>
);

export const Rounded = () => (
  <Shell>
    <Image size="128x128" rounded>
      <img src="https://via.placeholder.com/128.png" alt="Placeholder"/>
    </Image>
  </Shell>
);

export const Retina = () => (
  <Shell>
    <Image size="128x128">
      <img src="https://via.placeholder.com/256.png?text=256x256" alt="Placeholder"/>
    </Image>
  </Shell>
);

export const FullWidth = () => (
  <Shell>
    <Image size="square" fullwidth>
      <img src="https://unsplash.it/640/640?random" alt="Placeholder"/>
    </Image>
  </Shell>
);

export const Dimensions = () => (
  <Shell>
    <Image size="16x16">
      <img src="https://via.placeholder.com/16.png" alt="Placeholder"/>
    </Image>
    <Image size="24x24">
      <img src="https://via.placeholder.com/24.png" alt="Placeholder"/>
    </Image>
    <Image size="32x32">
      <img src="https://via.placeholder.com/32.png" alt="Placeholder"/>
    </Image>
    <Image size="48x48">
      <img src="https://via.placeholder.com/48.png" alt="Placeholder"/>
    </Image>
    <Image size="64x64">
      <img src="https://via.placeholder.com/64.png" alt="Placeholder"/>
    </Image>
    <Image size="96x96">
      <img src="https://via.placeholder.com/96.png" alt="Placeholder"/>
    </Image>
    <Image size="128x128">
      <img src="https://via.placeholder.com/128.png" alt="Placeholder"/>
    </Image>
  </Shell>
);

export const RatioSquare = () => (
  <Shell>
    <Image size="square">
      <img src="https://unsplash.it/640/640?random" alt="Placeholder"/>
    </Image>
  </Shell>
);

export const Ratio1By1 = () => (
  <Shell>
    <Image size="1by1">
      <img src="https://unsplash.it/640/640?random" alt="Placeholder"/>
    </Image>
  </Shell>
);

export const Ratio5By4 = () => (
  <Shell>
    <Image size="5by4">
      <img src="https://unsplash.it/500/400?random" alt="Placeholder"/>
    </Image>
  </Shell>
);

export const Ratio4By5 = () => (
  <Shell>
    <Image size="4by5">
      <img src="https://unsplash.it/400/500?random" alt="Placeholder"/>
    </Image>
  </Shell>
);

export const Ratio4By3 = () => (
  <Shell>
    <Image size="4by3">
      <img src="https://unsplash.it/400/300?random" alt="Placeholder"/>
    </Image>
  </Shell>
);

export const Ratio3By4 = () => (
  <Shell>
    <Image size="3by4">
      <img src="https://unsplash.it/300/400?random" alt="Placeholder"/>
    </Image>
  </Shell>
);

export const Ratio3By2 = () => (
  <Shell>
    <Image size="3by2">
      <img src="https://unsplash.it/300/200?random" alt="Placeholder"/>
    </Image>
  </Shell>
);

export const Ratio2By3 = () => (
  <Shell>
    <Image size="2by3">
      <img src="https://unsplash.it/200/300?random" alt="Placeholder"/>
    </Image>
  </Shell>
);

export const Ratio5By3 = () => (
  <Shell>
    <Image size="5by3">
      <img src="https://unsplash.it/500/300?random" alt="Placeholder"/>
    </Image>
  </Shell>
);

export const Ratio3By5 = () => (
  <Shell>
    <Image size="3by5">
      <img src="https://unsplash.it/300/500?random" alt="Placeholder"/>
    </Image>
  </Shell>
);

export const Ratio16By9 = () => (
  <Shell>
    <Image size="16by9">
      <img src="https://unsplash.it/1600/900?random" alt="Placeholder"/>
    </Image>
  </Shell>
);

export const Ratio9By16 = () => (
  <Shell>
    <Image size="9by16">
      <img src="https://unsplash.it/900/1600?random" alt="Placeholder"/>
    </Image>
  </Shell>
);

export const Ratio2By1 = () => (
  <Shell>
    <Image size="2by1">
      <img src="https://unsplash.it/200/100?random" alt="Placeholder"/>
    </Image>
  </Shell>
);

export const Ratio1By2 = () => (
  <Shell>
    <Image size="1by2">
      <img src="https://unsplash.it/100/200?random" alt="Placeholder"/>
    </Image>
  </Shell>
);

export const Ratio3By1 = () => (
  <Shell>
    <Image size="3by1">
      <img src="https://unsplash.it/300/100?random" alt="Placeholder"/>
    </Image>
  </Shell>
);

export const Ratio1By3 = () => (
  <Shell>
    <Image size="1by3">
      <img src="https://unsplash.it/100/300?random" alt="Placeholder"/>
    </Image>
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
