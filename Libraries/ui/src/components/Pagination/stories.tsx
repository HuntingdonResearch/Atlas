import React, { ReactNode } from 'react';
import Pagination from '../../components/Pagination';
import Column from '../../layouts/Column';
import Columns from '../../layouts/Columns';
import Container from '../../layouts/Container';

export default {
  component: Pagination,
  title: 'Components/Pagination'
};

export const Simple = () => (
  <Shell>
    <Pagination>
      <Pagination.Previous>
        <a>Previous</a>
      </Pagination.Previous>
      <Pagination.Next>
        <a>Next page</a>
      </Pagination.Next>
      <Pagination.List>
        <Pagination.List.Link aria-label="Goto page 1">
          <a>1</a>
        </Pagination.List.Link>
        <Pagination.List.Ellipsis/>
        <Pagination.List.Link aria-label="Goto page 45">
          <a>45</a>
        </Pagination.List.Link>
        <Pagination.List.Link current aria-label="Page 46" aria-current="page">
          <a>46</a>
        </Pagination.List.Link>
        <Pagination.List.Link aria-label="Goto page 47">
          <a>47</a>
        </Pagination.List.Link>
        <Pagination.List.Ellipsis/>
        <Pagination.List.Link aria-label="Goto page 86">
          <a>86</a>
        </Pagination.List.Link>
      </Pagination.List>
    </Pagination>
  </Shell>
);

export const DisabledPreviousLink = () => (
  <Shell>
    <Pagination>
      <Pagination.Previous disabled>
        <a>Previous</a>
      </Pagination.Previous>
      <Pagination.Next>
        <a>Next page</a>
      </Pagination.Next>
      <Pagination.List>
        <Pagination.List.Link aria-label="Goto page 1">
          <a>1</a>
        </Pagination.List.Link>
        <Pagination.List.Ellipsis/>
        <Pagination.List.Link aria-label="Goto page 45">
          <a>45</a>
        </Pagination.List.Link>
        <Pagination.List.Link current aria-label="Page 46" aria-current="page">
          <a>46</a>
        </Pagination.List.Link>
        <Pagination.List.Link aria-label="Goto page 47">
          <a>47</a>
        </Pagination.List.Link>
        <Pagination.List.Ellipsis/>
        <Pagination.List.Link aria-label="Goto page 86">
          <a>86</a>
        </Pagination.List.Link>
      </Pagination.List>
    </Pagination>
  </Shell>
);

export const DisabledNextLink = () => (
  <Shell>
    <Pagination>
      <Pagination.Previous>
        <a>Previous</a>
      </Pagination.Previous>
      <Pagination.Next disabled>
        <a>Next page</a>
      </Pagination.Next>
      <Pagination.List>
        <Pagination.List.Link aria-label="Goto page 1">
          <a>1</a>
        </Pagination.List.Link>
        <Pagination.List.Ellipsis/>
        <Pagination.List.Link aria-label="Goto page 45">
          <a>45</a>
        </Pagination.List.Link>
        <Pagination.List.Link current aria-label="Page 46" aria-current="page">
          <a>46</a>
        </Pagination.List.Link>
        <Pagination.List.Link aria-label="Goto page 47">
          <a>47</a>
        </Pagination.List.Link>
        <Pagination.List.Ellipsis/>
        <Pagination.List.Link aria-label="Goto page 86">
          <a>86</a>
        </Pagination.List.Link>
      </Pagination.List>
    </Pagination>
  </Shell>
);

export const DisabledBothLinks = () => (
  <Shell>
    <Pagination>
      <Pagination.Previous disabled>
        <a>Previous</a>
      </Pagination.Previous>
      <Pagination.Next disabled>
        <a>Next page</a>
      </Pagination.Next>
      <Pagination.List>
        <Pagination.List.Link aria-label="Goto page 1">
          <a>1</a>
        </Pagination.List.Link>
        <Pagination.List.Ellipsis/>
        <Pagination.List.Link aria-label="Goto page 45">
          <a>45</a>
        </Pagination.List.Link>
        <Pagination.List.Link current aria-label="Page 46" aria-current="page">
          <a>46</a>
        </Pagination.List.Link>
        <Pagination.List.Link aria-label="Goto page 47">
          <a>47</a>
        </Pagination.List.Link>
        <Pagination.List.Ellipsis/>
        <Pagination.List.Link aria-label="Goto page 86">
          <a>86</a>
        </Pagination.List.Link>
      </Pagination.List>
    </Pagination>
  </Shell>
);

export const AlignmentLeft = () => (
  <Shell>
    <Pagination alignment="left">
      <Pagination.Previous>
        <a>Previous</a>
      </Pagination.Previous>
      <Pagination.Next>
        <a>Next page</a>
      </Pagination.Next>
      <Pagination.List>
        <Pagination.List.Link aria-label="Goto page 1">
          <a>1</a>
        </Pagination.List.Link>
        <Pagination.List.Ellipsis/>
        <Pagination.List.Link aria-label="Goto page 45">
          <a>45</a>
        </Pagination.List.Link>
        <Pagination.List.Link current aria-label="Page 46" aria-current="page">
          <a>46</a>
        </Pagination.List.Link>
        <Pagination.List.Link aria-label="Goto page 47">
          <a>47</a>
        </Pagination.List.Link>
        <Pagination.List.Ellipsis/>
        <Pagination.List.Link aria-label="Goto page 86">
          <a>86</a>
        </Pagination.List.Link>
      </Pagination.List>
    </Pagination>
  </Shell>
);

export const AlignmentCentered = () => (
  <Shell>
    <Pagination alignment="centered">
      <Pagination.Previous>
        <a>Previous</a>
      </Pagination.Previous>
      <Pagination.Next>
        <a>Next page</a>
      </Pagination.Next>
      <Pagination.List>
        <Pagination.List.Link aria-label="Goto page 1">
          <a>1</a>
        </Pagination.List.Link>
        <Pagination.List.Ellipsis/>
        <Pagination.List.Link aria-label="Goto page 45">
          <a>45</a>
        </Pagination.List.Link>
        <Pagination.List.Link current aria-label="Page 46" aria-current="page">
          <a>46</a>
        </Pagination.List.Link>
        <Pagination.List.Link aria-label="Goto page 47">
          <a>47</a>
        </Pagination.List.Link>
        <Pagination.List.Ellipsis/>
        <Pagination.List.Link aria-label="Goto page 86">
          <a>86</a>
        </Pagination.List.Link>
      </Pagination.List>
    </Pagination>
  </Shell>
);

export const AlignmentRight = () => (
  <Shell>
    <Pagination alignment="right">
      <Pagination.Previous>
        <a>Previous</a>
      </Pagination.Previous>
      <Pagination.Next>
        <a>Next page</a>
      </Pagination.Next>
      <Pagination.List>
        <Pagination.List.Link aria-label="Goto page 1">
          <a>1</a>
        </Pagination.List.Link>
        <Pagination.List.Ellipsis/>
        <Pagination.List.Link aria-label="Goto page 45">
          <a>45</a>
        </Pagination.List.Link>
        <Pagination.List.Link current aria-label="Page 46" aria-current="page">
          <a>46</a>
        </Pagination.List.Link>
        <Pagination.List.Link aria-label="Goto page 47">
          <a>47</a>
        </Pagination.List.Link>
        <Pagination.List.Ellipsis/>
        <Pagination.List.Link aria-label="Goto page 86">
          <a>86</a>
        </Pagination.List.Link>
      </Pagination.List>
    </Pagination>
  </Shell>
);

export const LookRounded = () => (
  <Shell>
    <Pagination rounded>
      <Pagination.Previous>
        <a>Previous</a>
      </Pagination.Previous>
      <Pagination.Next>
        <a>Next page</a>
      </Pagination.Next>
      <Pagination.List>
        <Pagination.List.Link aria-label="Goto page 1">
          <a>1</a>
        </Pagination.List.Link>
        <Pagination.List.Ellipsis/>
        <Pagination.List.Link aria-label="Goto page 45">
          <a>45</a>
        </Pagination.List.Link>
        <Pagination.List.Link current aria-label="Page 46" aria-current="page">
          <a>46</a>
        </Pagination.List.Link>
        <Pagination.List.Link aria-label="Goto page 47">
          <a>47</a>
        </Pagination.List.Link>
        <Pagination.List.Ellipsis/>
        <Pagination.List.Link aria-label="Goto page 86">
          <a>86</a>
        </Pagination.List.Link>
      </Pagination.List>
    </Pagination>
  </Shell>
);

export const SizeSmall = () => (
  <Shell>
    <Pagination size="small">
      <Pagination.Previous>
        <a>Previous</a>
      </Pagination.Previous>
      <Pagination.Next>
        <a>Next page</a>
      </Pagination.Next>
      <Pagination.List>
        <Pagination.List.Link aria-label="Goto page 1">
          <a>1</a>
        </Pagination.List.Link>
        <Pagination.List.Ellipsis/>
        <Pagination.List.Link aria-label="Goto page 45">
          <a>45</a>
        </Pagination.List.Link>
        <Pagination.List.Link current aria-label="Page 46" aria-current="page">
          <a>46</a>
        </Pagination.List.Link>
        <Pagination.List.Link aria-label="Goto page 47">
          <a>47</a>
        </Pagination.List.Link>
        <Pagination.List.Ellipsis/>
        <Pagination.List.Link aria-label="Goto page 86">
          <a>86</a>
        </Pagination.List.Link>
      </Pagination.List>
    </Pagination>
  </Shell>
);

export const SizeNormal = () => (
  <Shell>
    <Pagination size="normal">
      <Pagination.Previous>
        <a>Previous</a>
      </Pagination.Previous>
      <Pagination.Next>
        <a>Next page</a>
      </Pagination.Next>
      <Pagination.List>
        <Pagination.List.Link aria-label="Goto page 1">
          <a>1</a>
        </Pagination.List.Link>
        <Pagination.List.Ellipsis/>
        <Pagination.List.Link aria-label="Goto page 45">
          <a>45</a>
        </Pagination.List.Link>
        <Pagination.List.Link current aria-label="Page 46" aria-current="page">
          <a>46</a>
        </Pagination.List.Link>
        <Pagination.List.Link aria-label="Goto page 47">
          <a>47</a>
        </Pagination.List.Link>
        <Pagination.List.Ellipsis/>
        <Pagination.List.Link aria-label="Goto page 86">
          <a>86</a>
        </Pagination.List.Link>
      </Pagination.List>
    </Pagination>
  </Shell>
);

export const SizeMedium = () => (
  <Shell>
    <Pagination size="medium">
      <Pagination.Previous>
        <a>Previous</a>
      </Pagination.Previous>
      <Pagination.Next>
        <a>Next page</a>
      </Pagination.Next>
      <Pagination.List>
        <Pagination.List.Link aria-label="Goto page 1">
          <a>1</a>
        </Pagination.List.Link>
        <Pagination.List.Ellipsis/>
        <Pagination.List.Link aria-label="Goto page 45">
          <a>45</a>
        </Pagination.List.Link>
        <Pagination.List.Link current aria-label="Page 46" aria-current="page">
          <a>46</a>
        </Pagination.List.Link>
        <Pagination.List.Link aria-label="Goto page 47">
          <a>47</a>
        </Pagination.List.Link>
        <Pagination.List.Ellipsis/>
        <Pagination.List.Link aria-label="Goto page 86">
          <a>86</a>
        </Pagination.List.Link>
      </Pagination.List>
    </Pagination>
  </Shell>
);

export const SizeLarge = () => (
  <Shell fluid>
    <Pagination size="large">
      <Pagination.Previous>
        <a>Previous</a>
      </Pagination.Previous>
      <Pagination.Next>
        <a>Next page</a>
      </Pagination.Next>
      <Pagination.List>
        <Pagination.List.Link aria-label="Goto page 1">
          <a>1</a>
        </Pagination.List.Link>
        <Pagination.List.Ellipsis/>
        <Pagination.List.Link aria-label="Goto page 45">
          <a>45</a>
        </Pagination.List.Link>
        <Pagination.List.Link current aria-label="Page 46" aria-current="page">
          <a>46</a>
        </Pagination.List.Link>
        <Pagination.List.Link aria-label="Goto page 47">
          <a>47</a>
        </Pagination.List.Link>
        <Pagination.List.Ellipsis/>
        <Pagination.List.Link aria-label="Goto page 86">
          <a>86</a>
        </Pagination.List.Link>
      </Pagination.List>
    </Pagination>
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
