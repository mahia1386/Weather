import React from "react";

import BoxToday from "./components/boxToday";
import BoxNow from "./components/boxNow";
import BoxTheNext16Days from "./components/boxTheNext16Days";

function App() {

    return (
        <>
            <header className="row" style={{ padding: "10px", backgroundColor: '#ffc107', display: 'flex' , marginLeft : "0px" , marginRight : "0px"}}>
                <div style={{ display: 'flex' }} className="col col-8">
                    <img src="https://img.icons8.com/doodle/48/000000/apple-weather.png" alt=""/>
                    <div style={{ marginRight: "10px" , paddingTop : "10px"}}>آب و هوای امروز</div>
                </div>
                <div className="col col-4">
                    <button style={{ float: "left" }} className="btn">
                        <img alt="" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-thermometer-weather-those-icons-lineal-color-those-icons.png" />
                    </button>
                </div>
            </header>
            <section className="container">
                <div className="row">
                    <div className="col col-12 col-md-12 col-lg-9 col-xl-9">
                        <BoxNow />
                        <BoxToday />
                        <BoxTheNext16Days />
                    </div>
                    <div className="col col-12 col-md-12 col-lg-3 col-xl-3">
                        <div className="box">
                            <a href="#part-1">الان</a>
                            <br />
                            <hr />
                            <a href="#part-2">آب و هوای امروز</a>
                            <br />
                            <hr />
                            <a href="#part-3">روز های آینده</a>
                        </div>
                    </div>
                </div>
            </section>
            <footer>

            </footer>
        </>
    );
}

export default App;