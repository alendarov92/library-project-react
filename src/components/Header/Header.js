import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'

function Header() {
    const { userData } = useContext(AuthContext)
    return (
        <div>
            <header id="site-header">

                <nav className="navbar">

                    <section className="navbar-dashboard">
                        <Link to="/">Dashboard</Link>

                        {userData.email
                            ? <div id="user">
                                <span>
                                    Welcome: {userData.email}
                                </span>
                                <Link className="button" to="/myBooks">
                                    My Books
                                </Link>
                                <Link className="button" to="/create">
                                    Add Book
                                </Link>
                                <Link className="button" to="/logout">
                                    Logout
                                </Link>
                            </div>
                            : <div id="guest">
                                <Link className="button" to="/login">
                                    Login
                                </Link>
                                <Link className="button" to="/register">
                                    Register
                                </Link>
                            </div>}
                        {/* Guest users */}


                        {/* Logged-in users */}

                    </section>
                </nav>
            </header>
        </div>
    )
}

export default Header