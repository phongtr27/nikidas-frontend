import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { SignIn, SignUp, Dashboard } from "./pages";
import { UserContext } from "./context/user";
import { ProtectedRoute } from "./components";
import jwt_decode from "jwt-decode";

function App() {
	const [user, setUser] = useState(jwt_decode(localStorage.getItem("token")));

	console.log(user);

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
					<Route exact path="/admin" element={<Dashboard />} />
				</Route>
			</Routes>
		</UserContext.Provider>
	);
}

export default App;
