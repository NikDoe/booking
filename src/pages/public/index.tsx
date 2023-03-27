import { FC, FormEvent } from "react";
import { useTitle } from "hooks";

import styles from "./styles.module.css";
import { Button, Input } from "webli-ui";

const Public: FC = () => {
	useTitle("Бронирование билетов | номеров онлайн");
	const publicFormHandle = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={publicFormHandle} className={styles.Form}>
			<Input placeholder="откуда" />
			<Input placeholder="куда" />
			<Input placeholder="дата" />
			<Button onClick={() => alert("поиск билетов")}>найти билеты</Button>
		</form>
	);
};

export default Public;
