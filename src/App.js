import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/signin";

function App() {
	const [user, setUser] = useState(null);

	return (
		<Routes>
			<Route exact path="/signin" element={<Signin />} />
		</Routes>
	);
}

export default App;
