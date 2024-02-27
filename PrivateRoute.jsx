import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { auth } from './src/config/firebase';

const PrivateRoutes = () => {
    
    console.log("private routes ? ")
    console.log()
    console.log(auth.currentUser)
    return (
        !(  localStorage.getItem('198572fb-42ed-4c4c-a77e-a15f4c1064b0') == null) ? <Outlet /> : <Navigate to="/login" />
    )
  }
  
export default PrivateRoutes;