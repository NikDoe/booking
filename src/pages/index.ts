import { lazy } from "react";
import Public from "./public";

const AdminPage = lazy(() => import("./adminPage"));
const Flight = lazy(() => import("./singleFlight"));
const Flights = lazy(() => import("./fligts"));
const Hotel = lazy(() => import("./singleHotel"));
const Hotels = lazy(() => import("./hotels"));
const Login = lazy(() => import("./login"));
const SignUp = lazy(() => import("./singup"));
const Train = lazy(() => import("./singleTrain"));
const Trains = lazy(() => import("./trains"));

export {
	AdminPage,
	Flight,
	Flights,
	Hotel,
	Hotels,
	Login,
	Public,
	SignUp,
	Train,
	Trains,
};
