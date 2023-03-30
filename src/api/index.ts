import {
	addNewUser,
	EMAIL_REGEX,
	ISignupFormValues,
	ISignupResponse,
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
	registerUrlEndpoint,
	trainsUrlEndpoint,
	updateFlight,
	updateHotel,
	updateTrain,
	EMAIL_REGEX,
};

export type {
	IFlightsApi,
	IHotelsApi,
	ItrainsApi,
	ISignupFormValues,
	ISignupResponse,
};
