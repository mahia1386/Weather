import React from "react";
import { Link, Outlet } from "react-router-dom";;

function Layout() {
    return (
        <>
            <header className="row" style={{
                padding: "10px",
                backgroundColor: '#ffc107',
                display: 'flex',
                marginLeft: "0px",
                marginRight: "0px",
                color: "black"
            }}>

                <div style={{ display: 'flex' }} className="col col-2">
                    <img src="https://img.icons8.com/doodle/48/000000/apple-weather.png" alt="logo" />
                    <div style={{ marginRight: "10px", paddingTop: "10px" }}>آب و هوای امروز</div>
                </div>

                <div className="col col-10" style={{ marginTop: "12px"}}>
                    <Link to="/about" style={{ color: "black"}}>درباره ما</Link>
                    <Link to="/">خانه</Link>
                </div>
                
            </header>
            <Outlet />
        </>
    );
}

export default Layout;