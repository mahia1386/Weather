import React, { useEffect, useState } from "react";
import appStyle from "./../style/react.css";
import style from '../Font/style.css';

function BoxNew() {

    const [data, setData] = useState({ data: "" });
    const [tempToday, settempToday] = useState({ data: "" });

    async function getData() {
        let data = await fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=Berlin&country=DE&key=e18186b3a3324db780a0f350eeba7098');
        data = await data.json()
        console.log(data);
        setData(data);
    }

    async function getTemp() {
        let tempToday = await fetch('https://api.weatherbit.io/v2.0/current?city=Berlin&country=DE&key=e18186b3a3324db780a0f350eeba7098');
        tempToday = await tempToday.json()
        console.log(tempToday);
        settempToday(tempToday)
    }

    useEffect(() => {
        getData();
        getTemp();
    }, []);

    let shiftIcon = () => {
        let icon = "";
        let iconText = data?.data?.[0]?.weather?.code;

        if (iconText == 610) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-snowy-weather-those-icons-lineal-color-those-icons-1.png";

        } else if (iconText == 804) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-cloudy-weather-those-icons-lineal-color-those-icons-1.png";

        } else if (iconText == 803 || iconText == 801 || iconText == 802) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-cloudy-weather-those-icons-lineal-color-those-icons.png";

        } else if (iconText == 520) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-rain-weather-those-icons-lineal-color-those-icons.png";

        } else if (iconText == 200 || iconText == 201 || iconText == 230 || iconText == 231) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-storm-weather-those-icons-lineal-color-those-icons-3.png";

        } else if (iconText == 202 || iconText == 232) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-storm-weather-those-icons-lineal-color-those-icons-1.png";

        } else if (iconText == 233 || iconText == 511) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-hail-weather-those-icons-lineal-color-those-icons.png";

        } else if (iconText == 300 || iconText == 301 || iconText == 500 || iconText == 501 || iconText == 522 || iconText == 302) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-rain-weather-those-icons-lineal-color-those-icons.png";

        } else if (iconText == 502 || iconText == 520 || iconText == 521 || iconText == 900) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-humidity-weather-those-icons-lineal-color-those-icons.png";

        } else if (iconText == 600 || iconText == 601 || iconText == 602 || iconText == 621 || iconText == 622) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-snow-weather-those-icons-lineal-color-those-icons.png";

        } else if (iconText == 611 || iconText == 612) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-windy-weather-those-icons-lineal-color-those-icons-2.png";

        } else if (iconText == 623) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-hurricane-weather-those-icons-lineal-color-those-icons.png";

        } else if (iconText == 700 || iconText == 711 || iconText == 721 || iconText == 731 || iconText == 741 || iconText == 751) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-fog-weather-those-icons-lineal-color-those-icons.png";

        } else if (iconText == 800) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-sun-weather-those-icons-lineal-color-those-icons.png";

        } else {
            return null;
        }

        return (
            <img src={icon} />
        );
    }

    return (
        <>
            <div className="box box-new row">
                <div className="col col-2">
                    {shiftIcon()}
                </div>
                <div className="col col-2">
                    <p>آلمان , برلین</p>
                    <div className="row">
                        <div className="col col-5">
                            <div>
                                <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                {data.data
                                    ? <span> {Math.trunc(data.data[0].max_temp)}</span>
                                    : null
                                }
                            </div>
                            <div>
                                <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
                                {data.data
                                    ? <span>{Math.trunc(data.data[0].min_temp)}</span>
                                    : null
                                }
                            </div>
                        </div>
                        <div className="col col-7">
                            {
                                data.data
                                    ? <h1>{Math.trunc(data.data[0].temp)}°</h1>
                                    : null
                            }
                        </div>
                    </div>
                </div>
                <div className="col col-6 box" style={{ marginTop: "0px" }}>
                    {tempToday.data
                        ? <span>بر اساس اخرین داده در تاریخ {tempToday.data[0].ob_time}</span>
                        : null
                    }
                </div>
            </div>
        </>
    );
}

export default BoxNew;