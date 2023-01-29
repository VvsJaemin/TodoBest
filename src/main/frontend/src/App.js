import logo from './logo.svg';
import './App.css';
import {Route, Router, Routes} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {useEffect, useState} from "react";
import Header from "./header/Header";
import Signin from "./components/auth/Signin";
import Signout from "./components/auth/Signout";
import Signup from "./components/auth/Signup";
import Oauth2RedirectHandler from "./components/auth/Oauth2RedirectHandler";
import {useCookies} from "react-cookie";
import Todos from "./components/todo/Todos";
import About from "./components/page/About";
import AddTodo from "./components/todo/AddTodo";
const App =()=>{
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [cookies, setCookie] = useCookies(['accessToken']);

    useEffect(()=>{
        if (cookies.accessToken !== null) {
            setIsAuthenticated(true);
        }
    },[])

    return (
            <div className="App">
                <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
                <Routes>
                        <Route  path="/signin" element={<Signin isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} /> }  />
                        <Route  path="/signout" element={<Signout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
                        <Route  path="/signup" element={<Signup isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
                        <Route  path="/oauth2/redirect?/:token" element={<Oauth2RedirectHandler isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
                        <Route  path="/todo" element={<Todos isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
                        <Route  path="/add" element={<AddTodo isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
                        <Route  path="/about" element={<About />} />
                        {/*<Route  path="/todo" render={(props) => (<Todos {...props} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />)} />*/}
                </Routes>
            </div>
    );
}

export default App;
