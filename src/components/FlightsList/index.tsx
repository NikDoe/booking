import useSWR from "swr";
import { flightsUrlEndpoint, getFlights } from "../../api";
import { ListWrapper } from "components/common";
import { FlightCard } from "components";

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
				{flights?.map((flight) => {
					return <FlightCard key={flight.id} {...flight} />;
				})}
			</ListWrapper>
		);
	}

	return <>{content}</>;
};

export default FlightsList;
