import { UserContext } from '../../context/UserContext';
import authService from '../../services/authService';
import { Button, Input } from "../UIElements";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import style from './Login.module.scss';
import { setCookie } from 'nookies';


export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);
    const [validate, setShowValidate] = useState(false);

    const usernameChange = (value) => {
        setUsername(value.target.value)
    }

    const passwordChange = (value) => {
        setPassword(value.target.value)
    }

    const login = async (e) => {
        e.preventDefault();

        if (username.length === 0 || password.length === 0) {
            setShowValidate(true);
            return;
        }

        try {
            let body = {
                username: username,
                password: password
            }
            const { payload } = await authService.login(body);
            setCookie(null, 'NizekToken', payload.token, {
                maxAge: '31536000',
                path: '/',
            });
            setUser(payload.user);
            navigate("/categories")
        } catch (e) {
            console.log(e)
        } finally {
            setShowValidate(false)
        }
    }

    return (
        <div className={style.root}>
            <h3 className={style.topBar}>Login</h3>
            {validate && <p className={style.validateMsg}>please enter username and password!</p>}
            <form className={style.loginForm} onSubmit={login}>
                <Input type='text' label='Username' onChange={usernameChange} />
                <Input type='password' label='Password' onChange={passwordChange} />
                <Button onClick={login} style={{ float: 'right' }}>Submit</Button>
            </form>
        </div>
    )
}