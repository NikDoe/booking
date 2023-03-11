import { api } from "../configApi";

export interface IHotelsApi {
	id: number;
	title: string;
	desciption: string;
}

export const hotelsUrlEndpoint = "hotels";

export const getHotels = async (): Promise<IHotelsApi[]> => {
	try {
		return await api.get(hotelsUrlEndpoint).json();
	} catch (error) {
		throw new Error("не удалось получить отели"); //заменить на обработчик ошибок
	}
};

export const addHotel = async ({ id, title }: IHotelsApi) => {
	try {
		return await api
			.post(hotelsUrlEndpoint, { json: { id, title } })
			.json();
	} catch (error) {
		throw new Error("не удалось добавить новый отель"); //заменить на обработчик ошибок
	}
};

export const updateHotel = async (hotel: IHotelsApi) => {
	try {
		return await api
			.patch(`${hotelsUrlEndpoint}/${hotel.id}`, { json: hotel })
			.json();
	} catch (error) {
		throw new Error("не удалось обновить отель"); //заменить на обработчик ошибок
	}
};

export const deleteHotel = async ({ id }: Pick<IHotelsApi, "id">) => {
	try {
		return await api
			.delete(`${hotelsUrlEndpoint}/${id}`, { json: id })
			.json();
	} catch (error) {
		throw new Error("не удалось удалить отель"); //заменить на обработчик ошибок
	}
};
