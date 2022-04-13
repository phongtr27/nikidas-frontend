import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ user }) => {
	return user?.isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
