import { lazy } from "react";
import Public from "./public";

const AdminPage = lazy(() => import("./adminPage"));
const Flight = lazy(() => import("./singleFlight"));
const Flights = lazy(() => import("./fligts"));
const Hotels = lazy(() => import("./hotels"));
const LoginPage = lazy(() => import("./login"));
const Train = lazy(() => import("./singleTrain"));
const Trains = lazy(() => import("./trains"));

export { AdminPage, Flight, Flights, Hotels, LoginPage, Public, Train, Trains };
