import { lazy } from "react";
import Public from "./public";

const AdminPage = lazy(() => import("./adminPage"));
const Flights = lazy(() => import("./fligts"));
const Hotels = lazy(() => import("./hotels"));
const LoginPage = lazy(() => import("./login"));
const Trains = lazy(() => import("./trains"));

export { AdminPage, Flights, Hotels, LoginPage, Public, Trains };
