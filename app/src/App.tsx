import React, { useState, useEffect } from "react";
import "./App.scss";
import { useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ScrollToTop from "./components/Router/ScrollToTop";
import { ScrollIndicator } from "./components/ScrollIndicator/ScrollIndicator";
import { Navigation } from "./components/Navigation";
import { AppRoutes } from "./components/AppRoutes";
import { preloadComponents } from "./config/routes";
import { useScrollBehavior } from "./hooks/useScrollBehavior";
import { usePrivateMenus } from "./hooks/usePrivateMenus";

const App: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { scrollRatio, hideOnScroll } = useScrollBehavior();
  const { showPrivateMenus, setShowPrivateMenus } = usePrivateMenus();
  const location = useLocation();

  useEffect(() => {
    // Preload lazy-loaded components for better performance
    preloadComponents();
  }, []);

  const handleToggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="App">
      <Navigation
        showPrivateMenus={showPrivateMenus}
        showMobileMenu={showMobileMenu}
        hideOnScroll={hideOnScroll}
        onToggleMobileMenu={handleToggleMobileMenu}
      />

      <div
        className={`scroll-indicator-wrapper ${
          scrollRatio < 0.03 ? "hidden" : ""
        }`}
      >
        <ScrollIndicator scrollRatio={scrollRatio} />
      </div>

      <ScrollToTop>
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <AppRoutes setShowPrivateMenus={setShowPrivateMenus} />
          </CSSTransition>
        </TransitionGroup>
      </ScrollToTop>
    </div>
  );
};

export default App;
