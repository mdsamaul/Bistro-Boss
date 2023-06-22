import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { RiseLoader } from "react-spinners";
import { AuthContext } from "./AuthProvider.jsx";

const ProviderRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);

    if (user) {
        return children;
    }
    if (loading) {
        return <RiseLoader color="#36d7b7" />
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default ProviderRoutes;