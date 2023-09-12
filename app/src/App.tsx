import React, { useState, useEffect, Suspense, ReactNode } from 'react';
import './App.scss';
import {
  Route,
  Routes,
  Link,
  BrowserRouter,
  useLocation
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { Home } from './Home/Home';
import { AnimatedRoutes } from 'react-router-transition';
import ScrollToTop from './Router/ScrollToTop';
import { useKeyPress } from './useKeyPress';
import { useScrollPosition } from './useScrollPosition';
import { ScrollIndicator } from './ScrollIndicator/ScrollIndicator';
import { QuizzPage } from './Quizz/QuizzPage';
import Maths from './Maths/Maths';
import Writers from './Writers/Writers';
import SocioPolitique from './SocioPolitique/SocioPolitique';
import Economy from './Economy/Economy';
import History from './History/History';
import Departements from './Geographie/Departements/Departements';
import Villes from './Geographie/Villes/Villes';
import Regions from './Geographie/Regions/Regions';
import Fleuves from './Geographie/Fleuves/Fleuves';

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
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrollRatio, setScrollRatio] = useState(0);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const [prevPosition, setPrevPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 })

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

  const location = useLocation();

  return (
    <div className="App">
      <div className={"hamburger-button" + (showMobileMenu ? ' active' : '')} onClick={() => { setShowMobileMenu(!showMobileMenu) }}>|||</div>
      <div className={'navigation-wrapper small' + (hideOnScroll ? ' hidden' : '') + (showMobileMenu ? "" : " hidden-mobile")}>
        <nav className={"navigation small"} >
          <ul>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/creations">Creations</NavItem>
            {showPrivateMenus ? <NavItem to="/painters">Painters</NavItem> : null}
            {showPrivateMenus ? <NavItem to="/photographers">Photographers</NavItem> : null}
            {showPrivateMenus ? <NavItem to="/filmmakers">FilmMakers</NavItem> : null}
            {showPrivateMenus ? <NavItem to="/maths">Maths</NavItem> : null}
            {showPrivateMenus ? <NavItem to="/writers">Writers</NavItem> : null}
            {showPrivateMenus ? <NavItem to="/socio-politique">Socio-Politique</NavItem> : null}
            {showPrivateMenus ? <NavItem to="/history">History</NavItem> : null}
            {showPrivateMenus ? <NavItem to="/economy">Economy</NavItem> : null}
            {showPrivateMenus ? <NavItem to="/villes">Villes</NavItem> : null}
            {showPrivateMenus ? <NavItem to="/departements">Départements</NavItem> : null}
            {showPrivateMenus ? <NavItem to="/regions">Régions</NavItem> : null}
            {showPrivateMenus ? <NavItem to="/fleuves">Fleuves</NavItem> : null}
          </ul>
        </nav>
      </div>

      <div className={'scroll-indicator-wrapper ' + (scrollRatio < 0.03 ? 'hidden' : '')}>
        <ScrollIndicator scrollRatio={scrollRatio}></ScrollIndicator>
      </div>

      <ScrollToTop>
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Routes>
              <Route path="/creations" element={<Creations />} />
              <Route path="/painters" element={<Painters />} />
              <Route path="/photographers" element={<Photographers />} />
              <Route path="/filmmakers" element={<FilmMakers />} />
              <Route path="/quizz/:category" element={<QuizzPage />} />
              <Route path="/maths" element={<Maths />} />
              <Route path="/writers" element={<Writers />} />
              <Route path="/socio-politique" element={<SocioPolitique />} />
              <Route path="/economy" element={<Economy />} />
              <Route path="/history" element={<History />} />
              <Route path="/villes" element={<Villes />} />
              <Route path="/regions" element={<Regions />} />
              <Route path="/fleuves" element={<Fleuves />} />
              <Route path="/departements" element={<Departements />} />
              <Route path="/" element={<Home setShowPrivateMenus={setShowPrivateMenus}></Home>} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </ScrollToTop>
    </div>
  );
}

function NavItem({ children, to }: { children: any, to: string }) {
  return (
    <li className={false ? "selected" : undefined}>
      <Link to={to}
      >{children}</Link>
    </li>
  )
}

export function waitLoaded<TProps>(WrappedComponent: React.ComponentType<TProps>) {
  return (props: TProps & { children?: ReactNode; }) => (
    <Suspense fallback={<span>Loading...</span>}>
      <WrappedComponent {...props} />
    </Suspense>
  );
}

export default App;
