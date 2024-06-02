import PropTypes from 'prop-types'
import useAuth from '../hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'


const PrivateRoutes = ({children}) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    if (loading) return <span className="loading loading-spinner loading-lg"></span>
  if (user) return children
  return <Navigate to='/login' state={location.pathname} replace='true' />
}

PrivateRoutes.propTypes = {
  children: PropTypes.element,
}


export default PrivateRoutes;