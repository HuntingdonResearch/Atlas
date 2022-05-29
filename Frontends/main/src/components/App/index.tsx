import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { UsersFrontend } from '../UsersFrontend';
import { ProductsFrontend } from '../ProductsFrontend';
import { OrdersFrontend } from '../OrdersFrontend';
import { ReviewsFrontend } from '../ReviewsFrontend';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
          </ul>
        </nav>
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
      </div>
    </Router>
  );
}

export default App;
