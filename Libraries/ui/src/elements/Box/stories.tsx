import React, { ReactNode } from 'react';
import Box from '../../elements/Box';
import Button from '../../elements/Button';
import Content from '../../elements/Content';
import Icon from '../../elements/Icon';
import Field from '../../forms/Field';
import Label from '../../forms/Label';
import Control from '../../forms/Control';
import EmailInput from '../../forms/EmailInput';
import Form from '../../forms/Form';
import PasswordInput from '../../forms/PasswordInput';
import Column from '../../layouts/Column';
import Columns from '../../layouts/Columns';
import Container from '../../layouts/Container';
import Level from '../../layouts/Level';
import Media from '../../layouts/Media';

export default {
  component: Box,
  title: 'Elements/Box'
};

export const Simple = () => (
  <Shell>
    <Box>
      I'm in a box.
    </Box>
  </Shell>
);

export const WithForm = () => (
  <Shell>
    <Box>
      <Form>
        <Field>
          <Label>Email</Label>
          <Control>
            <EmailInput name="email" placeholder="e.g. alex@example.com"/>
          </Control>
        </Field>

        <Field>
          <Label>Password</Label>
          <Control>
            <PasswordInput name="password" placeholder="********"/>
          </Control>
        </Field>

        <Button color="primary">Sign in</Button>
      </Form>
    </Box>
  </Shell>
);

export const WithMedia = () => (
  <Shell>
    <Box>
      <Media>
        <Media.Left as="div">
          <figure className="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"/>
          </figure>
        </Media.Left>
        <Media.Content>
          <Content className="content">
            <p>
              <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
              <br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla
              egestas. Nullam condimentum luctus turpis.
            </p>
          </Content>
          <Level mobile>
            <Level.Left>
              <Level.Item as="a" aria-label="reply">
                <Icon name="reply"/>
              </Level.Item>
              <Level.Item as="a" aria-label="retweet">
                <Icon name="retweet"/>
              </Level.Item>
              <Level.Item as="a" aria-label="like">
                <Icon name="heart"/>
              </Level.Item>
            </Level.Left>
          </Level>
        </Media.Content>
      </Media>
    </Box>
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
