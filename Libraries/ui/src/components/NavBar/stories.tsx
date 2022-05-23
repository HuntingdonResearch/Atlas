import React, { ReactNode } from 'react';
import NavBar from '../../components/NavBar';
import Buttons from '../../elements/Buttons';
import Button from '../../elements/Button';
import Icon from '../../elements/Icon';
import Text from '../../elements/Text';
import Field from '../../forms/Field';
import Control from '../../forms/Control';
import Column from '../../layouts/Column';
import Columns from '../../layouts/Columns';
import Container from '../../layouts/Container';

export default {
  component: NavBar,
  title: 'Components/NavBar'
};

export const Simple = () => (
  <Shell fluid>
    <NavBar>
      <NavBar.Brand>
        <NavBar.Item href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Logo" width="112" height="28"/>
        </NavBar.Item>

        <NavBar.Burger target="basic-example"/>
      </NavBar.Brand>

      <NavBar.Menu name="basic-example">
        <NavBar.Start>
          <NavBar.Item href="#">
            Home
          </NavBar.Item>
          <NavBar.Item href="#">
            Documentation
          </NavBar.Item>
          <NavBar.Item hoverable>
            <NavBar.Link href="#">
              More
            </NavBar.Link>
            <NavBar.Dropdown>
              <NavBar.Item href="#">
                About
              </NavBar.Item>
              <NavBar.Item href="#">
                Jobs
              </NavBar.Item>
              <NavBar.Item>
                Contact
              </NavBar.Item>
              <NavBar.Divider/>
              <NavBar.Item href="#">
                Report an issue
              </NavBar.Item>
            </NavBar.Dropdown>
          </NavBar.Item>
        </NavBar.Start>
        <NavBar.End>
          <NavBar.Item>
            <Buttons>
              <Button color="primary">
                <strong>Sign up</strong>
              </Button>
              <Button color="light">
                Log in
              </Button>
            </Buttons>
          </NavBar.Item>
        </NavBar.End>
      </NavBar.Menu>
    </NavBar>
  </Shell>
);

export const BrandOnly = () => (
  <Shell fluid>
    <NavBar>
      <NavBar.Brand>
        <NavBar.Item href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png"
               alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28"/>
        </NavBar.Item>
        <NavBar.Burger/>
      </NavBar.Brand>
    </NavBar>
  </Shell>
);

export const Transparent = () => (
  <Shell fluid>
    <NavBar transparent>
      <NavBar.Brand>
        <NavBar.Item href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Logo" width="112" height="28"/>
        </NavBar.Item>

        <NavBar.Burger target="basic-example"/>
      </NavBar.Brand>

      <NavBar.Menu name="basic-example">
        <NavBar.Start>
          <NavBar.Item href="#">
            Home
          </NavBar.Item>
          <NavBar.Item href="#">
            Documentation
          </NavBar.Item>
          <NavBar.Item hoverable>
            <NavBar.Link href="#">
              More
            </NavBar.Link>
            <NavBar.Dropdown boxed>
              <NavBar.Item href="#">
                About
              </NavBar.Item>
              <NavBar.Item href="#">
                Jobs
              </NavBar.Item>
              <NavBar.Item>
                Contact
              </NavBar.Item>
              <NavBar.Divider/>
              <NavBar.Item href="#" active>
                Report an issue
              </NavBar.Item>
            </NavBar.Dropdown>
          </NavBar.Item>
        </NavBar.Start>
        <NavBar.End>
          <NavBar.Item>
            <Field grouped>
              <Control>
                <Button>
                  <Icon collection="fab" name="twitter"/>
                  <Text>Tweet</Text>
                </Button>
              </Control>
              <Control>
                <Button color="primary">
                  <Icon name="download"/>
                  <Text>Download</Text>
                </Button>
              </Control>
            </Field>
          </NavBar.Item>
        </NavBar.End>
      </NavBar.Menu>
    </NavBar>
  </Shell>
);

export const ColorDark = () => (
  <Shell fluid>
    <NavBar color="dark">
      <NavBar.Brand>
        <NavBar.Item href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Logo" width="112" height="28"/>
        </NavBar.Item>

        <NavBar.Burger target="basic-example"/>
      </NavBar.Brand>

      <NavBar.Menu name="basic-example">
        <NavBar.Start>
          <NavBar.Item href="#">
            Home
          </NavBar.Item>
          <NavBar.Item href="#">
            Documentation
          </NavBar.Item>
          <NavBar.Item hoverable>
            <NavBar.Link href="#">
              More
            </NavBar.Link>
            <NavBar.Dropdown boxed>
              <NavBar.Item href="#">
                About
              </NavBar.Item>
              <NavBar.Item href="#">
                Jobs
              </NavBar.Item>
              <NavBar.Item>
                Contact
              </NavBar.Item>
              <NavBar.Divider/>
              <NavBar.Item href="#" active>
                Report an issue
              </NavBar.Item>
            </NavBar.Dropdown>
          </NavBar.Item>
        </NavBar.Start>
        <NavBar.End>
          <NavBar.Item>
            <Field grouped>
              <Control>
                <Button>
                  <Icon collection="fab" name="twitter"/>
                  <Text>Tweet</Text>
                </Button>
              </Control>
              <Control>
                <Button color="primary">
                  <Icon name="download"/>
                  <Text>Download</Text>
                </Button>
              </Control>
            </Field>
          </NavBar.Item>
        </NavBar.End>
      </NavBar.Menu>
    </NavBar>
  </Shell>
);

export const ColorLight = () => (
  <Shell fluid>
    <NavBar color="light">
      <NavBar.Brand>
        <NavBar.Item href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Logo" width="112" height="28"/>
        </NavBar.Item>

        <NavBar.Burger target="basic-example"/>
      </NavBar.Brand>

      <NavBar.Menu name="basic-example">
        <NavBar.Start>
          <NavBar.Item href="#">
            Home
          </NavBar.Item>
          <NavBar.Item href="#">
            Documentation
          </NavBar.Item>
          <NavBar.Item hoverable>
            <NavBar.Link href="#">
              More
            </NavBar.Link>
            <NavBar.Dropdown boxed>
              <NavBar.Item href="#">
                About
              </NavBar.Item>
              <NavBar.Item href="#">
                Jobs
              </NavBar.Item>
              <NavBar.Item>
                Contact
              </NavBar.Item>
              <NavBar.Divider/>
              <NavBar.Item href="#" active>
                Report an issue
              </NavBar.Item>
            </NavBar.Dropdown>
          </NavBar.Item>
        </NavBar.Start>
        <NavBar.End>
          <NavBar.Item>
            <Field grouped>
              <Control>
                <Button>
                  <Icon collection="fab" name="twitter"/>
                  <Text>Tweet</Text>
                </Button>
              </Control>
              <Control>
                <Button color="primary">
                  <Icon name="download"/>
                  <Text>Download</Text>
                </Button>
              </Control>
            </Field>
          </NavBar.Item>
        </NavBar.End>
      </NavBar.Menu>
    </NavBar>
  </Shell>
);

export const ColorPrimary = () => (
  <Shell fluid>
    <NavBar color="primary">
      <NavBar.Brand>
        <NavBar.Item href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Logo" width="112" height="28"/>
        </NavBar.Item>

        <NavBar.Burger target="basic-example"/>
      </NavBar.Brand>

      <NavBar.Menu name="basic-example">
        <NavBar.Start>
          <NavBar.Item href="#">
            Home
          </NavBar.Item>
          <NavBar.Item href="#">
            Documentation
          </NavBar.Item>
          <NavBar.Item hoverable>
            <NavBar.Link href="#">
              More
            </NavBar.Link>
            <NavBar.Dropdown boxed>
              <NavBar.Item href="#">
                About
              </NavBar.Item>
              <NavBar.Item href="#">
                Jobs
              </NavBar.Item>
              <NavBar.Item>
                Contact
              </NavBar.Item>
              <NavBar.Divider/>
              <NavBar.Item href="#" active>
                Report an issue
              </NavBar.Item>
            </NavBar.Dropdown>
          </NavBar.Item>
        </NavBar.Start>
        <NavBar.End>
          <NavBar.Item>
            <Field grouped>
              <Control>
                <Button>
                  <Icon collection="fab" name="twitter"/>
                  <Text>Tweet</Text>
                </Button>
              </Control>
              <Control>
                <Button color="primary">
                  <Icon name="download"/>
                  <Text>Download</Text>
                </Button>
              </Control>
            </Field>
          </NavBar.Item>
        </NavBar.End>
      </NavBar.Menu>
    </NavBar>
  </Shell>
);

export const ColorLink = () => (
  <Shell fluid>
    <NavBar color="link">
      <NavBar.Brand>
        <NavBar.Item href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Logo" width="112" height="28"/>
        </NavBar.Item>

        <NavBar.Burger target="basic-example"/>
      </NavBar.Brand>

      <NavBar.Menu name="basic-example">
        <NavBar.Start>
          <NavBar.Item href="#">
            Home
          </NavBar.Item>
          <NavBar.Item href="#">
            Documentation
          </NavBar.Item>
          <NavBar.Item hoverable>
            <NavBar.Link href="#">
              More
            </NavBar.Link>
            <NavBar.Dropdown boxed>
              <NavBar.Item href="#">
                About
              </NavBar.Item>
              <NavBar.Item href="#">
                Jobs
              </NavBar.Item>
              <NavBar.Item>
                Contact
              </NavBar.Item>
              <NavBar.Divider/>
              <NavBar.Item href="#" active>
                Report an issue
              </NavBar.Item>
            </NavBar.Dropdown>
          </NavBar.Item>
        </NavBar.Start>
        <NavBar.End>
          <NavBar.Item>
            <Field grouped>
              <Control>
                <Button>
                  <Icon collection="fab" name="twitter"/>
                  <Text>Tweet</Text>
                </Button>
              </Control>
              <Control>
                <Button color="primary">
                  <Icon name="download"/>
                  <Text>Download</Text>
                </Button>
              </Control>
            </Field>
          </NavBar.Item>
        </NavBar.End>
      </NavBar.Menu>
    </NavBar>
  </Shell>
);

export const ColorInfo = () => (
  <Shell fluid>
    <NavBar color="info">
      <NavBar.Brand>
        <NavBar.Item href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Logo" width="112" height="28"/>
        </NavBar.Item>

        <NavBar.Burger target="basic-example"/>
      </NavBar.Brand>

      <NavBar.Menu name="basic-example">
        <NavBar.Start>
          <NavBar.Item href="#">
            Home
          </NavBar.Item>
          <NavBar.Item href="#">
            Documentation
          </NavBar.Item>
          <NavBar.Item hoverable>
            <NavBar.Link href="#">
              More
            </NavBar.Link>
            <NavBar.Dropdown boxed>
              <NavBar.Item href="#">
                About
              </NavBar.Item>
              <NavBar.Item href="#">
                Jobs
              </NavBar.Item>
              <NavBar.Item>
                Contact
              </NavBar.Item>
              <NavBar.Divider/>
              <NavBar.Item href="#" active>
                Report an issue
              </NavBar.Item>
            </NavBar.Dropdown>
          </NavBar.Item>
        </NavBar.Start>
        <NavBar.End>
          <NavBar.Item>
            <Field grouped>
              <Control>
                <Button>
                  <Icon collection="fab" name="twitter"/>
                  <Text>Tweet</Text>
                </Button>
              </Control>
              <Control>
                <Button color="primary">
                  <Icon name="download"/>
                  <Text>Download</Text>
                </Button>
              </Control>
            </Field>
          </NavBar.Item>
        </NavBar.End>
      </NavBar.Menu>
    </NavBar>
  </Shell>
);

export const ColorSuccess = () => (
  <Shell fluid>
    <NavBar color="success">
      <NavBar.Brand>
        <NavBar.Item href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Logo" width="112" height="28"/>
        </NavBar.Item>

        <NavBar.Burger target="basic-example"/>
      </NavBar.Brand>

      <NavBar.Menu name="basic-example">
        <NavBar.Start>
          <NavBar.Item href="#">
            Home
          </NavBar.Item>
          <NavBar.Item href="#">
            Documentation
          </NavBar.Item>
          <NavBar.Item hoverable>
            <NavBar.Link href="#">
              More
            </NavBar.Link>
            <NavBar.Dropdown boxed>
              <NavBar.Item href="#">
                About
              </NavBar.Item>
              <NavBar.Item href="#">
                Jobs
              </NavBar.Item>
              <NavBar.Item>
                Contact
              </NavBar.Item>
              <NavBar.Divider/>
              <NavBar.Item href="#" active>
                Report an issue
              </NavBar.Item>
            </NavBar.Dropdown>
          </NavBar.Item>
        </NavBar.Start>
        <NavBar.End>
          <NavBar.Item>
            <Field grouped>
              <Control>
                <Button>
                  <Icon collection="fab" name="twitter"/>
                  <Text>Tweet</Text>
                </Button>
              </Control>
              <Control>
                <Button color="primary">
                  <Icon name="download"/>
                  <Text>Download</Text>
                </Button>
              </Control>
            </Field>
          </NavBar.Item>
        </NavBar.End>
      </NavBar.Menu>
    </NavBar>
  </Shell>
);

export const ColorWarning = () => (
  <Shell fluid>
    <NavBar color="warning">
      <NavBar.Brand>
        <NavBar.Item href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Logo" width="112" height="28"/>
        </NavBar.Item>

        <NavBar.Burger target="basic-example"/>
      </NavBar.Brand>

      <NavBar.Menu name="basic-example">
        <NavBar.Start>
          <NavBar.Item href="#">
            Home
          </NavBar.Item>
          <NavBar.Item href="#">
            Documentation
          </NavBar.Item>
          <NavBar.Item hoverable>
            <NavBar.Link href="#">
              More
            </NavBar.Link>
            <NavBar.Dropdown boxed>
              <NavBar.Item href="#">
                About
              </NavBar.Item>
              <NavBar.Item href="#">
                Jobs
              </NavBar.Item>
              <NavBar.Item>
                Contact
              </NavBar.Item>
              <NavBar.Divider/>
              <NavBar.Item href="#" active>
                Report an issue
              </NavBar.Item>
            </NavBar.Dropdown>
          </NavBar.Item>
        </NavBar.Start>
        <NavBar.End>
          <NavBar.Item>
            <Field grouped>
              <Control>
                <Button>
                  <Icon collection="fab" name="twitter"/>
                  <Text>Tweet</Text>
                </Button>
              </Control>
              <Control>
                <Button color="primary">
                  <Icon name="download"/>
                  <Text>Download</Text>
                </Button>
              </Control>
            </Field>
          </NavBar.Item>
        </NavBar.End>
      </NavBar.Menu>
    </NavBar>
  </Shell>
);

export const ColorDanger = () => (
  <Shell fluid>
    <NavBar color="danger">
      <NavBar.Brand>
        <NavBar.Item href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Logo" width="112" height="28"/>
        </NavBar.Item>

        <NavBar.Burger target="basic-example"/>
      </NavBar.Brand>

      <NavBar.Menu name="basic-example">
        <NavBar.Start>
          <NavBar.Item href="#">
            Home
          </NavBar.Item>
          <NavBar.Item href="#">
            Documentation
          </NavBar.Item>
          <NavBar.Item hoverable>
            <NavBar.Link href="#">
              More
            </NavBar.Link>
            <NavBar.Dropdown boxed>
              <NavBar.Item href="#">
                About
              </NavBar.Item>
              <NavBar.Item href="#">
                Jobs
              </NavBar.Item>
              <NavBar.Item>
                Contact
              </NavBar.Item>
              <NavBar.Divider/>
              <NavBar.Item href="#" active>
                Report an issue
              </NavBar.Item>
            </NavBar.Dropdown>
          </NavBar.Item>
        </NavBar.Start>
        <NavBar.End>
          <NavBar.Item>
            <Field grouped>
              <Control>
                <Button>
                  <Icon collection="fab" name="twitter"/>
                  <Text>Tweet</Text>
                </Button>
              </Control>
              <Control>
                <Button color="primary">
                  <Icon name="download"/>
                  <Text>Download</Text>
                </Button>
              </Control>
            </Field>
          </NavBar.Item>
        </NavBar.End>
      </NavBar.Menu>
    </NavBar>
  </Shell>
);

export const ColorBlack = () => (
  <Shell fluid>
    <NavBar color="black">
      <NavBar.Brand>
        <NavBar.Item href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Logo" width="112" height="28"/>
        </NavBar.Item>

        <NavBar.Burger target="basic-example"/>
      </NavBar.Brand>

      <NavBar.Menu name="basic-example">
        <NavBar.Start>
          <NavBar.Item href="#">
            Home
          </NavBar.Item>
          <NavBar.Item href="#">
            Documentation
          </NavBar.Item>
          <NavBar.Item hoverable>
            <NavBar.Link href="#">
              More
            </NavBar.Link>
            <NavBar.Dropdown boxed>
              <NavBar.Item href="#">
                About
              </NavBar.Item>
              <NavBar.Item href="#">
                Jobs
              </NavBar.Item>
              <NavBar.Item>
                Contact
              </NavBar.Item>
              <NavBar.Divider/>
              <NavBar.Item href="#" active>
                Report an issue
              </NavBar.Item>
            </NavBar.Dropdown>
          </NavBar.Item>
        </NavBar.Start>
        <NavBar.End>
          <NavBar.Item>
            <Field grouped>
              <Control>
                <Button>
                  <Icon collection="fab" name="twitter"/>
                  <Text>Tweet</Text>
                </Button>
              </Control>
              <Control>
                <Button color="primary">
                  <Icon name="download"/>
                  <Text>Download</Text>
                </Button>
              </Control>
            </Field>
          </NavBar.Item>
        </NavBar.End>
      </NavBar.Menu>
    </NavBar>
  </Shell>
);

export const ColorWhite = () => (
  <Shell fluid>
    <NavBar color="white">
      <NavBar.Brand>
        <NavBar.Item href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Logo" width="112" height="28"/>
        </NavBar.Item>

        <NavBar.Burger target="basic-example"/>
      </NavBar.Brand>

      <NavBar.Menu name="basic-example">
        <NavBar.Start>
          <NavBar.Item href="#">
            Home
          </NavBar.Item>
          <NavBar.Item href="#">
            Documentation
          </NavBar.Item>
          <NavBar.Item hoverable>
            <NavBar.Link href="#">
              More
            </NavBar.Link>
            <NavBar.Dropdown boxed>
              <NavBar.Item href="#">
                About
              </NavBar.Item>
              <NavBar.Item href="#">
                Jobs
              </NavBar.Item>
              <NavBar.Item>
                Contact
              </NavBar.Item>
              <NavBar.Divider/>
              <NavBar.Item href="#" active>
                Report an issue
              </NavBar.Item>
            </NavBar.Dropdown>
          </NavBar.Item>
        </NavBar.Start>
        <NavBar.End>
          <NavBar.Item>
            <Field grouped>
              <Control>
                <Button>
                  <Icon collection="fab" name="twitter"/>
                  <Text>Tweet</Text>
                </Button>
              </Control>
              <Control>
                <Button color="primary">
                  <Icon name="download"/>
                  <Text>Download</Text>
                </Button>
              </Control>
            </Field>
          </NavBar.Item>
        </NavBar.End>
      </NavBar.Menu>
    </NavBar>
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
