import { Outlet, Navigate} from "react-router-dom";

const PrivateRoutes = () => {
    let isLogin = true;
    return isLogin ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;