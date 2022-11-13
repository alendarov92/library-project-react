import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const url = 'http://localhost:3030/users/login'

    

    const onSubmit = (e) => {
        e.preventDefault()

        const { email, password } = Object.fromEntries(new FormData(e.target))
        

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                
                password
            })
        })
            .then(res => res.json())
            .then(user => {
                console.log(user);
                localStorage.setItem('_id', user._id)
                localStorage.setItem('username', user.username)
                localStorage.setItem('accessToken', user.accessToken)
            })
            .catch(err => {
                console.error('err')
            })

    }


    return (
        <div>
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
        </div>
    )
}

export default Login