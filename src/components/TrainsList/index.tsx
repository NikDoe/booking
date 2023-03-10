import useSWR from "swr";
import {
	getTrains,
	ItrainsApi,
	trainsUrlEndpoint as cacheKey,
} from "../../api";
import { ListWrapper } from "../common";
import SingleTrain from "../SingleTrain";

const TrainsList = () => {
	const { isLoading, error, data: trains } = useSWR(cacheKey, getTrains);

	let content;
	if (isLoading) {
		content = <p>Загрузка...</p>;
	} else if (error) {
		content = <p>{error.message}</p>;
	} else {
		content = (
			<ListWrapper>
				{trains?.map((train: ItrainsApi) => {
					return (
						<SingleTrain
							key={train.id}
							to={`${train.id}`}
							id={train.id}
						/>
					);
				})}
			</ListWrapper>
		);
	}

	return <main>{content}</main>;
};

export default TrainsList;
