import useSWR from "swr";
import { hotelsUrlEndpoint, getHotels, IHotelsApi } from "../../api";
import { ListWrapper } from "../common";
import HotelCard from "../HotelCard";

const HotelsList = () => {
	const {
		isLoading,
		error,
		data: hotels,
	} = useSWR(hotelsUrlEndpoint, getHotels);

	let content;
	if (isLoading) {
		content = <p>Загрузка...</p>;
	} else if (error) {
		content = <p>{error.message}</p>;
	} else {
		content = (
			<ListWrapper>
				{hotels?.map((hotel: IHotelsApi) => {
					return (
						<HotelCard
							key={hotel.id}
							to={`${hotel.id}`}
							id={hotel.id}
						/>
					);
				})}
			</ListWrapper>
		);
	}

	return <>{content}</>;
};

export default HotelsList;
