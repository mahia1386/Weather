import React, { useState, useEffect } from "react";
import "./../style/react.css";
import "./../Font/style.css";

function BoxToday() {

    //API weather

    //Data for the next 16 days 
    const [data, setData] = useState({ data: "" });

    async function getData() {
        let data = await fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=Berlin&country=DE&key=e18186b3a3324db780a0f350eeba7098');
        data = await data.json()
        setData(data);
    }

    //Data for now 
    const [tempToday, settempToday] = useState({ data: "" });

    async function getTemp() {
        let tempToday = await fetch('https://api.weatherbit.io/v2.0/current?city=Berlin&country=DE&key=e18186b3a3324db780a0f350eeba7098');
        tempToday = await tempToday.json()
        settempToday(tempToday)
    }

    useEffect(() => {
        getData();
        getTemp();
    }, [])

    return (
        <div className="box box-today" id="part-2">
            <div className="row">
                <h5 className="col col-12 col-md-12 col-lg-7 col-xl-7" style={{ textAlign: "right" }}>آب و هوای امروز برلین</h5>
                <br />
                <div className="col col-12 col-md-12 col-lg-5 col-xl-5 row">
                    <div className="col col-6 icon-weather">
                        {tempToday.data
                            ? <span>
                                {tempToday.data[0].sunset}
                                <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-sunset-weather-those-icons-lineal-color-those-icons.png" />
                            </span>
                            : null}
                    </div>
                    <div className="col col-6 icon-weather">
                        {tempToday.data
                            ? <span>
                                {tempToday.data[0].sunrise}
                                <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-sunrise-weather-those-icons-lineal-color-those-icons.png" />
                            </span>
                            : null}
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col col-12 col-md-12 col-lg-6 col-xl-6 Details-today-weather ">
                    <span>
                        رطوبت:
                            {data.data
                            ? <span> {Math.trunc(data.data[0].rh)} %</span>
                            : null}
                    </span>
                    <br />
                    <hr />
                    <span>
                        فشار:
                            {data.data
                            ? <span> {Math.trunc(data.data[0].pres)} </span>
                            : null}
                    </span>
                    <br />
                    <hr />
                    <span>
                        قابلیت دید:
                            {data.data
                            ? <span> {Math.trunc(data.data[0].vis)} </span>
                            : null}
                    </span>
                    <br />
                    <hr />
                    <span>
                        احتمال بارش :
                            {data.data
                            ? <span> {Math.trunc(data.data[0].pop)} %</span>
                            : null}
                    </span>
                    <br />
                    <br />
                </div>
                <div className="col col-12 col-md-12 col-lg-6 col-xl-6 Details-today-weather ">
                    <span>
                        باد:
                            {data.data
                            ? <span> {Math.round(data.data[0].wind_spd)} کیلومتر/ساعت</span>
                            : null}
                    </span>
                    <br />
                    <hr />
                    <span>
                        نقطه شبنم:
                            {data.data
                            ? <span> {Math.trunc(data.data[0].dewpt)} </span>
                            : null}
                    </span>
                    <br />
                    <hr />
                    <span>
                        شاخص فرابنفش:
                        {data.data
                            ? <span> {Math.trunc(data.data[0].uv)} </span>
                            : null}
                    </span>
                    <br />
                    <hr />
                    <span>
                        جهت باد:
                       {data.data
                            ? <span> {data.data[0].wind_cdir} </span>
                            : null}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default BoxToday;