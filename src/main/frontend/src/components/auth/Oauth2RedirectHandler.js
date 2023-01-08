import React, {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useCookies} from "react-cookie";
import axios from "axios";
import {KAKAO_AUTH_URL} from "../../constatnts/Constants";


const Oauth2RedirectHandler = ({isAuthenticated, setIsAuthenticated}) => {
    const [accessToken, setAccessToken] = useState('');
    const location = useLocation();
    const [cookies, setCookie] = useCookies(['accessToken']);
    function getUrlParameter(name) {
        name = name.replace(/[\\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    let navigate = useNavigate();

    useEffect(() => {
        const token = getUrlParameter('token');
        console.log("token ===", token)
        localStorage.setItem("accessToken", token)
        setCookie('accessToken', token);
        setIsAuthenticated(true)
        navigate("/");
    }, [])

    return <></>

}

export default Oauth2RedirectHandler;