import logo from './logo.svg';
import './App.css';
import {Route, Router, Routes} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {useEffect, useState} from "react";
import Header from "./header/Header";
import Signin from "./components/Signin";
import Signout from "./components/Signout";
import Signup from "./components/Signup";
const App =()=>{
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(()=>{
        if (sessionStorage.getItem("token") !== null) {
            setIsAuthenticated(true);
        }
    },[])

    return (
            <div className="App">
                <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
                <Routes>
                        <Route  path="/signin" element={<Signin isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
                        <Route  path="/signout" element={<Signout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
                        <Route  path="/signup" element={<Signup isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
                </Routes>
            </div>
    );
}

export default App;
