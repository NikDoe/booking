import { api } from "../configApi";

export interface ItrainsApi {
	id: number;
	title: string;
	from: string;
	to: string;
}

export const trainsUrlEndpoint = "trains";

export const getTrains = async (): Promise<ItrainsApi[]> => {
	try {
		return await api.get(trainsUrlEndpoint).json();
	} catch (error) {
		throw new Error("не удалось получить поезда"); //заменить на обработчик ошибок
	}
};

export const addTrain = async ({ id, title }: ItrainsApi) => {
	try {
		return await api
			.post(trainsUrlEndpoint, { json: { id, title } })
			.json();
	} catch (error) {
		throw new Error("не удалось добавить новый поезд"); //заменить на обработчик ошибок
	}
};

export const updateTrain = async (train: ItrainsApi) => {
	try {
		return await api
			.patch(`${trainsUrlEndpoint}/${train.id}`, { json: train })
			.json();
	} catch (error) {
		throw new Error("не удалось обновить поезд"); //заменить на обработчик ошибок
	}
};

export const deleteTrain = async ({ id }: Pick<ItrainsApi, "id">) => {
	try {
		return await api
			.delete(`${trainsUrlEndpoint}/${id}`, { json: id })
			.json();
	} catch (error) {
		throw new Error("не удалось удалить поезд"); //заменить на обработчик ошибок
	}
};
