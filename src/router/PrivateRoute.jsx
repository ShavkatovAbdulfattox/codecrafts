/* eslint-disable react/prop-types */
/** @format */
import {useSelector} from "react-redux";
import {Navigate} from "react-router";

const PrivateRoute = ({children}) => {
    const user = useSelector((state) => state.user);

    if (!user?.isLogged) {
        // Navigate to /login if user is not logged in
        return <Navigate to="/signup"/>;
    }

    return children;
};

export default PrivateRoute;
