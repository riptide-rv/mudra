import AuthContext from "../AuthContext.js"
import axios from "axios"
import { useState } from "react"
import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router-dom"

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const appUrl = import.meta.env.VITE_APP_API_URL;

    let[authTokens, setAuthTokens] = useState(() => (localStorage.getItem('authTokens')) ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let[user, setUser] = useState(() => authTokens ? jwtDecode(authTokens.access_token) : null)
  

    let loginUser = async (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append('username', e.target.username.value);
        form.append('password', e.target.password.value);

        try{
            let response = await axios.post(appUrl+'/auth/login', form);
            if(response.status === 200){
                setUser(jwtDecode(response.data.access_token))
                setAuthTokens(response.data)
                localStorage.setItem('authTokens', JSON.stringify(response.data))
                navigate('/home')
            }
        }catch(error){
            throw error
        }
         
    }

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens');
        navigate('/login')
    }
    
    let contextData = {
        loginUser: loginUser,
        logoutUser: logoutUser,
        user: user,
        authTokens: authTokens
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}