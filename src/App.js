import React from "react";

import BoxToday from "./components/boxToday";
import BoxNew from "./components/boxNew";
import BoxTheNext16Days from "./components/boxTheNext16Days";

function App() {

    return (
        <>
            <div style={{ padding: "10px", backgroundColor: '#ffc107', display: 'flex' }}>
                <div style={{ display: 'flex' }}>
                    <img src="https://img.icons8.com/doodle/48/000000/apple-weather.png"/>
                    <div style={{ marginRight: "10px" , paddingTop : "10px"}}>آب و هوای امروز</div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-md-12 col-lg-9 col-xl-9">
                        <BoxNew />
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
            </div>
        </>
    );
}

export default App;