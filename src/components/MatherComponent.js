import React from "react";
import BoxToday from "./BoxToday";
import BoxNow from "./BoxNow";
import BoxTheNext16Days from "./BoxTheNext16Days";


function MatherComponent() {
    return (
        <>
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
        </>
    );
}

export default MatherComponent;