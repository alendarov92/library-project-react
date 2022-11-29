import React from "react";

// import { CardProvider } from "./context/cardContext";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

import { useEffect, useState } from 'react'
import * as bookServices from './services/bookSevices'
import { AuthContext } from "./context/authContext";
import { BookContext } from "./context/bookContext";

import Create from "./components/Create/Create";
import Dashboard from "./components/Dashboard/Dashboard";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import MyBooks from "./components/My-Books/MyBooks";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
    const [books, setBooks] = useState([]);
    const [userData, setUserData] = useLocalStorage('userData', {});

    // const navigate = useNavigate()

    const loginHeandler = (authData) => {
        setUserData(authData)
    }
    // const registerHeandler = (authData) => {
    //     setUserData(authData)
    // }
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

        setBooks(state => [
            ...state,
            bookData,
        ])
        // navigate('/')
    }

    const bookEdit = (bookId, bookData) => {
        setBooks(state => state.map(x => x._id === bookId ? bookData : x))
    }

    const deleteBook = (bookId) => {
        setBooks(state => {
            console.log(state);

        })
    }



    return (
        <AuthContext.Provider value={{ userData, loginHeandler, logoutHeandler }}>

            <Router>
                <div id="container">
                    <Header />
                    <BookContext.Provider value={{ books, createBook,bookEdit }}>

                        <main id="site-content">

                            <Routes>
                                <Route path="/" element={<Dashboard />} />

                                <Route path="/login" element={<Login />} />

                                <Route path="/logout" element={<Logout />} />

                                <Route path="/register" element={<Register />} />

                                <Route path="/create" element={<Create />} />

                                <Route path="/myBooks/:bookId/edit" element={<Edit />} />

                                <Route path="/myBooks" element={<MyBooks />} />

                                <Route path="/myBooks/:bookId" element={<Details />} />
                            </Routes>
                        </main>
                    </BookContext.Provider>

                    <footer id="site-footer">
                        <p>@OnlineBooksLibrary</p>
                    </footer>
                </div>
            </Router>

        </AuthContext.Provider>

    );
}

export default App;
