import React, { ReactNode } from 'react';
import Button from '../../elements/Button';
import Buttons from '../../elements/Buttons';
import Content from '../../elements/Content';
import Icon from '../../elements/Icon';
import Text from '../../elements/Text';
import Control from '../../forms/Control';
import Field from '../../forms/Field';
import ResetInput from '../../forms/ResetInput';
import SubmitInput from '../../forms/SubmitInput';
import Column from '../../layouts/Column';
import Columns from '../../layouts/Columns';
import Container from '../../layouts/Container';

export default {
  component: Button,
  title: 'Elements/Button'
};

export const Simple = () => (
  <Shell>
    <Button>Button</Button>
  </Shell>
);

export const WithTypes = () => (
  <Shell>
    <Buttons>
      <Button as="a">Anchor</Button>
      <Button>Button</Button>
      <SubmitInput name="submit">Submit input</SubmitInput>
      <ResetInput name="reset">Reset input</ResetInput>
    </Buttons>
  </Shell>
);

export const WithColors = () => (
  <Shell>
    <Buttons>
      <Button color="dark">Button</Button>
      <Button color="light">Button</Button>
      <Button color="primary">Button</Button>
      <Button color="link">Button</Button>
      <Button color="info">Button</Button>
      <Button color="success">Button</Button>
      <Button color="warning">Button</Button>
      <Button color="danger">Button</Button>
      <Button color="black">Button</Button>
      <Button color="white">Button</Button>
      <Button color="text">Button</Button>
      <Button color="ghost">Button</Button>
    </Buttons>
  </Shell>
);

export const WithLightColors = () => (
  <Shell>
    <Buttons>
      <Button color="dark" light>Button</Button>
      <Button color="light" light>Button</Button>
      <Button color="primary" light>Button</Button>
      <Button color="link" light>Button</Button>
      <Button color="info" light>Button</Button>
      <Button color="success" light>Button</Button>
      <Button color="warning" light>Button</Button>
      <Button color="danger" light>Button</Button>
      <Button color="black" light>Button</Button>
      <Button color="white" light>Button</Button>
      <Button color="text" light>Button</Button>
      <Button color="ghost" light>Button</Button>
    </Buttons>
  </Shell>
);

export const WithSizes = () => (
  <Shell>
    <Buttons>
      <Button size="small">Button</Button>
      <Button size="normal">Button</Button>
      <Button size="medium">Button</Button>
      <Button size="large">Button</Button>
    </Buttons>
    <Buttons size="small">
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </Buttons>
    <Buttons size="normal">
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </Buttons>
    <Buttons size="medium">
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </Buttons>
    <Buttons size="large">
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </Buttons>
    <Buttons size="small">
      <Button>Button</Button>
      <Button>Button</Button>
      <Button size="normal">Button</Button>
      <Button>Button</Button>
    </Buttons>
  </Shell>
);

export const WithDisplay = () => (
  <Shell>
    <Buttons>
      <Button size="small" fullwidth>Button</Button>
      <Button size="normal" fullwidth>Button</Button>
      <Button size="medium" fullwidth>Button</Button>
      <Button size="large" fullwidth>Button</Button>
    </Buttons>
  </Shell>
);

export const WithIcons = () => (
  <Shell>
    <Buttons>
      <Button>
        <Icon name="bold" size="small"/>
      </Button>
      <Button>
        <Icon name="italic" size="small"/>
      </Button>
      <Button>
        <Icon name="underline" size="small"/>
      </Button>
    </Buttons>
    <Buttons>
      <Button>
        <Icon name="github"/>
        <Text>GitHub</Text>
      </Button>
      <Button color="primary">
        <Icon collection="fab" name="twitter"/>
        <Text>@jhthms</Text>
      </Button>
      <Button color="success">
        <Icon name="check"/>
        <Text>Save</Text>
      </Button>
      <Button color="danger" outlined>
        <Text>Delete</Text>
        <Icon name="times"/>
      </Button>
    </Buttons>
    <Buttons>
      <Button size="small">
        <Icon collection="fab" name="github"/>
        <Text>GitHub</Text>
      </Button>
      <Button size="normal">
        <Icon collection="fab" name="github"/>
        <Text>GitHub</Text>
      </Button>
      <Button size="medium">
        <Icon collection="fab" name="github"/>
        <Text>GitHub</Text>
      </Button>
      <Button size="large">
        <Icon collection="fab" name="github"/>
        <Text>GitHub</Text>
      </Button>
    </Buttons>
    <Buttons>
      <Button size="small">
        <Icon name="heading" size="small"/>
      </Button>
    </Buttons>
    <Buttons>
      <Button>
        <Icon name="heading" size="small"/>
      </Button>
      <Button>
        <Icon name="heading" scale="lg"/>
      </Button>
    </Buttons>
    <Buttons>
      <Button size="medium">
        <Icon name="heading" size="small"/>
      </Button>
      <Button size="medium">
        <Icon name="heading" scale="lg"/>
      </Button>
      <Button size="medium">
        <Icon name="heading" scale="2x"/>
      </Button>
    </Buttons>
    <Buttons>
      <Button size="large">
        <Icon name="heading" size="small"/>
      </Button>
      <Button size="large">
        <Icon name="heading" scale="lg"/>
      </Button>
      <Button size="large">
        <Icon name="heading" size="medium" scale="2x"/>
      </Button>
    </Buttons>
  </Shell>
);

export const WithGroup = () => (
  <Shell>
    <Field grouped>
      <Control>
        <Button color="link">
          Save changes
        </Button>
      </Control>
      <Control>
        <Button>
          Cancel
        </Button>
      </Control>
      <Control>
        <Button color="danger">
          Delete post
        </Button>
      </Control>
    </Field>
  </Shell>
);

export const WithAddons = () => (
  <Shell>
    <Field addons>
      <Control>
        <Button>
          <Icon name="align-left" size="small"/>
          <Text>Left</Text>
        </Button>
      </Control>
      <Control>
        <Button>
          <Icon name="align-center" size="small"/>
          <Text>Center</Text>
        </Button>
      </Control>
      <Control>
        <Button>
          <Icon name="align-right" size="small"/>
          <Text>Right</Text>
        </Button>
      </Control>
    </Field>
  </Shell>
);

export const WithGroupsAndAddons = () => (
  <Shell>
    <Field addons>
      <Control>
        <Button>
          <Icon name="bold" size="small"/>
          <Text>Bold</Text>
        </Button>
      </Control>
      <Control>
        <Button>
          <Icon name="italic" size="small"/>
          <Text>Italic</Text>
        </Button>
      </Control>
      <Control>
        <Button>
          <Icon name="underline" size="small"/>
          <Text>Underline</Text>
        </Button>
      </Control>
    </Field>
    <Field addons>
      <Control>
        <Button>
          <Icon name="align-left" size="small"/>
          <Text>Left</Text>
        </Button>
      </Control>
      <Control>
        <Button>
          <Icon name="align-center" size="small"/>
          <Text>Center</Text>
        </Button>
      </Control>
      <Control>
        <Button>
          <Icon name="align-right" size="small"/>
          <Text>Right</Text>
        </Button>
      </Control>
    </Field>
  </Shell>
);

export const LookOutlined = () => (
  <Shell>
    <Buttons>
      <Button color="dark" outlined>Button</Button>
      <Button color="light" outlined>Button</Button>
      <Button color="primary" outlined>Button</Button>
      <Button color="link" outlined>Button</Button>
      <Button color="info" outlined>Button</Button>
      <Button color="success" outlined>Button</Button>
      <Button color="warning" outlined>Button</Button>
      <Button color="danger" outlined>Button</Button>
      <Button color="black" outlined>Button</Button>
      <Button color="white" outlined>Button</Button>
      <Button color="text" outlined>Button</Button>
      <Button color="ghost" outlined>Button</Button>
    </Buttons>
  </Shell>
);

export const LookInverted = () => (
  <Shell>
    <Buttons>
      <Button color="dark" inverted>Button</Button>
      <Button color="light" inverted>Button</Button>
      <Button color="primary" inverted>Button</Button>
      <Button color="link" inverted>Button</Button>
      <Button color="info" inverted>Button</Button>
      <Button color="success" inverted>Button</Button>
      <Button color="warning" inverted>Button</Button>
      <Button color="danger" inverted>Button</Button>
      <Button color="black" inverted>Button</Button>
      <Button color="white" inverted>Button</Button>
      <Button color="text" inverted>Button</Button>
      <Button color="ghost" inverted>Button</Button>
    </Buttons>
  </Shell>
);

export const LookInvertedOutlined = () => (
  <Shell>
    <Buttons>
      <Button color="dark" inverted outlined>Button</Button>
      <Button color="light" inverted outlined>Button</Button>
      <Button color="primary" inverted outlined>Button</Button>
      <Button color="link" inverted outlined>Button</Button>
      <Button color="info" inverted outlined>Button</Button>
      <Button color="success" inverted outlined>Button</Button>
      <Button color="warning" inverted outlined>Button</Button>
      <Button color="danger" inverted outlined>Button</Button>
      <Button color="black" inverted outlined>Button</Button>
      <Button color="white" inverted outlined>Button</Button>
      <Button color="text" inverted outlined>Button</Button>
      <Button color="ghost" inverted outlined>Button</Button>
    </Buttons>
  </Shell>
);

export const LookRounded = () => (
  <Shell>
    <Buttons>
      <Button color="dark" rounded>Button</Button>
      <Button color="light" rounded>Button</Button>
      <Button color="primary" rounded>Button</Button>
      <Button color="link" rounded>Button</Button>
      <Button color="info" rounded>Button</Button>
      <Button color="success" rounded>Button</Button>
      <Button color="warning" rounded>Button</Button>
      <Button color="danger" rounded>Button</Button>
      <Button color="black" rounded>Button</Button>
      <Button color="white" rounded>Button</Button>
      <Button color="text" rounded>Button</Button>
      <Button color="ghost" rounded>Button</Button>
    </Buttons>
  </Shell>
);

export const StateHovered = () => (
  <Shell>
    <Buttons>
      <Button color="dark" hovered>Button</Button>
      <Button color="light" hovered>Button</Button>
      <Button color="primary" hovered>Button</Button>
      <Button color="link" hovered>Button</Button>
      <Button color="info" hovered>Button</Button>
      <Button color="success" hovered>Button</Button>
      <Button color="warning" hovered>Button</Button>
      <Button color="danger" hovered>Button</Button>
      <Button color="black" hovered>Button</Button>
      <Button color="white" hovered>Button</Button>
      <Button color="text" hovered>Button</Button>
      <Button color="ghost" hovered>Button</Button>
    </Buttons>
  </Shell>
);

export const StateFocused = () => (
  <Shell>
    <Buttons>
      <Button color="dark" focused>Button</Button>
      <Button color="light" focused>Button</Button>
      <Button color="primary" focused>Button</Button>
      <Button color="link" focused>Button</Button>
      <Button color="info" focused>Button</Button>
      <Button color="success" focused>Button</Button>
      <Button color="warning" focused>Button</Button>
      <Button color="danger" focused>Button</Button>
      <Button color="black" focused>Button</Button>
      <Button color="white" focused>Button</Button>
      <Button color="text" focused>Button</Button>
      <Button color="ghost" focused>Button</Button>
    </Buttons>
  </Shell>
);

export const StateActive = () => (
  <Shell>
    <Buttons>
      <Button color="dark" active>Button</Button>
      <Button color="light" active>Button</Button>
      <Button color="primary" active>Button</Button>
      <Button color="link" active>Button</Button>
      <Button color="info" active>Button</Button>
      <Button color="success" active>Button</Button>
      <Button color="warning" active>Button</Button>
      <Button color="danger" active>Button</Button>
      <Button color="black" active>Button</Button>
      <Button color="white" active>Button</Button>
      <Button color="text" active>Button</Button>
      <Button color="ghost" active>Button</Button>
    </Buttons>
  </Shell>
);

export const StateLoading = () => (
  <Shell>
    <Buttons>
      <Button color="dark" loading>Button</Button>
      <Button color="light" loading>Button</Button>
      <Button color="primary" loading>Button</Button>
      <Button color="link" loading>Button</Button>
      <Button color="info" loading>Button</Button>
      <Button color="success" loading>Button</Button>
      <Button color="warning" loading>Button</Button>
      <Button color="danger" loading>Button</Button>
      <Button color="black" loading>Button</Button>
      <Button color="white" loading>Button</Button>
      <Button color="text" loading>Button</Button>
      <Button color="ghost" loading>Button</Button>
    </Buttons>
  </Shell>
);

export const StateStatic = () => (
  <Shell>
    <Buttons>
      <Button color="dark" static>Button</Button>
      <Button color="light" static>Button</Button>
      <Button color="primary" static>Button</Button>
      <Button color="link" static>Button</Button>
      <Button color="info" static>Button</Button>
      <Button color="success" static>Button</Button>
      <Button color="warning" static>Button</Button>
      <Button color="danger" static>Button</Button>
      <Button color="black" static>Button</Button>
      <Button color="white" static>Button</Button>
      <Button color="text" static>Button</Button>
      <Button color="ghost" static>Button</Button>
    </Buttons>
  </Shell>
);

export const StateDisabled = () => (
  <Shell>
    <Buttons>
      <Button color="dark" disabled>Button</Button>
      <Button color="light" disabled>Button</Button>
      <Button color="primary" disabled>Button</Button>
      <Button color="link" disabled>Button</Button>
      <Button color="info" disabled>Button</Button>
      <Button color="success" disabled>Button</Button>
      <Button color="warning" disabled>Button</Button>
      <Button color="danger" disabled>Button</Button>
      <Button color="black" disabled>Button</Button>
      <Button color="white" disabled>Button</Button>
      <Button color="text" disabled>Button</Button>
      <Button color="ghost" disabled>Button</Button>
    </Buttons>
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
