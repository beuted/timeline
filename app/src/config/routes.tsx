import React, { Suspense, ReactNode } from "react";
import { Home } from "../components/Home/Home";
import { QuizzPage } from "../components/Quizz/QuizzPage";
import Maths from "../components/Maths/Maths";
import Writers from "../components/Writers/Writers";
import SocioPolitique from "../components/SocioPolitique/SocioPolitique";
import Economy from "../components/Economy/Economy";
import History from "../components/History/History";
import Departements from "../components/Geographie/Departements/Departements";
import Villes from "../components/Geographie/Villes/Villes";
import Regions from "../components/Geographie/Regions/Regions";
import Fleuves from "../components/Geographie/Fleuves/Fleuves";

// Lazy loaded components
const loadCreations = () => import("../components/Creations/Creations");
const loadPainters = () => import("../components/Painting/Painters");
const loadPhotographers = () =>
  import("../components/Photographers/Photographers");
const loadFilmMakers = () => import("../components/FilmMakers/FilmMakers");

const Creations = waitLoaded(React.lazy(loadCreations));
const Painters = waitLoaded(React.lazy(loadPainters));
const Photographers = waitLoaded(React.lazy(loadPhotographers));
const FilmMakers = waitLoaded(React.lazy(loadFilmMakers));

// HOC for lazy loaded components
export function waitLoaded<TProps>(
  WrappedComponent: React.ComponentType<TProps>
) {
  return (props: TProps & { children?: ReactNode }) => (
    <Suspense fallback={<span>Loading...</span>}>
      <WrappedComponent {...props} />
    </Suspense>
  );
}

// Route configuration interface
export interface RouteConfig {
  path: string;
  label: string;
  component: React.ComponentType<any>;
  isPrivate?: boolean;
  showInNavigation?: boolean;
  requiresProps?: boolean;
}

// Centralized route configuration
export const ROUTE_CONFIG: RouteConfig[] = [
  {
    path: "/",
    label: "Home",
    component: Home,
    showInNavigation: true,
    requiresProps: true, // needs setShowPrivateMenus prop
  },
  {
    path: "/creations",
    label: "Creations",
    component: Creations,
    showInNavigation: true,
  },
  {
    path: "/painters",
    label: "Painters",
    component: Painters,
    isPrivate: true,
    showInNavigation: true,
  },
  {
    path: "/photographers",
    label: "Photographers",
    component: Photographers,
    isPrivate: true,
    showInNavigation: true,
  },
  {
    path: "/filmmakers",
    label: "FilmMakers",
    component: FilmMakers,
    isPrivate: true,
    showInNavigation: true,
  },
  {
    path: "/maths",
    label: "Maths",
    component: Maths,
    isPrivate: true,
    showInNavigation: true,
  },
  {
    path: "/writers",
    label: "Writers",
    component: Writers,
    isPrivate: true,
    showInNavigation: true,
  },
  {
    path: "/socio-politique",
    label: "Socio-Politique",
    component: SocioPolitique,
    isPrivate: true,
    showInNavigation: true,
  },
  {
    path: "/history",
    label: "History",
    component: History,
    isPrivate: true,
    showInNavigation: true,
  },
  {
    path: "/economy",
    label: "Economy",
    component: Economy,
    isPrivate: true,
    showInNavigation: true,
  },
  {
    path: "/villes",
    label: "Villes",
    component: Villes,
    isPrivate: true,
    showInNavigation: true,
  },
  {
    path: "/departements",
    label: "Départements",
    component: Departements,
    isPrivate: true,
    showInNavigation: true,
  },
  {
    path: "/regions",
    label: "Régions",
    component: Regions,
    isPrivate: true,
    showInNavigation: true,
  },
  {
    path: "/fleuves",
    label: "Fleuves",
    component: Fleuves,
    isPrivate: true,
    showInNavigation: true,
  },
  {
    path: "/quizz/:category",
    label: "Quiz",
    component: QuizzPage,
    showInNavigation: false, // Don't show in nav as it's dynamic
  },
];

// Helper functions
export const getNavigationItems = () =>
  ROUTE_CONFIG.filter((route) => route.showInNavigation);

export const getRoutes = () => ROUTE_CONFIG;

// Preload functions for performance
export const preloadComponents = () => {
  loadCreations();
  loadPainters();
  loadPhotographers();
  loadFilmMakers();
};
