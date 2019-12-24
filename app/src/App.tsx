import React, { useState, useRef, useLayoutEffect } from 'react';
import './App.scss';
import { Painters } from './Painting/Painters';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
import { Home } from './Home/Home';
import { Photographers } from './Photographers/Photographers';
import { FilmMakers } from './FilmMakers/FilmMakers';
import { AnimatedSwitch } from 'react-router-transition';
import ScrollToTop from './Router/ScrollToTop';
import { Creations } from './Creations/Creations';
import useMultiKeyPress from './useMultiKeyPress';

const App: React.FC = () => {
  const scrollContainerRef = React.createRef<HTMLDivElement>(); //TODO

  return (
    <div className="App">
      <HashRouter>
        <div className="navigation-wrapper">
          <nav className="navigation">
            <ul>
              <NavItem exact to="/">Home</NavItem>
              <NavItem exact to="/creations">Creations</NavItem>
              <NavItem exact to="/painters">Painters</NavItem>
              <NavItem exact to="/photographers">Photographers</NavItem>
              <NavItem exact to="/filmmakers">FilmMakers</NavItem>
            </ul>
          </nav>
        </div>

        <AnimatedSwitch
          atEnter={{ translateX: 100 }}
          atLeave={{ translateX: -100 }}
          atActive={{ translateX: 0}}
          mapStyles={(styles: any) => ({
            transform: `translateX(${styles.translateX}%)`,
          })}
          className="switch-wrapper"
          ref={scrollContainerRef}
        >
          <ScrollToTop scrollContainerRef={scrollContainerRef}>
            <Route path="/creations">
              <Creations></Creations>
            </Route>
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
          </ScrollToTop>
        </AnimatedSwitch>

      </HashRouter>
    </div>
  );
}

function NavItem({children, to, exact}: {children: any, to: string, exact: boolean}) {
  return (
      <Route path={to} exact={exact} children={({match}) => (
          <li className={match ? "selected" : undefined}>
              <Link to={to}>{children}</Link>
          </li>
      )}/>
  )
}

export default App;
