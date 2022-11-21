import React from "react";

// import { CardProvider } from "./context/cardContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useEffect, useState } from 'react'
import * as bookServices from './services/bookSevices'
import { AuthContext } from "./context/authContext";

import Create from "./components/Create/Create";
import Dashboard from "./components/Dashboard/Dashboard";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import MyBooks from "./components/My-Books/MyBooks";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";

function App() {
    const [books, setBooks] = useState([]);
    const [userData, setUserData] = useState({});

    const loginHeandler = (authData) => {
        setUserData(authData)
    }
    const logoutHeandler = () => {
        setUserData({});
    }


    useEffect(() => {
        bookServices.getAll()
            .then(result => {
                setBooks(result)
            })
    }, []);

    const createBook = (bookData) => {
        fetch('http://localhost:3030/data/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                bookData
            }
        })
            .then((response) => response.json())
            .then(result => {
                console.log(result);
                setBooks(state => [
                    ...state,
                    result,
                ])
            })


    }

    return (
        <AuthContext.Provider value={{ userData, loginHeandler, logoutHeandler }}>

            <Router>
                <div id="container">
                    <Header />
                    <main id="site-content">

                        <Routes>
                            <Route path="/" element={<Dashboard books={books} />} />

                            <Route path="/login" element={<Login />} />

                            <Route path="/logout" element={<Logout />} />

                            <Route path="/register" element={<Register />} />

                            <Route path="/create" element={<Create createBook={createBook} />} />

                            <Route path="/edit" element={<Edit />} />

                            <Route path="/myBooks" element={<MyBooks books={books} />} />

                            <Route path="/myBooks/:bookId" element={<Details books={books} />} />
                        </Routes>
                    </main>

                    <footer id="site-footer">
                        <p>@OnlineBooksLibrary</p>
                    </footer>
                </div>
            </Router>

        </AuthContext.Provider>

    );
}

export default App;
