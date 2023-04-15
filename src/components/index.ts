import { lazy } from "react";
import { Footer, Header, Layout, Nav } from "./common";
import FlightCard from "./FlightCard";
import HotelCard from "./HotelCard";
import CustomNavLink from "./NavLink";
import TrainCard from "./TrainCard";
import ProfileMenu from "./ProfileMenu";
import Logout from "./Logout";
import ProfileMenuLinks from "./ProfileMenuLinks";

const DashBoard = lazy(() => import("./DashBoard"));
const FlightsList = lazy(() => import("./FlightsList"));
const HotelsList = lazy(() => import("./HotelsList"));
const TrainsList = lazy(() => import("./TrainsList"));

export {
	ProfileMenu,
	CustomNavLink,
	DashBoard,
	FlightCard,
	FlightsList,
	Footer,
	HotelCard,
	HotelsList,
	Layout,
	Logout,
	Header,
	Nav,
	ProfileMenuLinks,
	TrainCard,
	TrainsList,
};
