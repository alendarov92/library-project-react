import React from "react";

import { CardProvider } from "./context/cardContext";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

import { useEffect, useState } from 'react'
import * as bookServices from './services/bookSevices'

import Create from "./components/Create/Create";
import Dashboard from "./components/Dashboard/Dashboard";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import MyBooks from "./components/My-Books/MyBooks";
import Register from "./components/Register/Register";

function App() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        bookServices.getAll()
            .then(result => {
                setBooks(result)
            })
    }, []);

    return (
        // <CardProvider>
        <Router>
            <div id="container">
                <Header />
                <main id="site-content">

                    <Routes>
                        <Route path="/" element={<Dashboard books={books} />} />

                        <Route path="/login" element={<Login />} />

                        <Route path="/register" element={<Register />} />

                        <Route path="/create" element={<Create />} />

                        <Route path="/edit" element={<Edit />} />

                        <Route path="/myBooks" element={<MyBooks books={books} />} />

                        <Route path="/myBooks/:bookId" element={<Details books={books}/>} />
                    </Routes>
                </main>

                <footer id="site-footer">
                    <p>@OnlineBooksLibrary</p>
                </footer>
            </div>
        </Router>

        // </CardProvider>
    );
}

export default App;
