
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';


const PrivateRoute = () => {
    const { login } = useContext(LoginContext);
    return login ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;