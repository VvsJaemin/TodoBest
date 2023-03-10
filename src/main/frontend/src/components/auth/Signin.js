import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import {Button} from "react-bootstrap";
import kakaoLogo from '../../img/kakao-logo.png';
import {KAKAO_AUTH_URL} from "../../constatnts/Constants";

const Signin = ({isAuthenticated, setIsAuthenticated}) => {

    return (
        <div className="login-container">
            <div className="login-container">
                <div className="login-content">
                    <h3 className="login-title">Sign In</h3>
                    <SocialLogin />
                    <LoginForm isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
                    {/*<span className="signup-link">New user? <Link to="/signup">Sign up!</Link></span>*/}
                </div>
            </div>
        </div>)

}

const SocialLogin = () => {

    return (
        <Button href={KAKAO_AUTH_URL}> 카카오</Button>
    )
}

const LoginForm = ({isAuthenticated, setIsAuthenticated}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [cookies, setCookie] = useCookies(['userName', 'token']);
    let navigate = useNavigate();

    const timeout = (delay) => {
        return new Promise(res => setTimeout(res, delay));
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api/auth/signin', {username, password})
                .then((response) => {
                    setCookie('userName', response.data.userName)
                    setCookie('token', response.data.accessToken)
                })

            // sessionStorage.setItem('accessToken', response.data.accessToken);
            // sessionStorage.setItem('userName', response.data.userName);
            setIsAuthenticated(true)
        } catch (error) {
            setMessage('');
            if (error.response) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('Error: something happened');
            }
            setIsAuthenticated(false);
            return;
        }

        setUsername('');
        setPassword('');
        setErrorMessage('');
        setMessage('Sign in successful');
        await timeout(1000);
        navigate("/");
    }

    useEffect(() => {
        setMessage('')
    }, [username, password])

    const showMessage = () => {
        if (message === '') {
            return <div></div>
        }
        return <div className="alert alert-success" role="alert">
            {message}
        </div>
    }

    const showErrorMessage = () => {
        if (errorMessage === '') {
            return <div></div>
        }

        return <div className="alert alert-danger" role="alert">
            {errorMessage}
        </div>
    }

    return (<div className="container">
            <form onSubmit={onSubmit}>
                <h1>Sign In</h1>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder="Username"
                        className="form-control">
                    </input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        value={password}
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                        className="form-control">
                    </input>
                </div>
                <button className="btn btn-primary">Sign In</button>
            </form>
            {showMessage()}
            {showErrorMessage()}


        </div>)
}
export default Signin