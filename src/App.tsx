import React from "react";
import NavBar from "./sections/NavBar";
import Wrapper from "./sections/Wrapper";
import Footer from "./sections/Footer";
import Background from "./components/Background";
import "./scss/index.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Search from "./pages/Search";
import MyList from "./pages/MyList";
import Compare from "./pages/Compare";
import Pokemon from "./pages/Pokemon";

function App() {
    return (
        <div className="main-container">
            <Background />
            <BrowserRouter>
                <div className="app">
                    <NavBar />
                    <Routes>
                        <Route element={<Search />} path="/search" />
                        <Route element={<MyList />} path="/list" />
                        <Route element={<Compare />} path="/compare" />
                        <Route element={<Pokemon />} path="/pokemon/:id" />
                        <Route
                            element={<Navigate to="/pokemon/1" />}
                            path="*"
                        />
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
