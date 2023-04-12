import {
	addNewUser,
	EMAIL_REGEX,
	ILoginFormValues,
	ILoginResponse,
	ISignupFormValues,
	ISignupResponse,
	loginUrlEndpoint,
	loginUser,
	registerUrlEndpoint,
} from "./authApi";
import {
	addFlight,
	deleteFlight,
	flightsUrlEndpoint,
	getFlights,
	IFlightsApi,
	updateFlight,
} from "./flightsApi";

import {
	addHotel,
	deleteHotel,
	hotelsUrlEndpoint,
	getHotels,
	IHotelsApi,
	updateHotel,
} from "./hotelsApi";

import {
	ItrainsApi,
	trainsUrlEndpoint,
	getTrains,
	addTrain,
	updateTrain,
	deleteTrain,
} from "./trainsApi";
import { useGetUsers } from "./usersApi";

export {
	addFlight,
	addHotel,
	addNewUser,
	addTrain,
	deleteFlight,
	deleteHotel,
	deleteTrain,
	getFlights,
	getHotels,
	getTrains,
	flightsUrlEndpoint,
	hotelsUrlEndpoint,
	loginUrlEndpoint,
	loginUser,
	registerUrlEndpoint,
	trainsUrlEndpoint,
	updateFlight,
	updateHotel,
	updateTrain,
	useGetUsers,
	EMAIL_REGEX,
};

export type {
	IFlightsApi,
	IHotelsApi,
	ILoginFormValues,
	ILoginResponse,
	ItrainsApi,
	ISignupFormValues,
	ISignupResponse,
};
