import React from "react";
import { Link } from "react-router-dom";
import { getNavigationItems } from "../config/routes";

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  isSelected?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({
  children,
  to,
  isSelected = false,
}) => {
  return (
    <li className={isSelected ? "selected" : undefined}>
      <Link to={to}>{children}</Link>
    </li>
  );
};

interface NavigationProps {
  showPrivateMenus: boolean;
  showMobileMenu: boolean;
  hideOnScroll: boolean;
  onToggleMobileMenu: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  showPrivateMenus,
  showMobileMenu,
  hideOnScroll,
  onToggleMobileMenu,
}) => {
  const navigationClasses = [
    "navigation-wrapper small",
    hideOnScroll ? "hidden" : "",
    showMobileMenu ? "" : "hidden-mobile",
  ]
    .filter(Boolean)
    .join(" ");

  const hamburgerClasses = ["hamburger-button", showMobileMenu ? "active" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <div className={hamburgerClasses} onClick={onToggleMobileMenu}>
        |||
      </div>
      <div className={navigationClasses}>
        <nav className="navigation small">
          <ul>
            {getNavigationItems().map(({ path, label, isPrivate }) => {
              if (isPrivate && !showPrivateMenus) return null;
              return (
                <NavItem key={path} to={path}>
                  {label}
                </NavItem>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};
