import ky from "ky";

export const api = ky.create({
	prefixUrl: "http://localhost:9000",
	hooks: {
		// beforeRequest: [
		// 	(request) => {
		// 		//1. сделать на серверер запрос на refresh
		// 		//2. передать в request заголовок "Authorization" токен в виде "Bearer ${token}"
		// 		//3. проверить как работает запрос на список пользователей
		// 	},
		// ],
		afterResponse: [
			async (request, options, response) => {
				// console.log(response);
			},
		],
	},
});
