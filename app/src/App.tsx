import React, { useState, useRef, useLayoutEffect, useEffect, Suspense } from 'react';
import './App.scss';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
import { Home } from './Home/Home';
import { AnimatedSwitch } from 'react-router-transition';
import ScrollToTop from './Router/ScrollToTop';
import useMultiKeyPress from './useMultiKeyPress';

const loadCreations = () => import('./Creations/Creations');
const loadPainters = () => import('./Painting/Painters');
const loadPhotographers = () => import('./Photographers/Photographers');
const loadFilmMakers = () => import('./FilmMakers/FilmMakers');
const Creations = React.lazy(loadCreations);
const Painters = React.lazy(loadPainters);
const Photographers = React.lazy(loadPhotographers);
const FilmMakers = React.lazy(loadFilmMakers);

const App: React.FC = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(); //TODO

  useEffect(() => {
    // preload other pages
    loadCreations();
    loadPainters();
    loadPhotographers();
    loadFilmMakers();
  }, [])

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
            <Route path="/creations" component={waitLoaded(Creations)} />
            <Route path="/painters" component={waitLoaded(Painters)} />
            <Route path="/photographers" component={waitLoaded(Photographers)} />
            <Route path="/filmmakers" component={waitLoaded(FilmMakers)} />
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

export function waitLoaded<TProps>(WrappedComponent: React.ComponentType<TProps>): React.ComponentType<TProps> {
  return (props: TProps) => (
    <Suspense fallback={<span>Loading...</span>}>
      <WrappedComponent {...props} />
    </Suspense>
  );
}

export default App;
