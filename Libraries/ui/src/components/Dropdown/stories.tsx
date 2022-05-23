import React, { ReactNode } from 'react';
import Dropdown from '../../components/Dropdown';
import Column from '../../layouts/Column';
import Columns from '../../layouts/Columns';
import Container from '../../layouts/Container';

export default {
  component: Dropdown,
  title: 'Components/Dropdown'
};

export const Simple = () => (
  <Shell fluid>
    <Dropdown name="simple">
      <Dropdown.Trigger>
        Dropdown button
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Menu.Item>
          <a>Dropdown item</a>
        </Dropdown.Menu.Item>
        <Dropdown.Menu.Item>
          <a className="is-active">Active dropdown item</a>
        </Dropdown.Menu.Item>
        <Dropdown.Menu.Item>
          <a>Other dropdown item</a>
        </Dropdown.Menu.Item>
        <Dropdown.Menu.Divider/>
        <Dropdown.Menu.Item>
          <a>With a divider</a>
        </Dropdown.Menu.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Shell>
);

export const Content = () => (
  <Shell fluid>
    <Dropdown name="content">
      <Dropdown.Trigger>
        Content
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Menu.Item>
          <div>
            <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
          </div>
        </Dropdown.Menu.Item>
        <Dropdown.Menu.Divider/>
        <Dropdown.Menu.Item>
          <div>
            <p>You simple need to use a <code>&lt;div&gt;</code> within the dropdown menu.</p>
          </div>
        </Dropdown.Menu.Item>
        <Dropdown.Menu.Divider/>
        <Dropdown.Menu.Item>
          <a>This is a link</a>
        </Dropdown.Menu.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Shell>
);

export const Clickable = () => (
  <Shell fluid>
    <Dropdown name="clickable-menu">
      <Dropdown.Trigger>
        Click on me
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Menu.Item>
          <a href="#">
            Overview
          </a>
        </Dropdown.Menu.Item>
        <Dropdown.Menu.Item>
          <a href="#">
            Modifiers
          </a>
        </Dropdown.Menu.Item>
        <Dropdown.Menu.Item>
          <a href="#">
            Grid
          </a>
        </Dropdown.Menu.Item>
        <Dropdown.Menu.Item>
          <a href="#">
            Form
          </a>
        </Dropdown.Menu.Item>
        <Dropdown.Menu.Item>
          <a href="#">
            Elements
          </a>
        </Dropdown.Menu.Item>
        <Dropdown.Menu.Item>
          <a href="#">
            Components
          </a>
        </Dropdown.Menu.Item>
        <Dropdown.Menu.Item>
          <a href="#">
            Layout
          </a>
        </Dropdown.Menu.Item>
        <Dropdown.Menu.Divider/>
        <Dropdown.Menu.Item>
          <a href="#">
            More
          </a>
        </Dropdown.Menu.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Shell>
);

export const Hoverable = () => (
  <Shell fluid>
    <Dropdown name="hoverable-menu" hoverable>
      <Dropdown.Trigger>
        Hover on me
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Menu.Item>
          <a href="#">
            Overview
          </a>
        </Dropdown.Menu.Item>
        <Dropdown.Menu.Item>
          <a href="#">
            Modifiers
          </a>
        </Dropdown.Menu.Item>
        <Dropdown.Menu.Item>
          <a href="#">
            Grid
          </a>
        </Dropdown.Menu.Item>
        <Dropdown.Menu.Item>
          <a href="#">
            Form
          </a>
        </Dropdown.Menu.Item>
        <Dropdown.Menu.Item>
          <a href="#">
            Elements
          </a>
        </Dropdown.Menu.Item>
        <Dropdown.Menu.Item>
          <a href="#">
            Components
          </a>
        </Dropdown.Menu.Item>
        <Dropdown.Menu.Item>
          <a href="#">
            Layout
          </a>
        </Dropdown.Menu.Item>
        <Dropdown.Menu.Divider/>
        <Dropdown.Menu.Item>
          <a href="#">
            More
          </a>
        </Dropdown.Menu.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Shell>
);

export const AlignmentLeft = () => (
  <Shell fluid>
    <Dropdown name="left-aligned" alignment="left">
      <Dropdown.Trigger>
        Left aligned
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Menu.Item className="dropdown-item">
          <div>
            <p>The dropdown is <strong>left-aligned</strong>.</p>
          </div>
        </Dropdown.Menu.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Shell>
);

export const AlignmentRight = () => (
  <Shell fluid>
    <Dropdown name="right-aligned" alignment="right">
      <Dropdown.Trigger>
        Right aligned
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Menu.Item className="dropdown-item">
          <div>
            <p>The dropdown is <strong>right-aligned</strong>.</p>
          </div>
        </Dropdown.Menu.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Shell>
);

export const DirectionDown = () => (
  <Shell fluid>
    <Dropdown name="directed-down" direction="down">
      <Dropdown.Trigger>
        Directed down
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Menu.Item className="dropdown-item">
          <div>
            <p>The dropdown is <strong>directed down</strong>.</p>
          </div>
        </Dropdown.Menu.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Shell>
);

export const DirectionUp = () => (
  <Shell fluid>
    <Dropdown name="directed-up" direction="up">
      <Dropdown.Trigger>
        Directed up
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Menu.Item className="dropdown-item">
          <div>
            <p>The dropdown is <strong>directed up</strong>.</p>
          </div>
        </Dropdown.Menu.Item>
      </Dropdown.Menu>
    </Dropdown>
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
