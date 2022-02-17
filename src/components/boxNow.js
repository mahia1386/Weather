import React, { useEffect, useState } from "react";
import "./../style/react.css";
import "../Font/style.css";


function BoxNow() {

    //API weather
    const [tempToday, settempToday] = useState({ data: "" });
    const [data, setData] = useState({ data: "" });

    async function getTemp() {
        let tempToday = await fetch('https://api.weatherbit.io/v2.0/current?city=Berlin&country=DE&key=e18186b3a3324db780a0f350eeba7098');
        tempToday = await tempToday.json()
        settempToday(tempToday)
    }

    async function getData() {
        let data = await fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=Berlin&country=DE&key=e18186b3a3324db780a0f350eeba7098');
        data = await data.json()
        setData(data);
    }

    useEffect(() => {
        getData();
        getTemp();
    }, []);

    //Function to change the icon in changing weather conditions 
    function chengeIcon(number) {

        let icon = "";
        let code = data?.data?.[number]?.weather?.code;

        if (code === 610) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-snowy-weather-those-icons-lineal-color-those-icons-1.png";

        } else if (code === 804) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-cloudy-weather-those-icons-lineal-color-those-icons-1.png";

        } else if (code === 803 || code === 801 || code === 802) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-cloudy-weather-those-icons-lineal-color-those-icons.png";

        } else if (code === 520) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-rain-weather-those-icons-lineal-color-those-icons.png";

        } else if (code === 200 || code === 201 || code === 230 || code === 231) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-storm-weather-those-icons-lineal-color-those-icons-3.png";

        } else if (code === 202 || code === 232) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-storm-weather-those-icons-lineal-color-those-icons-1.png";

        } else if (code === 233 || code === 511) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-hail-weather-those-icons-lineal-color-those-icons.png";

        } else if (code === 300 || code === 301 || code === 500 || code === 501 || code === 522 || code === 302) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-rain-weather-those-icons-lineal-color-those-icons.png";

        } else if (code === 502 || code === 520 || code === 521 || code === 900) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-humidity-weather-those-icons-lineal-color-those-icons.png";

        } else if (code === 600 || code === 601 || code === 602 || code === 621 || code === 622) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-snow-weather-those-icons-lineal-color-those-icons.png";

        } else if (code === 611 || code === 612) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-windy-weather-those-icons-lineal-color-those-icons-2.png";

        } else if (code === 623) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-hurricane-weather-those-icons-lineal-color-those-icons.png";

        } else if (code === 700 || code === 711 || code === 721 || code === 731 || code === 741 || code === 751) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-fog-weather-those-icons-lineal-color-those-icons.png";

        } else if (code === 800) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/000000/external-sun-weather-those-icons-lineal-color-those-icons.png";

        }

        return (
            <img className="img-for-3" src={icon} alt="Icon weather" />
        );
    }

    return (
        <>
            <div className="box row" id="part-1">

                <div className="col col-12 col-md-12 col-lg-3 col-xl-3 icon-weather">
                    {chengeIcon(0)}
                </div>

                <div className="col col-12 col-md-12 col-lg-3 col-xl-3 icon-weather">

                    <p>آلمان , برلین</p>

                    <div className="row">

                        <div className="col col-5">
                            <div>
                                <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                {data.data
                                    ? <span> {Math.trunc(data.data[0].max_temp)}</span>
                                    : null
                                }
                            </div>
                            <div>
                                <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
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

                <div className="col col-12 col-md-12 col-lg-6 col-xl-6 box icon-weather">
                    {tempToday.data
                        ? <span>بر اساس آخرین داده در تاریخ {tempToday.data[0].ob_time}</span>
                        : null
                    }
                </div>

            </div>
        </>
    );
}

export default BoxNow;