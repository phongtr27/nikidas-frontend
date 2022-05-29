import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components";
import {
	Home,
	Shop,
	LogIn,
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
	User,
	ProductUser,
	Contact,
} from "./pages";
import {
	HOME,
	SHOP,
	LOGIN,
	SIGNUP,
	ADMIN,
	ADMIN_CATEGORY,
	ADMIN_SUB_CATEGORY,
	ADMIN_PRODUCT,
	ADMIN_ORDER,
	CONTACT,
} from "./constants/routes";
import { UserContext } from "./context/user";
import { ProtectedRoute, ProtectLogIn } from "./helpers/routes";
import { getUser } from "./helpers/getUser";
import NotFound from "./pages/user/notFound";

function App() {
	const [user, setUser] = useState(getUser());

	return (
		<UserContext.Provider value={{ user, setUser }}>
			<ScrollToTop>
				<Routes>
					<Route
						exact
						path={HOME}
						element={
							<User>
								<Home />
							</User>
						}
					/>

					<Route
						exact
						path={SHOP}
						element={
							<User>
								<Shop />
							</User>
						}
					/>

					<Route
						exact
						path={`${SHOP}/:id`}
						element={
							<User>
								<ProductUser />
							</User>
						}
					/>

					<Route
						exact
						path={CONTACT}
						element={
							<User>
								<Contact />
							</User>
						}
					/>

					<Route
						exact
						path={LOGIN}
						element={<ProtectLogIn user={user} />}
					>
						<Route path={LOGIN} element={<LogIn />} />
					</Route>

					<Route
						exact
						path={SIGNUP}
						element={<ProtectLogIn user={user} />}
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

					<Route
						path="*"
						element={
							<User>
								<NotFound />
							</User>
						}
					/>
				</Routes>
			</ScrollToTop>
		</UserContext.Provider>
	);
}

export default App;
