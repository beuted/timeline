import React, { useState, useEffect, Suspense } from 'react';
import './App.scss';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
import { Home } from './Home/Home';
import { AnimatedSwitch } from 'react-router-transition';
import ScrollToTop from './Router/ScrollToTop';
import { useKeyPress } from './useKeyPress';
import { useScrollPosition } from './useScrollPosition';
import { ScrollIndicator } from './ScrollIndicator/ScrollIndicator';

const loadCreations = () => import('./Creations/Creations');
const loadPainters = () => import('./Painting/Painters');
const loadPhotographers = () => import('./Photographers/Photographers');
const loadFilmMakers = () => import('./FilmMakers/FilmMakers');
const Creations = React.lazy(loadCreations);
const Painters = React.lazy(loadPainters);
const Photographers = React.lazy(loadPhotographers);
const FilmMakers = React.lazy(loadFilmMakers);

const App: React.FC = () => {

  const [showPrivateMenus, setShowPrivateMenus] = useState(false);
  const [scrollRatio, setScrollRatio] = useState(0);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const [prevPosition, setPrevPosition] = useState<{x: number, y: number}>({ x: 0, y: 0 })

  useEffect(() => {
    // preload other pages
    loadCreations();
    loadPainters();
    loadPhotographers();
    loadFilmMakers();
  }, [])

  const keyAltPressed = useKeyPress('alt');
  const keyOPressed = useKeyPress('o');

  useEffect(() => {
    if (keyAltPressed && keyOPressed) {
      setShowPrivateMenus(true);
    }
  }, [keyAltPressed, keyOPressed, showPrivateMenus])


  const scrollPosition = useScrollPosition();

  useEffect(() => {
    const shouldHide = scrollPosition.y < prevPosition.y
    if (shouldHide !== hideOnScroll && scrollPosition.y !== prevPosition.y) {
      setHideOnScroll(shouldHide);
    }
    setScrollRatio(scrollPosition.y / (-scrollPosition.height + window.innerHeight));

    setPrevPosition(scrollPosition);
  }, [scrollPosition, prevPosition, hideOnScroll])

  return (
    <div className="App">
      <HashRouter>
        <div className={'navigation-wrapper ' + (hideOnScroll ? 'hidden' : '')}>
          <nav className="navigation">
            <ul>
              <NavItem exact to="/">Home</NavItem>
              <NavItem exact to="/creations">Creations</NavItem>
              { showPrivateMenus ? <NavItem exact to="/painters">Painters</NavItem> : null }
              { showPrivateMenus ? <NavItem exact to="/photographers">Photographers</NavItem> : null }
              { showPrivateMenus ? <NavItem exact to="/filmmakers">FilmMakers</NavItem> : null }
            </ul>
          </nav>
        </div>

        <div className={'scroll-indicator-wrapper ' + (scrollRatio < 0.03 ? 'hidden': '')}>
          <ScrollIndicator scrollRatio={scrollRatio}></ScrollIndicator>
        </div>

        <ScrollToTop>
          <AnimatedSwitch
            atEnter={{ translateX: 100 }}
            atLeave={{ translateX: -100 }}
            atActive={{ translateX: 0}}
            mapStyles={(styles: any) => ({
              transform: `translateX(${styles.translateX}%)`,
              overflowY: styles.translateX !== 0 ? 'hidden' : 'initial'
            })}
            className="switch-wrapper"
          >
            <Route path="/creations" component={waitLoaded(Creations)} />
            <Route path="/painters" component={waitLoaded(Painters)} />
            <Route path="/photographers" component={waitLoaded(Photographers)}/>
            <Route path="/filmmakers" component={waitLoaded(FilmMakers)}/>
            <Route path="/">
              <Home></Home>
            </Route>
          </AnimatedSwitch>
        </ScrollToTop>

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
  console.log('waitloaded')
  return (props: TProps) => (
    <Suspense fallback={<span>Loading...</span>}>
      <WrappedComponent {...props} />
    </Suspense>
  );
}

export default App;
