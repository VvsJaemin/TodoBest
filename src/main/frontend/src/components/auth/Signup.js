import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useCookies} from "react-cookie";


const Signup = ({isAuthenticated, setIsAuthenticated}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [nickname, setNickname] = useState('');
    const [cookies, setCookie] = useCookies(['userName', 'accessToken']);
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    let navigate = useNavigate();

    const timeout = (delay) => {
        return new Promise(res => setTimeout(res, delay));
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/auth/signup', {username, password, nickname})
                .then((response) => {
                    console.log(response.data)
                    setCookie('userName', response.data.username)
                    setIsAuthenticated(true);
                });

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
        setNickname('');
        setErrorMessage('');
        setMessage('Sign up successful');
        await timeout(1000);
        navigate("/");
    }

    useEffect(()=>{
        setMessage('')
    },[username, password, nickname])

    const showMessage = () => {
        if(message === ''){
            return <div></div>
        }
        return <div className="alert alert-success" role="alert">
            {message}
        </div>
    }

    const showErrorMessage = () => {
        if(errorMessage === ''){
            return <div></div>
        }

        return <div className="alert alert-danger" role="alert">
            {errorMessage}
        </div>
    }

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <h1>Sign Up</h1>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder="아이디를 입력해주세요"
                        className="form-control">
                    </input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        value={password}
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        placeholder="비밀번호를 입력해주세요."
                        className="form-control">
                    </input>
                </div>
                <div className="form-group">
                    <label>NickName</label>
                    <input
                        value={nickname}
                        onChange={e => setNickname(e.target.value)}
                        placeholder="닉네임을 입력해주세요."
                        className="form-control">
                    </input>
                </div>
                <button className="btn btn-primary">Sign Up</button>
            </form>
            {showMessage()}
            {showErrorMessage()}
        </div>
    )
}

export default Signup;