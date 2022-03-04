import { useRoutes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TechPage from "./pages/Techpage";
import HealthPage from "./pages/HealthPage";
import Header from "./layouts/Header";
import BusinessPage from "./pages/BusinessPage";
import PoliticesPage from "./pages/PoliticesPage";
import { CyptoPage } from "./pages/CyptoPage";
export const Routs = () => {
  const mainRoutes = {
    path: "/",
    // element: <Header/>,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "tech", element: <TechPage /> },
      { path: "health", element: <HealthPage /> },
      { path: "business", element: <BusinessPage /> },
      { path: "politic", element: <PoliticesPage /> },
      { path: "cryptocurrency", element: <CyptoPage /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  };

  const routing = useRoutes([mainRoutes]);

  return <>{routing}</>;
};
