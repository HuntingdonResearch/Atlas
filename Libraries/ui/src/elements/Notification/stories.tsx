import React, { ReactNode } from 'react';
import Content from '../../elements/Content';
import Notification from '../../elements/Notification';
import Column from '../../layouts/Column';
import Columns from '../../layouts/Columns';
import Container from '../../layouts/Container';

export default {
  component: Notification,
  title: 'Elements/Notification'
};

export const Simple = () => (
  <Shell>
    <Notification onDismiss={() => {}}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
    </Notification>
  </Shell>
);

export const ColorDark = () => (
  <Shell>
    <Notification color="dark" onDismiss={() => {}}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
    </Notification>
  </Shell>
);

export const ColorLight = () => (
  <Shell>
    <Notification color="light" onDismiss={() => {}}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
    </Notification>
  </Shell>
);

export const ColorPrimary = () => (
  <Shell>
    <Notification color="primary" onDismiss={() => {}}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
    </Notification>
  </Shell>
);

export const ColorLink = () => (
  <Shell>
    <Notification color="link" onDismiss={() => {}}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
    </Notification>
  </Shell>
);

export const ColorInfo = () => (
  <Shell>
    <Notification color="info" onDismiss={() => {}}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
    </Notification>
  </Shell>
);

export const ColorSuccess = () => (
  <Shell>
    <Notification color="success" onDismiss={() => {}}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
    </Notification>
  </Shell>
);

export const ColorWarning = () => (
  <Shell>
    <Notification color="warning" onDismiss={() => {}}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
    </Notification>
  </Shell>
);

export const ColorDanger = () => (
  <Shell>
    <Notification color="danger" onDismiss={() => {}}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
    </Notification>
  </Shell>
);

export const ColorBlack = () => (
  <Shell>
    <Notification color="black" onDismiss={() => {}}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
    </Notification>
  </Shell>
);

export const ColorWhite = () => (
  <Shell>
    <Notification color="white" onDismiss={() => {}}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
    </Notification>
  </Shell>
);

export const ColorDarkLight = () => (
  <Shell>
    <Notification color="dark" light onDismiss={() => {}}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
    </Notification>
  </Shell>
);

export const ColorLightLight = () => (
  <Shell>
    <Notification color="light" light onDismiss={() => {}}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
    </Notification>
  </Shell>
);

export const ColorPrimaryLight = () => (
  <Shell>
    <Notification color="primary" light onDismiss={() => {}}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
    </Notification>
  </Shell>
);

export const ColorLinkLight = () => (
  <Shell>
    <Notification color="link" light onDismiss={() => {}}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
    </Notification>
  </Shell>
);

export const ColorInfoLight = () => (
  <Shell>
    <Notification color="info" light onDismiss={() => {}}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
    </Notification>
  </Shell>
);

export const ColorSuccessLight = () => (
  <Shell>
    <Notification color="success" light onDismiss={() => {}}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
    </Notification>
  </Shell>
);

export const ColorWarningLight = () => (
  <Shell>
    <Notification color="warning" light onDismiss={() => {}}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
    </Notification>
  </Shell>
);

export const ColorDangerLight = () => (
  <Shell>
    <Notification color="danger" light onDismiss={() => {}}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
    </Notification>
  </Shell>
);

export const ColorBlackLight = () => (
  <Shell>
    <Notification color="black" light onDismiss={() => {}}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
    </Notification>
  </Shell>
);

export const ColorWhiteLight = () => (
  <Shell>
    <Notification color="white" light onDismiss={() => {}}>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
    </Notification>
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
