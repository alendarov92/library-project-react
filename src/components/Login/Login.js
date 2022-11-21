import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import * as userServices  from '../../services/userServices'

const Login = () => {
    const navigate = useNavigate()

    const { loginHeandler } = useContext(AuthContext)

    const onSubmit = (e) => {
        e.preventDefault()

        const { email, password } = Object.fromEntries(new FormData(e.target));
        
        userServices.login(email, password)
            .then(authData => {
                loginHeandler(authData);
                navigate('/');
            })
            .catch(() => {
                navigate('/register');
            })

    };


    return (
        
            <section id="login-page" className="login">
                <form id="login-form" action="" method="" onSubmit={onSubmit}>
                    <fieldset>
                        <legend>Login Form</legend>
                        <p className="field">
                            <label htmlFor="email">Email</label>
                            <span className="input">
                                <input type="text" name="email" id="email" placeholder="Email" />
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="password">Password</label>
                            <span className="input">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                />
                            </span>
                        </p>
                        <input className="button submit" type="submit" value="Login" />
                    </fieldset>
                </form>
            </section>
       
    )
}

export default Login