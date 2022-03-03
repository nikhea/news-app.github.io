import { useRoutes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TechPage from "./pages/Techpage";
import HealthPage from "./pages/HealthPage";
import Header from "./layouts/Header";
import CelebritiesPage from "./pages/CelebritiesPage";
import PoliticesPage from "./pages/PoliticesPage";
export const Routs = () => {
  const mainRoutes = {
    path: "/",
    // element: <Header/>,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "tech", element: <TechPage /> },
      { path: "health", element: <HealthPage /> },
      { path: "celebrity", element: <CelebritiesPage /> },
      { path: "politic", element: <PoliticesPage /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  };

  const routing = useRoutes([mainRoutes]);

  return <>{routing}</>;
};
