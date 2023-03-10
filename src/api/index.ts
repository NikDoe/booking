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
	addTrain,
	deleteFlight,
	deleteHotel,
	deleteTrain,
	getFlights,
	getHotels,
	getTrains,
	flightsUrlEndpoint,
	hotelsUrlEndpoint,
	trainsUrlEndpoint,
	updateFlight,
	updateHotel,
	updateTrain,
};
export type { IFlightsApi, IHotelsApi, ItrainsApi };
