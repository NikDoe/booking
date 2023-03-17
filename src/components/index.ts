import { lazy } from "react";
import { Header, Layout, Nav } from "./common";
import FlightCard from "./FlightCard";
import HotelCard from "./HotelCard";
import CustomNavLink from "./NavLink";
import TrainCard from "./TrainCard";

const FlightsList = lazy(() => import("./FlightsList"));
const HotelsList = lazy(() => import("./HotelsList"));
const TrainsList = lazy(() => import("./TrainsList"));

export {
	CustomNavLink,
	FlightCard,
	FlightsList,
	HotelCard,
	HotelsList,
	Layout,
	Header,
	Nav,
	TrainCard,
	TrainsList,
};
