import ky from "ky";

export interface ItrainsApi {
	id: number;
	title: string;
}

const trainsApi = ky.create({
	prefixUrl: "http://localhost:3500",
});

export const trainsUrlEndpoint = "trains";

export const getTrains = async (): Promise<ItrainsApi[]> => {
	try {
		return await trainsApi.get(trainsUrlEndpoint).json();
	} catch (error) {
		throw new Error("не удалось получить поезда"); //заменить на обработчик ошибок
	}
};

export const addTrain = async ({ id, title }: ItrainsApi) => {
	try {
		return await trainsApi
			.post(trainsUrlEndpoint, { json: { id, title } })
			.json();
	} catch (error) {
		throw new Error("не удалось добавить новый поезд"); //заменить на обработчик ошибок
	}
};

export const updateTrain = async (train: ItrainsApi) => {
	try {
		return await trainsApi
			.patch(`${trainsUrlEndpoint}/${train.id}`, { json: train })
			.json();
	} catch (error) {
		throw new Error("не удалось обновить поезд"); //заменить на обработчик ошибок
	}
};

export const deleteTrain = async ({ id }: Pick<ItrainsApi, "id">) => {
	try {
		return await trainsApi
			.delete(`${trainsUrlEndpoint}/${id}`, { json: id })
			.json();
	} catch (error) {
		throw new Error("не удалось удалить поезд"); //заменить на обработчик ошибок
	}
};
