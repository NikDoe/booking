import { lazy } from "react";
import { Header, Layout, Nav } from "./common";
import CustomNavLink from "./NavLink";

const FlightsList = lazy(() => import("./FlightsList"));
const HotelsList = lazy(() => import("./HotelsList"));
const TrainsList = lazy(() => import("./TrainsList"));

export {
	CustomNavLink,
	FlightsList,
	HotelsList,
	Layout,
	Header,
	Nav,
	TrainsList,
};
