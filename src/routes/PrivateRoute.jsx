import { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";
import Loading from "../pages/Loading";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    return <Navigate to={'/sign-in'} state={location.pathname}></Navigate>
};

export default PrivateRoute;