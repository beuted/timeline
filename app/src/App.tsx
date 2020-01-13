import React, { useState, useEffect, Suspense } from 'react';
import './App.scss';
import {
  Route,
  Link,
  BrowserRouter
} from 'react-router-dom';
import { Home } from './Home/Home';
import { AnimatedSwitch } from 'react-router-transition';
import ScrollToTop from './Router/ScrollToTop';
import { useKeyPress } from './useKeyPress';
import { useScrollPosition } from './useScrollPosition';
import { ScrollIndicator } from './ScrollIndicator/ScrollIndicator';
import { QuizzPage } from './Quizz/QuizzPage';

const loadCreations = () => import('./Creations/Creations');
const loadPainters = () => import('./Painting/Painters');
const loadPhotographers = () => import('./Photographers/Photographers');
const loadFilmMakers = () => import('./FilmMakers/FilmMakers');
const Creations = waitLoaded(React.lazy(loadCreations));
const Painters = waitLoaded(React.lazy(loadPainters));
const Photographers = waitLoaded(React.lazy(loadPhotographers));
const FilmMakers = waitLoaded(React.lazy(loadFilmMakers));

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
      <BrowserRouter>
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
            <Route path="/creations" component={Creations} />
            <Route path="/painters" component={Painters} />
            <Route path="/photographers" component={Photographers}/>
            <Route path="/filmmakers" component={FilmMakers}/>
            <Route path="/quizz/:category" component={QuizzPage}/>
            <Route path="/">
              <Home></Home>
            </Route>
          </AnimatedSwitch>
        </ScrollToTop>

      </BrowserRouter>
    </div>
  );
}

function NavItem({children, to, exact}: {children: any, to: string, exact: boolean}) {
  return (
      <Route path={to} exact={exact} children={({match}) => (
          <li className={match ? "selected" : undefined}>
              <Link to={to}
              >{children}</Link>
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
