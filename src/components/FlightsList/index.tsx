import useSWR from "swr";
import { flightsUrlEndpoint, getFlights, IFlightsApi } from "../../api";
import { ListWrapper } from "../common";
import FlightCard from "../FlightCard";

const FlightsList = () => {
	const {
		isLoading,
		error,
		data: flights,
	} = useSWR(flightsUrlEndpoint, getFlights);

	let content;
	if (isLoading) {
		content = <p>Загрузка...</p>;
	} else if (error) {
		content = <p>{error.message}</p>;
	} else {
		content = (
			<ListWrapper>
				{flights?.map((flight: IFlightsApi) => {
					return (
						<FlightCard
							key={flight.id}
							to={`${flight.id}`}
							id={flight.id}
						/>
					);
				})}
			</ListWrapper>
		);
	}

	return <>{content}</>;
};

export default FlightsList;
