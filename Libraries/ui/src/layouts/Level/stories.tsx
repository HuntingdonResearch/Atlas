import React from 'react';
import styled from 'styled-components';
import Anchor from '../../elements/Anchor';
import Button from '../../elements/Button';
import Subtitle from '../../elements/Subtitle';
import Control from '../../forms/Control';
import Field from '../../forms/Field';
import TextInput from '../../forms/TextInput';
import Level from '../../layouts/Level';
import Paragraph from '../../elements/Paragraph';
import Title from '../../elements/Title';

const StyledImg: any = styled.img`
  height: 30px
`;

export default {
  component: Level,
  title: 'Layouts/Level'
};

export const Simple = () => (
  <Level>
    <Level.Left>
      <Level.Item>
        <Subtitle size={5}>
          <strong>123</strong> posts
        </Subtitle>
      </Level.Item>
      <Level.Item>
        <Field addons>
          <Control>
            <TextInput name="search" placeholder="Find a post"/>
          </Control>
          <Control>
            <Button>
              Search
            </Button>
          </Control>
        </Field>
      </Level.Item>
    </Level.Left>

    <Level.Right>
      <Level.Item><strong>All</strong></Level.Item>
      <Level.Item><a>Published</a></Level.Item>
      <Level.Item><a>Drafts</a></Level.Item>
      <Level.Item><a>Deleted</a></Level.Item>
      <Level.Item><a className="button is-success">New</a></Level.Item>
    </Level.Right>
  </Level>
);

export const Centered = () => (
  <Level>
    <Level.Item className="has-text-centered">
      <div>
        <Paragraph heading>Tweets</Paragraph>
        <Title>3,456</Title>
      </div>
    </Level.Item>
    <Level.Item className="has-text-centered">
      <div>
        <Paragraph heading>Following</Paragraph>
        <Title>123</Title>
      </div>
    </Level.Item>
    <Level.Item className="has-text-centered">
      <div>
        <Paragraph heading>Followers</Paragraph>
        <Title>456K</Title>
      </div>
    </Level.Item>
    <Level.Item className="has-text-centered">
      <div>
        <Paragraph heading>Likes</Paragraph>
        <Title>789</Title>
      </div>
    </Level.Item>
  </Level>
);

export const CenteredAgain = () => (
  <Level>
    <Level.Item className="has-text-centered">
      <Anchor textColor="info">Home</Anchor>
    </Level.Item>
    <Level.Item className="has-text-centered">
      <Anchor textColor="info">Menu</Anchor>
    </Level.Item>
    <Level.Item className="has-text-centered">
      <StyledImg src="https://bulma.io/images/bulma-type.png" alt=""/>
    </Level.Item>
    <Level.Item className="has-text-centered">
      <Anchor textColor="info">Reservations</Anchor>
    </Level.Item>
    <Level.Item className="has-text-centered">
      <Anchor textColor="info">Contact</Anchor>
    </Level.Item>
  </Level>
);
