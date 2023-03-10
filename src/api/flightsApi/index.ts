import { api } from "../configApi";

export interface IFlightsApi {
	id: number;
	title: string;
	from: string;
	to: string;
}

export const flightsUrlEndpoint = "flights";

export const getFlights = async (): Promise<IFlightsApi[]> => {
	try {
		return await api.get(flightsUrlEndpoint).json();
	} catch (error) {
		throw new Error("не удалось получить самолеты"); //заменить на обработчик ошибок
	}
};

export const addFlight = async ({ id, title }: IFlightsApi) => {
	try {
		return await api
			.post(flightsUrlEndpoint, { json: { id, title } })
			.json();
	} catch (error) {
		throw new Error("не удалось добавить новый самолет"); //заменить на обработчик ошибок
	}
};

export const updateFlight = async (flight: IFlightsApi) => {
	try {
		return await api
			.patch(`${flightsUrlEndpoint}/${flight.id}`, { json: flight })
			.json();
	} catch (error) {
		throw new Error("не удалось обновить самолет"); //заменить на обработчик ошибок
	}
};

export const deleteFlight = async ({ id }: Pick<IFlightsApi, "id">) => {
	try {
		return await api
			.delete(`${flightsUrlEndpoint}/${id}`, { json: id })
			.json();
	} catch (error) {
		throw new Error("не удалось удалить самолет"); //заменить на обработчик ошибок
	}
};
