import { lazy } from "react";
import { Header, Layout, Nav } from "./common";
import CustomNavLink from "./NavLink";

const TrainsList = lazy(() => import("./TrainsList"));

export { CustomNavLink, Layout, Header, Nav, TrainsList };
