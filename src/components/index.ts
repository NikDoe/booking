import { lazy } from "react";
import { Footer, Header, Layout, Nav } from "./common";
import FlightCard from "./FlightCard";
import HotelCard from "./HotelCard";
import CustomNavLink from "./NavLink";
import TrainCard from "./TrainCard";
import ProfileMenu from "./ProfileMenu";
import Logout from "./Logout";
import ProfileMenuLinks from "./ProfileMenuLinks";

const FlightsList = lazy(() => import("./FlightsList"));
const FlightsTable = lazy(() => import("./FlightsTable"));
const HotelsList = lazy(() => import("./HotelsList"));
const HotelsTable = lazy(() => import("./HotelsTable"));
const SideBar = lazy(() => import("./SideBar"));
const TrainsList = lazy(() => import("./TrainsList"));
const TrainsTable = lazy(() => import("./TrainsTable"));
const UsersTable = lazy(() => import("./UsersTable"));

export {
	ProfileMenu,
	CustomNavLink,
	FlightCard,
	FlightsList,
	FlightsTable,
	Footer,
	HotelCard,
	HotelsList,
	HotelsTable,
	Layout,
	Logout,
	Header,
	Nav,
	ProfileMenuLinks,
	SideBar,
	TrainCard,
	TrainsList,
	TrainsTable,
	UsersTable,
};
