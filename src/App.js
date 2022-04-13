import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { SignIn, SignUp, Admin } from "./pages";
import { UserContext } from "./context/user";
import { ProtectedRoute } from "./components";
import { getUser } from "./helpers/getUser";

function App() {
	const [user, setUser] = useState(getUser());

	return (
		<UserContext.Provider value={{ user, setUser }}>
			<Routes>
				<Route exact path="/signin" element={<SignIn />} />
				<Route exact path="/signup" element={<SignUp />} />
				<Route
					exact
					path="/admin"
					element={<ProtectedRoute user={user} />}
				>
					<Route exact path="/admin" element={<Admin />} />
				</Route>
			</Routes>
		</UserContext.Provider>
	);
}

export default App;
