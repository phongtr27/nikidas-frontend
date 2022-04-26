import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
	Home,
	SignIn,
	SignUp,
	Admin,
	Dashboard,
	Category,
	CategoryDetails,
	SubCategory,
	SubCategoryDetails,
	Product,
	ProductDetails,
	Order,
} from "./pages";
import {
	HOME,
	SIGNIN,
	SIGNUP,
	ADMIN,
	ADMIN_CATEGORY,
	ADMIN_SUB_CATEGORY,
	ADMIN_PRODUCT,
	ADMIN_ORDER,
} from "./constants/routes";
import { UserContext } from "./context/user";
import { ProtectedRoute, ProtectSignin } from "./helpers/routes";
import { getUser } from "./helpers/getUser";

function App() {
	const [user, setUser] = useState(getUser());

	return (
		<UserContext.Provider value={{ user, setUser }}>
			<Routes>
				<Route exact path={HOME} element={<Home />} />

				<Route
					exact
					path={SIGNIN}
					element={<ProtectSignin user={user} />}
				>
					<Route path={SIGNIN} element={<SignIn />} />
				</Route>

				<Route
					exact
					path={SIGNUP}
					element={<ProtectSignin user={user} />}
				>
					<Route exact path={SIGNUP} element={<SignUp />} />
				</Route>

				<Route
					exact
					path={ADMIN}
					element={<ProtectedRoute user={user} />}
				>
					<Route
						path={ADMIN}
						element={
							<Admin>
								<Dashboard />
							</Admin>
						}
					/>
				</Route>

				<Route
					exact
					path={ADMIN_CATEGORY}
					element={<ProtectedRoute user={user} />}
				>
					<Route
						path={ADMIN_CATEGORY}
						element={
							<Admin>
								<Category />
							</Admin>
						}
					/>
				</Route>

				<Route
					exact
					path={`${ADMIN_CATEGORY}/:id`}
					element={<ProtectedRoute user={user} />}
				>
					<Route
						path={`${ADMIN_CATEGORY}/:id`}
						element={
							<Admin>
								<CategoryDetails />
							</Admin>
						}
					/>
				</Route>

				<Route
					exact
					path={ADMIN_SUB_CATEGORY}
					element={<ProtectedRoute user={user} />}
				>
					<Route
						path={ADMIN_SUB_CATEGORY}
						element={
							<Admin>
								<SubCategory />
							</Admin>
						}
					/>
				</Route>

				<Route
					exact
					path={`${ADMIN_SUB_CATEGORY}/:id`}
					element={<ProtectedRoute user={user} />}
				>
					<Route
						path={`${ADMIN_SUB_CATEGORY}/:id`}
						element={
							<Admin>
								<SubCategoryDetails />
							</Admin>
						}
					/>
				</Route>

				<Route
					exact
					path={ADMIN_PRODUCT}
					element={<ProtectedRoute user={user} />}
				>
					<Route
						path={ADMIN_PRODUCT}
						element={
							<Admin>
								<Product />
							</Admin>
						}
					/>
				</Route>

				<Route
					exact
					path={`${ADMIN_PRODUCT}/:id`}
					element={<ProtectedRoute user={user} />}
				>
					<Route
						path={`${ADMIN_PRODUCT}/:id`}
						element={
							<Admin>
								<ProductDetails />
							</Admin>
						}
					/>
				</Route>

				<Route
					exact
					path={ADMIN_ORDER}
					element={<ProtectedRoute user={user} />}
				>
					<Route
						path={ADMIN_ORDER}
						element={
							<Admin>
								<Order />
							</Admin>
						}
					/>
				</Route>
			</Routes>
		</UserContext.Provider>
	);
}

export default App;
