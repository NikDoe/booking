import useSWR from "swr";
import { flightsUrlEndpoint, getFlights, IFlightsApi } from "../../api";
import { ListWrapper } from "../common";
import SingleFlight from "../SingleFlight";

const FlightsList = () => {
	const {
		isLoading,
		error,
		data: fights,
	} = useSWR(flightsUrlEndpoint, getFlights);

	let content;
	if (isLoading) {
		content = <p>Загрузка...</p>;
	} else if (error) {
		content = <p>{error.message}</p>;
	} else {
		content = (
			<ListWrapper>
				{fights?.map((flight: IFlightsApi) => {
					return (
						<SingleFlight
							key={flight.id}
							to={`${flight.id}`}
							id={flight.id}
						/>
					);
				})}
			</ListWrapper>
		);
	}

	return <main>{content}</main>;
};

export default FlightsList;
