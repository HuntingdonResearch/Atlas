import React, { ReactNode } from 'react';
import Panel from '../../components/Panel';
import Icon from '../../elements/Icon';
import Control from '../../forms/Control';
import TextInput from '../../forms/TextInput';
import Column from '../../layouts/Column';
import Columns from '../../layouts/Columns';
import Container from '../../layouts/Container';

export default {
  component: Panel,
  title: 'Components/Panel'
};

export const Simple = () => (
  <Shell>
    <Panel initialGroup="all">
      <Panel.Heading>Repositories</Panel.Heading>
      <Panel.Block>
        <Control>
          <TextInput name="search" placeholder="Search"/>
          <Icon name="search" position="left"/>
        </Control>
      </Panel.Block>
      <Panel.Tabs>
        <Panel.Tab group="all">All</Panel.Tab>
        <Panel.Tab group="public">Public</Panel.Tab>
        <Panel.Tab group="private">Private</Panel.Tab>
        <Panel.Tab group="sources">Sources</Panel.Tab>
        <Panel.Tab group="forks">Forks</Panel.Tab>
      </Panel.Tabs>
      <Panel.TabContent name="aqua" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          Aqua
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="banter" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          Banter
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="bulma" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          bulma
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="marksheet" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          marksheet
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="minireset.css" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          minireset.css
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="jgthms.github.io" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          jgthms.github.io
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="daniellowtw/infboard" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          daniellowtw/infboard
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="mojs" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          mojs
        </a>
      </Panel.TabContent>
    </Panel>
  </Shell>
);

export const ColorDark = () => (
  <Shell>
    <Panel color="dark" initialGroup="all">
      <Panel.Heading>Repositories</Panel.Heading>
      <Panel.Block>
        <Control>
          <TextInput name="search" placeholder="Search"/>
          <Icon name="search" position="left"/>
        </Control>
      </Panel.Block>
      <Panel.Tabs>
        <Panel.Tab group="all">All</Panel.Tab>
        <Panel.Tab group="public">Public</Panel.Tab>
        <Panel.Tab group="private">Private</Panel.Tab>
        <Panel.Tab group="sources">Sources</Panel.Tab>
        <Panel.Tab group="forks">Forks</Panel.Tab>
      </Panel.Tabs>
      <Panel.TabContent name="aqua" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          Aqua
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="banter" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          Banter
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="bulma" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          bulma
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="marksheet" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          marksheet
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="minireset.css" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          minireset.css
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="jgthms.github.io" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          jgthms.github.io
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="daniellowtw/infboard" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          daniellowtw/infboard
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="mojs" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          mojs
        </a>
      </Panel.TabContent>
    </Panel>
  </Shell>
);

export const ColorLight = () => (
  <Shell>
    <Panel color="light" initialGroup="all">
      <Panel.Heading>Repositories</Panel.Heading>
      <Panel.Block>
        <Control>
          <TextInput name="search" placeholder="Search"/>
          <Icon name="search" position="left"/>
        </Control>
      </Panel.Block>
      <Panel.Tabs>
        <Panel.Tab group="all">All</Panel.Tab>
        <Panel.Tab group="public">Public</Panel.Tab>
        <Panel.Tab group="private">Private</Panel.Tab>
        <Panel.Tab group="sources">Sources</Panel.Tab>
        <Panel.Tab group="forks">Forks</Panel.Tab>
      </Panel.Tabs>
      <Panel.TabContent name="aqua" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          Aqua
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="banter" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          Banter
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="bulma" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          bulma
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="marksheet" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          marksheet
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="minireset.css" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          minireset.css
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="jgthms.github.io" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          jgthms.github.io
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="daniellowtw/infboard" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          daniellowtw/infboard
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="mojs" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          mojs
        </a>
      </Panel.TabContent>
    </Panel>
  </Shell>
);

export const ColorPrimary = () => (
  <Shell>
    <Panel color="primary" initialGroup="all">
      <Panel.Heading>Repositories</Panel.Heading>
      <Panel.Block>
        <Control>
          <TextInput name="search" placeholder="Search"/>
          <Icon name="search" position="left"/>
        </Control>
      </Panel.Block>
      <Panel.Tabs>
        <Panel.Tab group="all">All</Panel.Tab>
        <Panel.Tab group="public">Public</Panel.Tab>
        <Panel.Tab group="private">Private</Panel.Tab>
        <Panel.Tab group="sources">Sources</Panel.Tab>
        <Panel.Tab group="forks">Forks</Panel.Tab>
      </Panel.Tabs>
      <Panel.TabContent name="aqua" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          Aqua
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="banter" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          Banter
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="bulma" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          bulma
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="marksheet" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          marksheet
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="minireset.css" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          minireset.css
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="jgthms.github.io" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          jgthms.github.io
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="daniellowtw/infboard" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          daniellowtw/infboard
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="mojs" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          mojs
        </a>
      </Panel.TabContent>
    </Panel>
  </Shell>
);

export const ColorLink = () => (
  <Shell>
    <Panel color="link" initialGroup="all">
      <Panel.Heading>Repositories</Panel.Heading>
      <Panel.Block>
        <Control>
          <TextInput name="search" placeholder="Search"/>
          <Icon name="search" position="left"/>
        </Control>
      </Panel.Block>
      <Panel.Tabs>
        <Panel.Tab group="all">All</Panel.Tab>
        <Panel.Tab group="public">Public</Panel.Tab>
        <Panel.Tab group="private">Private</Panel.Tab>
        <Panel.Tab group="sources">Sources</Panel.Tab>
        <Panel.Tab group="forks">Forks</Panel.Tab>
      </Panel.Tabs>
      <Panel.TabContent name="aqua" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          Aqua
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="banter" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          Banter
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="bulma" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          bulma
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="marksheet" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          marksheet
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="minireset.css" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          minireset.css
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="jgthms.github.io" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          jgthms.github.io
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="daniellowtw/infboard" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          daniellowtw/infboard
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="mojs" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          mojs
        </a>
      </Panel.TabContent>
    </Panel>
  </Shell>
);

export const ColorInfo = () => (
  <Shell>
    <Panel color="info" initialGroup="all">
      <Panel.Heading>Repositories</Panel.Heading>
      <Panel.Block>
        <Control>
          <TextInput name="search" placeholder="Search"/>
          <Icon name="search" position="left"/>
        </Control>
      </Panel.Block>
      <Panel.Tabs>
        <Panel.Tab group="all">All</Panel.Tab>
        <Panel.Tab group="public">Public</Panel.Tab>
        <Panel.Tab group="private">Private</Panel.Tab>
        <Panel.Tab group="sources">Sources</Panel.Tab>
        <Panel.Tab group="forks">Forks</Panel.Tab>
      </Panel.Tabs>
      <Panel.TabContent name="aqua" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          Aqua
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="banter" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          Banter
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="bulma" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          bulma
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="marksheet" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          marksheet
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="minireset.css" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          minireset.css
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="jgthms.github.io" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          jgthms.github.io
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="daniellowtw/infboard" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          daniellowtw/infboard
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="mojs" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          mojs
        </a>
      </Panel.TabContent>
    </Panel>
  </Shell>
);

export const ColorSuccess = () => (
  <Shell>
    <Panel color="success" initialGroup="all">
      <Panel.Heading>Repositories</Panel.Heading>
      <Panel.Block>
        <Control>
          <TextInput name="search" placeholder="Search"/>
          <Icon name="search" position="left"/>
        </Control>
      </Panel.Block>
      <Panel.Tabs>
        <Panel.Tab group="all">All</Panel.Tab>
        <Panel.Tab group="public">Public</Panel.Tab>
        <Panel.Tab group="private">Private</Panel.Tab>
        <Panel.Tab group="sources">Sources</Panel.Tab>
        <Panel.Tab group="forks">Forks</Panel.Tab>
      </Panel.Tabs>
      <Panel.TabContent name="aqua" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          Aqua
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="banter" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          Banter
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="bulma" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          bulma
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="marksheet" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          marksheet
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="minireset.css" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          minireset.css
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="jgthms.github.io" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          jgthms.github.io
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="daniellowtw/infboard" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          daniellowtw/infboard
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="mojs" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          mojs
        </a>
      </Panel.TabContent>
    </Panel>
  </Shell>
);

export const ColorWarning = () => (
  <Shell>
    <Panel color="warning" initialGroup="all">
      <Panel.Heading>Repositories</Panel.Heading>
      <Panel.Block>
        <Control>
          <TextInput name="search" placeholder="Search"/>
          <Icon name="search" position="left"/>
        </Control>
      </Panel.Block>
      <Panel.Tabs>
        <Panel.Tab group="all">All</Panel.Tab>
        <Panel.Tab group="public">Public</Panel.Tab>
        <Panel.Tab group="private">Private</Panel.Tab>
        <Panel.Tab group="sources">Sources</Panel.Tab>
        <Panel.Tab group="forks">Forks</Panel.Tab>
      </Panel.Tabs>
      <Panel.TabContent name="aqua" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          Aqua
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="banter" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          Banter
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="bulma" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          bulma
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="marksheet" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          marksheet
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="minireset.css" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          minireset.css
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="jgthms.github.io" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          jgthms.github.io
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="daniellowtw/infboard" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          daniellowtw/infboard
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="mojs" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          mojs
        </a>
      </Panel.TabContent>
    </Panel>
  </Shell>
);

export const ColorDanger = () => (
  <Shell>
    <Panel color="danger" initialGroup="all">
      <Panel.Heading>Repositories</Panel.Heading>
      <Panel.Block>
        <Control>
          <TextInput name="search" placeholder="Search"/>
          <Icon name="search" position="left"/>
        </Control>
      </Panel.Block>
      <Panel.Tabs>
        <Panel.Tab group="all">All</Panel.Tab>
        <Panel.Tab group="public">Public</Panel.Tab>
        <Panel.Tab group="private">Private</Panel.Tab>
        <Panel.Tab group="sources">Sources</Panel.Tab>
        <Panel.Tab group="forks">Forks</Panel.Tab>
      </Panel.Tabs>
      <Panel.TabContent name="aqua" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          Aqua
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="banter" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          Banter
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="bulma" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          bulma
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="marksheet" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          marksheet
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="minireset.css" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          minireset.css
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="jgthms.github.io" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          jgthms.github.io
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="daniellowtw/infboard" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          daniellowtw/infboard
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="mojs" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          mojs
        </a>
      </Panel.TabContent>
    </Panel>
  </Shell>
);

export const ColorBlack = () => (
  <Shell>
    <Panel color="black" initialGroup="all">
      <Panel.Heading>Repositories</Panel.Heading>
      <Panel.Block>
        <Control>
          <TextInput name="search" placeholder="Search"/>
          <Icon name="search" position="left"/>
        </Control>
      </Panel.Block>
      <Panel.Tabs>
        <Panel.Tab group="all">All</Panel.Tab>
        <Panel.Tab group="public">Public</Panel.Tab>
        <Panel.Tab group="private">Private</Panel.Tab>
        <Panel.Tab group="sources">Sources</Panel.Tab>
        <Panel.Tab group="forks">Forks</Panel.Tab>
      </Panel.Tabs>
      <Panel.TabContent name="aqua" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          Aqua
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="banter" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          Banter
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="bulma" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          bulma
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="marksheet" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          marksheet
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="minireset.css" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          minireset.css
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="jgthms.github.io" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          jgthms.github.io
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="daniellowtw/infboard" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          daniellowtw/infboard
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="mojs" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          mojs
        </a>
      </Panel.TabContent>
    </Panel>
  </Shell>
);

export const ColorWhite = () => (
  <Shell>
    <Panel color="white" initialGroup="all">
      <Panel.Heading>Repositories</Panel.Heading>
      <Panel.Block>
        <Control>
          <TextInput name="search" placeholder="Search"/>
          <Icon name="search" position="left"/>
        </Control>
      </Panel.Block>
      <Panel.Tabs>
        <Panel.Tab group="all">All</Panel.Tab>
        <Panel.Tab group="public">Public</Panel.Tab>
        <Panel.Tab group="private">Private</Panel.Tab>
        <Panel.Tab group="sources">Sources</Panel.Tab>
        <Panel.Tab group="forks">Forks</Panel.Tab>
      </Panel.Tabs>
      <Panel.TabContent name="aqua" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          Aqua
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="banter" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          Banter
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="bulma" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          bulma
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="marksheet" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          marksheet
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="minireset.css" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          minireset.css
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="jgthms.github.io" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          jgthms.github.io
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="daniellowtw/infboard" groups={['all', 'private']}>
        <a>
          <Panel.Icon name="book"/>
          daniellowtw/infboard
        </a>
      </Panel.TabContent>
      <Panel.TabContent name="mojs" groups={['all', 'public']}>
        <a>
          <Panel.Icon name="book"/>
          mojs
        </a>
      </Panel.TabContent>
    </Panel>
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
