
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {useCookies} from "react-cookie";

function Header({isAuthenticated, setIsAuthenticated}) {
    const [cookies, setCookie] = useCookies(['userName']);
    useEffect(() => {
        try {
            const userName = cookies.userName;
            console.log(userName)
            if (cookies.userName != null) {
                setIsAuthenticated(true);
                // console.log("로그인: " + loginCheck);
                // console.log("token: " + localStorage.getItem("token"));
                console.log(isAuthenticated)

            } else {
                setIsAuthenticated(false);
                // fetchData();
            }
        } catch (error) {
            console.log("error:");
        }
    }, [isAuthenticated]);

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
                <div className="navbar-brand container">ToDoList App</div>
                <ul className="navbar-nav justify-content-end container">
                    <li className="nav-link px-4"><Link to='/'>Home</Link></li>
                    {isAuthenticated && <li className="nav-link px-4"><Link to='/todo'>View Todo</Link></li>}
                    {isAuthenticated && <li className="nav-link px-4"><Link to='/add'>Add Todo</Link></li>}
                    {!isAuthenticated && <li className="nav-link px-4"><Link to='/signin'>Signin</Link></li>}
                    {!isAuthenticated && <li className="nav-link px-4"><Link to='/signup'>Signup</Link></li>}
                    {isAuthenticated && <li className="nav-link px-4"><Link to='/signout'>Signout</Link></li>}
                    <li className="nav-link px-4"><Link to='/about'>About</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;