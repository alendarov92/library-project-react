import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <header id="site-header">
                {/* Navigation */}
                <nav className="navbar">
                    <section className="navbar-dashboard">
                        <Link to="/">Dashboard</Link>
                        {/* Guest users */}
                        <div id="guest">
                            <Link className="button" to="/login">
                                Login
                            </Link>
                            <Link className="button" to="/register">
                                Register
                            </Link>
                        </div>
                        {/* Logged-in users */}
                        <div id="user">
                            <span>
                                Welcome, {"{"}email{"}"}
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
                    </section>
                </nav>
            </header>
        </div>
    )
}

export default Header