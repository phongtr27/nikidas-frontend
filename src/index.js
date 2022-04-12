import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalStyles } from "./globalStyles";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<GlobalStyles />
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
