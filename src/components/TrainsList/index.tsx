import useSWR from "swr";
import { getTrains, trainsUrlEndpoint as cacheKey } from "../../api";
import { ListWrapper } from "../common";
import TrainCard from "../TrainCard";

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
				{trains?.map((train) => {
					return <TrainCard key={train.id} {...train} />;
				})}
			</ListWrapper>
		);
	}

	return <>{content}</>;
};

export default TrainsList;
