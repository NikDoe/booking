import {
	addFlight,
	deleteFlight,
	flightsUrlEndpoint,
	getFlights,
	IFlightsApi,
	updateFlight,
} from "./flightsApi";

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
	addTrain,
	deleteFlight,
	deleteTrain,
	getFlights,
	getTrains,
	flightsUrlEndpoint,
	trainsUrlEndpoint,
	updateFlight,
	updateTrain,
};
export type { IFlightsApi, ItrainsApi };
