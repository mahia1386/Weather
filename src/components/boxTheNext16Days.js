import React, { useEffect, useState } from "react";
import "./../style/react.css";
import "./../Font/style.css";


function BoxTheNext16Days() {

    //API weather
    const [data, setData] = useState({ data: "" });
    const [tempToday, settempToday] = useState({ data: "" });

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

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-snowy-weather-those-icons-lineal-color-those-icons-1.png";

        } else if (code === 804) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-cloudy-weather-those-icons-lineal-color-those-icons-1.png";

        } else if (code === 803 || code === 801 || code === 802) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-cloudy-weather-those-icons-lineal-color-those-icons.png";

        } else if (code === 520) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-rain-weather-those-icons-lineal-color-those-icons.png";

        } else if (code === 200 || code === 201 || code === 230 || code === 231) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-storm-weather-those-icons-lineal-color-those-icons-3.png";

        } else if (code === 202 || code === 232) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-storm-weather-those-icons-lineal-color-those-icons-1.png";

        } else if (code === 233 || code === 511) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-hail-weather-those-icons-lineal-color-those-icons.png";

        } else if (code === 300 || code === 301 || code === 500 || code === 501 || code === 522 || code === 302) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-rain-weather-those-icons-lineal-color-those-icons.png";

        } else if (code === 502 || code === 520 || code === 521 || code === 900) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-humidity-weather-those-icons-lineal-color-those-icons.png";

        } else if (code === 600 || code === 601 || code === 602 || code === 621 || code === 622) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-snow-weather-those-icons-lineal-color-those-icons.png";

        } else if (code === 611 || code === 612) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-windy-weather-those-icons-lineal-color-those-icons-2.png";

        } else if (code === 623) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-hurricane-weather-those-icons-lineal-color-those-icons.png";

        } else if (code === 700 || code === 711 || code === 721 || code === 731 || code === 741 || code === 751) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-fog-weather-those-icons-lineal-color-those-icons.png";

        } else if (code === 800) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-sun-weather-those-icons-lineal-color-those-icons.png";

        }

        return (
            <img className="img-for-3" src={icon} alt="Icon weather" />
        );
    }

    return (
        <div className="box box-The-next-16-days" id="part-3">

            <h5>???? ?? ????????  16 ?????? ??????????</h5>

            <div className="row">

                <div className="col col-6 col-md-6 col-lg-3 col-xl-3 style-for-days">
                    <div className="box box-days-Section3 ">
                        {
                            data.data
                                ? <p>{data.data[1].datetime}</p>
                                : null
                        }
                        <br />
                        {chengeIcon(1)}
                        <br />
                        <br />
                        <div className="max-min-for-days">
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[1].max_temp)}??</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[1].min_temp)}??</p>
                                    </div>
                                    : null
                            }
                        </div>
                        {
                            data.data
                                ? <span>{data.data[1].pop}%</span>
                                : null
                        }
                        <br />
                        <br />
                        <button type="button" className="btn btn-warning btn-be-days" data-toggle="collapse" data-target="#datails1">????????????</button>
                        <div id="datails1" className="collapse">
                            <div className="details">
                                <span className="day-details">
                                    ?????? :
                                        {data.data
                                        ? <span className="span-from-1-2"> {Math.round(data.data[1].wind_spd)} ??????????????/????????</span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">

                                    ?????? ?????? :
                                        {data.data
                                        ? <span className="span-from-1-2"> {data.data[1].wind_cdir} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    ???????? ??????????????:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[1].uv)} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    ??????????:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[1].rh)} %</span>
                                        : null}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col col-6 col-md-6 col-lg-3 col-xl-3 style-for-days">
                    <div className="box box-days-Section3 ">
                        {
                            data.data
                                ? <p>{data.data[2].datetime}</p>
                                : null
                        }
                        <br />
                        {chengeIcon(2)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[2].max_temp)}??</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[2].min_temp)}??</p>
                                    </div>
                                    : null
                            }
                        </div>
                        {
                            data.data
                                ? <span>{data.data[2].pop}%</span>
                                : null
                        }
                        <br />
                        <br />
                        <button data-toggle="collapse" data-target="#details2" type="button" className="btn btn-warning btn-be-days">????????????</button>
                        <div className="collapse" id="details2">
                            <div className="details">
                                <span className="day-details">
                                    ?????? :
                                        {data.data
                                        ? <span className="span-from-1-2"> {Math.round(data.data[2].wind_spd)} ??????????????/????????</span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    ?????? ?????? :
                                        {data.data
                                        ? <span className="span-from-1-2"> {data.data[2].wind_cdir} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    ???????? ??????????????:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[2].uv)} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    ??????????:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[2].rh)} %</span>
                                        : null}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col col-6 col-md-6 col-lg-3 col-xl-3 style-for-days">
                    <div className="box box-days-Section3 ">
                        {
                            data.data
                                ? <p>{data.data[3].datetime}</p>
                                : null
                        }
                        <br />
                        {chengeIcon(3)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[3].max_temp)}??</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[3].min_temp)}??</p>
                                    </div>
                                    : null
                            }
                        </div>
                        {
                            data.data
                                ? <span>{data.data[3].pop}%</span>
                                : null
                        }
                        <br />
                        <br />
                        <button data-toggle="collapse" data-target="#details3" type="button" className="btn btn-warning btn-be-days">????????????</button>
                        <div className="collapse" id="details3">
                            <div className="details">
                                <span className="day-details">
                                    ?????? :
                                        {data.data
                                        ? <span className="span-from-1-2"> {Math.round(data.data[3].wind_spd)} ??????????????/????????</span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    ?????? ?????? :
                                        {data.data
                                        ? <span className="span-from-1-2"> {data.data[3].wind_cdir} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    ???????? ??????????????:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[3].uv)} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    ??????????:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[3].rh)} %</span>
                                        : null}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col col-6 col-md-6 col-lg-3 col-xl-3 style-for-days">
                    <div className="box box-days-Section3 ">
                        {
                            data.data
                                ? <p>{data.data[4].datetime}</p>
                                : null
                        }
                        <br />
                        {chengeIcon(4)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[4].max_temp)}??</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[4].min_temp)}??</p>
                                    </div>
                                    : null
                            }
                        </div>
                        {
                            data.data
                                ? <span>{data.data[4].pop}%</span>
                                : null
                        }
                        <br />
                        <br />
                        <button data-toggle="collapse" data-target="#details4" type="button" className="btn btn-warning btn-be-days">????????????</button>
                        <div className="collapse" id="details4">
                            <div className="details">
                                <span className="day-details">
                                    ?????? :
                                        {data.data
                                        ? <span className="span-from-1-2"> {Math.round(data.data[4].wind_spd)} ??????????????/????????</span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    ?????? ?????? :
                                        {data.data
                                        ? <span className="span-from-1-2"> {data.data[4].wind_cdir} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    ???????? ??????????????:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[4].uv)} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    ??????????:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[4].rh)} %</span>
                                        : null}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <br />

            <button className="btn btn-warning" data-toggle="collapse" data-target="#demo">???? ?? ???????? ?????? ?????? ??????????</button>

            <br />

            <div id="demo" className="collapse row">

                {data.data.map((item, index) => <div className="col col-6 col-md-6 col-lg-3 col-xl-3 style-for-days">
                    <div className="box box-days-Section3 ">
                        {
                            item
                                ? <p>{item.datetime}</p>
                                : null
                        }
                        <br />
                        {chengeIcon(5)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            {
                                item
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(item.max_temp)}??</p>
                                    </div>
                                    : null
                            }
                            {
                                item
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
                                        <p>{Math.trunc(item.min_temp)}??</p>
                                    </div>
                                    : null
                            }
                        </div>
                        {
                            item
                                ? <span>{item.pop}%</span>
                                : null
                        }
                        <br />
                        <br />
                        <button data-toggle="collapse" data-target="#details5" type="button" className="btn btn-warning btn-be-days">????????????</button>
                        <div className="collapse" id="details5">
                            <div className="details">
                                <span className="day-details">
                                    ?????? :
                                        {item
                                        ? <span className="span-from-1-2"> {Math.round(item.wind_spd)} ??????????????/????????</span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    ?????? ?????? :
                                        {item
                                        ? <span className="span-from-1-2"> {item.wind_cdir} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    ???????? ??????????????:
                                            {item
                                        ? <span className="span-from-1-2"> {Math.trunc(item.uv)} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    ??????????:
                                            {item
                                        ? <span className="span-from-1-2"> {Math.trunc(item.rh)} %</span>
                                        : null}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>)}

            </div>

        </div>
    );
}

export default BoxTheNext16Days;
