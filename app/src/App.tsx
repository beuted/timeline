import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
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
import Creations from './Creations/Creations';
import Photographers from './Photographers/Photographers';
import Painters from './Painting/Painters';
import FilmMakers from './FilmMakers/FilmMakers';

const App: React.FC = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(); //TODO

  const keysPressed = useMultiKeyPress();
  const hsrfPressed = areKeysPressed(["s", "d"], keysPressed);
  console.log('hsrfPressed', hsrfPressed)

  const [hideOnScroll, setHideOnScroll] = useState(true)

  var elt = useRef(document.querySelector('.switch-wrapper'));
  useScrollPosition(({ prevPos, currPos }: { prevPos: {x: number, y: number }, currPos: {x: number, y: number } }) => {
    console.log('currPos', currPos.x, currPos.y);
    const isShow = currPos.y > prevPos.y
    if (isShow !== hideOnScroll) setHideOnScroll(isShow)
  }, [hideOnScroll])

  return (
    <div className="App">
      <HashRouter>
        { hideOnScroll ?
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
        </div> : null }

        <AnimatedSwitch
          atEnter={{ translateX: 100 }}
          atLeave={{ translateX: -100 }}
          atActive={{ translateX: 0}}
          mapStyles={(styles: any) => ({
            transform: `translateX(${styles.translateX}%)`,
          })}
          className="switch-wrapper"
        >
          <ScrollToTop>
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

function areKeysPressed(keys: string[] = [], keysPressed: Iterable<string> = []) {
  console.log('test')
  const required = new Set(keys);
  for (var elem of keysPressed) {
    required.delete(elem);
  }
  return required.size === 0;
}

function getScrollPosition({ element, useWindow }: { element?: React.MutableRefObject<any>, useWindow?: boolean }) {
  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}

function useScrollPosition(effect: any, deps: any[], element?: React.MutableRefObject<any>, useWindow?: boolean, wait?: number) {
  console.log('useScrollPosition');
  const position = useRef(getScrollPosition({ useWindow }))

  let throttleTimeout: NodeJS.Timeout | null = null

  const callBack = () => {
    console.log('callback');
    const currPos = getScrollPosition({ element, useWindow })
    effect({ prevPos: position.current, currPos: currPos })
    position.current = currPos
    throttleTimeout = null
  }

  useLayoutEffect(() => {
    console.log('layout effect')
    const handleScroll = () => {
    console.log('handleScroll');

      if (wait) {
        if (throttleTimeout === null) {
          console.log('callback 2');

          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        console.log('callback 1');
        callBack();
      }
    }

    const elt = element ? element.current : window;
    elt.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, deps);
}

export default App;
