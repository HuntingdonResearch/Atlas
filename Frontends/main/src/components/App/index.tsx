import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Buttons, Button, NavBar } from '@atlas/ui-library';
import { UsersFrontend } from '../UsersFrontend';
import { ProductsFrontend } from '../ProductsFrontend';
import { OrdersFrontend } from '../OrdersFrontend';
import { ReviewsFrontend } from '../ReviewsFrontend';

function App() {
  return (
    <Router>
      <NavBar>
        <NavBar.Brand>
          <NavBar.Item>
            <Link to="/">
              <img src="/logo.png" alt="Logo" width="112" height="28"/>
            </Link>
          </NavBar.Item>
          <NavBar.Burger target="basic-example"/>
        </NavBar.Brand>
        <NavBar.Menu name="basic-example">
          <NavBar.Start>
            <NavBar.Item>
              <Link to="/">Home</Link>
            </NavBar.Item>
            <NavBar.Item>
              <Link to="/users">Users</Link>
            </NavBar.Item>
            <NavBar.Item>
              <Link to="/products">Products</Link>
            </NavBar.Item>
            <NavBar.Item>
              <Link to="/orders">Orders</Link>
            </NavBar.Item>
            <NavBar.Item>
              <Link to="/reviews">Reviews</Link>
            </NavBar.Item>
          </NavBar.Start>
          <NavBar.End>
            <NavBar.Item>
              <Buttons>
                <Button color="primary">
                  Sign up
                </Button>
                <Button color="light">
                  Log in
                </Button>
              </Buttons>
            </NavBar.Item>
          </NavBar.End>
        </NavBar.Menu>
      </NavBar>
      <Switch>
        <Route path="/users">
          <UsersFrontend/>
        </Route>
        <Route path="/products">
          <ProductsFrontend/>
        </Route>
        <Route path="/orders">
          <OrdersFrontend/>
        </Route>
        <Route path="/reviews">
          <ReviewsFrontend/>
        </Route>
        <Route path="/">
          <div></div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
