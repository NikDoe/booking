import useSWR from "swr";
import {
	getTrains,
	ItrainsApi,
	trainsUrlEndpoint as cacheKey,
} from "../../api";

const TrainsList = () => {
	const { isLoading, error, data: trains } = useSWR(cacheKey, getTrains);

	let content;
	if (isLoading) {
		content = <p>Загрузка...</p>;
	} else if (error) {
		content = <p>{error.message}</p>;
	} else {
		content = trains?.map((train: ItrainsApi) => {
			return (
				<div key={train.id}>
					<h1>{train.title}</h1>
				</div>
			);
		});
	}

	return <main>{content}</main>;
};

export default TrainsList;
