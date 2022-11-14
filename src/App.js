import React from "react";

import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Create from "./components/Create/Create";

import Dashboard from "./components/Dashboard/Dashboard";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import MyBooks from "./components/My-Books/MyBooks";
import Register from "./components/Register/Register";
import { CardProvider } from "./context/cardContext";

function App() {
    return (
        <CardProvider>
            <Router>
                <div id="container">
                    <Header />
                    <main id="site-content">

                        <Routes>
                            <Route path="/" element={<Dashboard />} />

                            <Route path="/login" element={<Login />} />


                            <Route path="/register" element={<Register />} />


                            <Route path="/details" element={<Details />} />


                            <Route path="/create" element={<Create />} />


                            <Route path="/edit" element={<Edit />} />


                            <Route path="/myBooks" element={<MyBooks />} />
                        </Routes>
                    </main>

                    <footer id="site-footer">
                        <p>@OnlineBooksLibrary</p>
                    </footer>
                </div>
            </Router>

        </CardProvider>
    );
}

export default App;
