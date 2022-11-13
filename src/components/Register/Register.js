import React from 'react'

function Register() {

    const url = 'http://localhost:3030/users/register'

    const onSubmit = (e) => {
        e.preventDefault()

        const { email, password, confirmPass } = Object.fromEntries(new FormData(e.target))

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: {
                email,
                password,
                confirmPass
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })


    }
    return (
        <div>
            <section id="register-page" className="register">
                <form id="register-form" action="" method="" onSubmit={onSubmit}>
                    <fieldset>
                        <legend>Register Form</legend>
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
                        <p className="field">
                            <label htmlFor="repeat-pass">Repeat Password</label>
                            <span className="input">
                                <input
                                    type="password"
                                    name="confirmPass"
                                    id="repeat-pass"
                                    placeholder="Repeat Password"
                                />
                            </span>
                        </p>
                        <input
                            className="button submit"
                            type="submit"
                            value="Register"
                        />
                    </fieldset>
                </form>
            </section>
        </div>
    )
}

export default Register