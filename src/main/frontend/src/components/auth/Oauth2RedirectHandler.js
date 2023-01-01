import React, {useEffect} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useCookies} from "react-cookie";
import axios from "axios";
import {KAKAO_AUTH_URL} from "../../constatnts/Constants";


const Oauth2RedirectHandler = ({isAuthenticated, setIsAuthenticated}) => {
    const location = useLocation();
    const [cookies, setCookie] = useCookies(['accessToken']);

    const search = new URLSearchParams(location.search);
    let accessToken = search.get('token');

    let navigate = useNavigate();
    console.log(accessToken)


    localStorage.setItem('accessToken', accessToken)
    useEffect(() => {
        localStorage.getItem('accessToken')
        setIsAuthenticated(true)
        navigate("/");
    }, [])

    return <></>

}

export default Oauth2RedirectHandler;