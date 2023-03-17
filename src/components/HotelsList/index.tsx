import useSWR from "swr";
import { hotelsUrlEndpoint, getHotels } from "../../api";
import { ListWrapper } from "components/common";
import { HotelCard } from "components";

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
				{hotels?.map((hotel) => {
					return <HotelCard key={hotel.id} {...hotel} />;
				})}
			</ListWrapper>
		);
	}

	return <>{content}</>;
};

export default HotelsList;
