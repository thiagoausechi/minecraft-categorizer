import { Route, Navigate } from "react-router-dom";

import { TypedObj } from "./global.type";

import Page from "../components/containers/PageContext";
import App from "../pages/App";
import NotFound from "../pages/NotFound";
import Avatar from "../pages/Avatar";

export const HOME_ROUTE = "/minecraft-categorizer";

const PATHS: TypedObj<JSX.Element> =
{
    [HOME_ROUTE]:           <Page content={<App />}      title="Home"      />,
    [HOME_ROUTE+"/avatar"]: <Page content={<Avatar />}   title="Avatar"    />,
    "/404":                 <Page content={<NotFound />} title="Not Found" />,
    "*":                    <Navigate to="/404"                            />,
    "/":                    <Navigate to={HOME_ROUTE}                      />
}

const ROUTES = Object.keys(PATHS).map(key => <Route key={key} path={key} element={PATHS[key]}/>);

export default ROUTES;