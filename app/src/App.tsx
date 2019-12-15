import React from 'react';
import './App.css';
import { Catalog } from './Catalog';
import { Painters } from './Painting/Painters';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { Home } from './Home/Home';
import { Photographers } from './Photographers/Photographers';
import { FilmMakers } from './FilmMakers/FilmMakers';

const App: React.FC = () => {
  Catalog.painters.sort((x, y) => x.lifePeriod.start.getTime() - y.lifePeriod.start.getTime())
  return (
    <div className="App">
      <Router>

        <nav className="navigation">
          <ul>
            <li>
              <NavLink exact activeClassName="selected" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/painters">Painters</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/photographers">Photographers</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/filmmakers">FilmMakers</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/painters">
            <Painters></Painters>
          </Route>
          <Route path="/photographers">
            <Photographers></Photographers>
          </Route>
          <Route path="/filmmakers">
            <FilmMakers></FilmMakers>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
