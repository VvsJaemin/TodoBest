import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

const Signout =({isAuthenticated, setIsAuthenticated})=>{
    const [cookies, setCookie, removeCookie] = useCookies(['userName', 'accessToken']);
    let navigate = useNavigate();

    useEffect(()=>{
        removeCookie('userName');
        setIsAuthenticated(false);
        navigate("/");
    },[navigate, setIsAuthenticated])

    return(
        <div className="text-center">
            <h1>Successfully sign out</h1>
        </div>
    )
}

export default Signout;