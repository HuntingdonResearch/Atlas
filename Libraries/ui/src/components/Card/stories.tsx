import React, { ReactNode } from 'react';
import Card from '../../components/Card';
import Column from '../../layouts/Column';
import Columns from '../../layouts/Columns';
import Container from '../../layouts/Container';

export default {
  component: Card,
  title: 'Components/Card'
}

export const Simple = () => (
  <Shell>
    <Card>
      <Card.Header icon="angle-down" label="more options">Component</Card.Header>
      <Card.Content>
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
          <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
          <br/>
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </Card.Content>
      <Card.Footer>
        <Card.Footer.Item>
          <a href="#">Save</a>
        </Card.Footer.Item>
        <Card.Footer.Item>
          <a href="#">Edit</a>
        </Card.Footer.Item>
        <Card.Footer.Item>
          <a href="#">Delete</a>
        </Card.Footer.Item>
      </Card.Footer>
    </Card>
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
