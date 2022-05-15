import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ user }) => {
	return user?.isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export const ProtectLogIn = ({ user }) => {
	return !user ? <Outlet /> : <Navigate to="/" />;
};
