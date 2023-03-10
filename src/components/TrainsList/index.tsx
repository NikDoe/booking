import useSWR from "swr";
import {
	getTrains,
	ItrainsApi,
	trainsUrlEndpoint as cacheKey,
} from "../../api";
import SingleTrain from "../SingleTrain";

import styles from "./style.module.css";

const TrainsList = () => {
	const { isLoading, error, data: trains } = useSWR(cacheKey, getTrains);

	let content;
	if (isLoading) {
		content = <p>Загрузка...</p>;
	} else if (error) {
		content = <p>{error.message}</p>;
	} else {
		content = (
			<div className={styles.Main}>
				{trains?.map((train: ItrainsApi) => {
					return (
						<SingleTrain
							key={train.id}
							to={`${train.id}`}
							id={train.id}
						/>
					);
				})}
			</div>
		);
	}

	return <main>{content}</main>;
};

export default TrainsList;
