import React, { ReactNode } from 'react';
import Menu from '../../components/Menu';
import Column from '../../layouts/Column';
import Columns from '../../layouts/Columns';
import Container from '../../layouts/Container';

export default {
  component: Menu,
  title: 'Components/Menu'
};

export const Simple = () => (
  <Shell>
    <Menu>
      <Menu.Label>
        General
      </Menu.Label>
      <Menu.List>
        <Menu.List.Item>
          <a>Dashboard</a>
        </Menu.List.Item>
        <Menu.List.Item>
          <a>Customers</a>
        </Menu.List.Item>
      </Menu.List>
    </Menu>
  </Shell>
);

export const Fancy = () => (
  <Shell>
    <Menu>
      <Menu.Label>
        General
      </Menu.Label>
      <Menu.List>
        <Menu.List.Item>
          <a>Dashboard</a>
        </Menu.List.Item>
        <Menu.List.Item>
          <a>Customers</a>
        </Menu.List.Item>
      </Menu.List>
      <Menu.Label>
        Administration
      </Menu.Label>
      <Menu.List>
        <Menu.List.Item>
          <a>Team Settings</a>
        </Menu.List.Item>
        <Menu.List.Item>
          <a className="is-active">Manage Your Team</a>
          <Menu.List.Item.List>
            <Menu.List.Item.List.Item>
              <a>Members</a>
            </Menu.List.Item.List.Item>
            <Menu.List.Item.List.Item>
              <a>Plugins</a>
            </Menu.List.Item.List.Item>
            <Menu.List.Item.List.Item>
              <a>Authentication</a>
            </Menu.List.Item.List.Item>
          </Menu.List.Item.List>
        </Menu.List.Item>
        <Menu.List.Item>
          <a>Invitations</a>
        </Menu.List.Item>
        <Menu.List.Item>
          <a>Cloud Storage Environment Settings</a>
        </Menu.List.Item>
        <Menu.List.Item>
          <a>Authentication</a>
        </Menu.List.Item>
      </Menu.List>
      <Menu.Label>
        Transactions
      </Menu.Label>
      <Menu.List>
        <Menu.List.Item>
          <a>Payments</a>
        </Menu.List.Item>
        <Menu.List.Item>
          <a>Transfers</a>
        </Menu.List.Item>
        <Menu.List.Item>
          <a>Balance</a>
        </Menu.List.Item>
      </Menu.List>
    </Menu>
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
