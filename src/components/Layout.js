import React from "react";
import { Link, Outlet } from "react-router-dom";;

function Layout() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-warning navbar-dark nav-style">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navb">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/about" className="nav-link link-style">درباره ما</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link link-style">خانه</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-brand" style={{ display: "flex" }}>
                    <div className="logo-text">آب و هوای امروز</div>
                    <img src="https://img.icons8.com/doodle/48/000000/apple-weather.png" alt="logo" className="logo" />
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default Layout;