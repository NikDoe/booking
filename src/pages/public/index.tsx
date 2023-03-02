import { FC, FormEvent } from "react";
import { useTitle } from "../../hooks";

import { Input } from "../../common";
import { Button } from "webli-ui";

import styles from "./styles.module.css";

const Public: FC = () => {
	useTitle("Бронирование билетов | номеров онлайн");
	const publicFormHandle = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<main className={styles.Main}>
			<form onSubmit={publicFormHandle} className={styles.Form}>
				<Input placeholder="откуда" />
				<Input placeholder="куда" />
				<Input placeholder="дата" />
				<Button onClick={() => alert("поиск билетов")}>
					найти билеты
				</Button>
			</form>
		</main>
	);
};

export default Public;
