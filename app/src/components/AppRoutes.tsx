import React from "react";
import { Route, Routes } from "react-router-dom";
import { getRoutes } from "../config/routes";

interface AppRoutesProps {
  setShowPrivateMenus: (show: boolean) => void;
}

export const AppRoutes: React.FC<AppRoutesProps> = ({
  setShowPrivateMenus,
}) => {
  const routes = getRoutes();

  return (
    <Routes>
      {routes.map(({ path, component: Component, requiresProps }) => (
        <Route
          key={path}
          path={path}
          element={
            requiresProps && path === "/" ? (
              <Component setShowPrivateMenus={setShowPrivateMenus} />
            ) : (
              <Component />
            )
          }
        />
      ))}
    </Routes>
  );
};
