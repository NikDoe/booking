import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "context/AuthProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<AuthProvider>
		<BrowserRouter>
			<Routes>
				<Route path="/*" element={<App />} />
			</Routes>
		</BrowserRouter>
	</AuthProvider>,
);
