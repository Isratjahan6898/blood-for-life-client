import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";


const AdminRoutes = ({children}) => {
    const [role, isLoading]=useRole();
    if(isLoading) return <span className="loading loading-bars loading-lg"></span>
    
    if(role==='admin') return children
    return <Navigate to='/deshboard' />
};

export default AdminRoutes;