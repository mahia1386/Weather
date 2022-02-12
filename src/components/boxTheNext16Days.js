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

            <h5>آب و هوای  16 روز آینده</h5>

            <div className="row">

                <div className="col col-6 col-md-6 col-lg-3 col-xl-3 style-for-days">
                    <div className="box box-days-Section3 ">
                        {
                            data.data
                                ? <h5>{data.data[1].datetime}</h5>
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
                                        <p>{Math.trunc(data.data[1].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[1].min_temp)}°</p>
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
                        <button type="button" className="btn btn-warning btn-be-days" data-toggle="collapse" data-target="#datails1">جزئیات</button>
                        <div id="datails1" class="collapse">
                            <div className="details">
                                <span className="day-details">
                                    باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {Math.round(data.data[1].wind_spd)} کیلومتر/ساعت</span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">

                                    جهت باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {data.data[1].wind_cdir} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    شاخص فرابنفش:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[1].uv)} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    رطوبت:
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
                        <h5>{
                            data.data
                                ? <h5>{data.data[2].datetime}</h5>
                                : null
                        }</h5>
                        <br />
                        {chengeIcon(2)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[2].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[2].min_temp)}°</p>
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
                        <button data-toggle="collapse" data-target="#details2" type="button" className="btn btn-warning btn-be-days">جزئیات</button>
                        <div className="collapse" id="details2">
                            <div className="details">
                                <span className="day-details">
                                    باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {Math.round(data.data[2].wind_spd)} کیلومتر/ساعت</span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    جهت باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {data.data[2].wind_cdir} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    شاخص فرابنفش:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[2].uv)} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    رطوبت:
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
                        <h5>{
                            data.data
                                ? <h5>{data.data[3].datetime}</h5>
                                : null
                        }</h5>
                        <br />
                        {chengeIcon(3)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[3].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[3].min_temp)}°</p>
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
                        <button data-toggle="collapse" data-target="#details3" type="button" className="btn btn-warning btn-be-days">جزئیات</button>
                        <div className="collapse" id="details3">
                            <div className="details">
                                <span className="day-details">
                                    باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {Math.round(data.data[3].wind_spd)} کیلومتر/ساعت</span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    جهت باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {data.data[3].wind_cdir} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    شاخص فرابنفش:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[3].uv)} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    رطوبت:
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
                        <h5>{
                            data.data
                                ? <h5>{data.data[4].datetime}</h5>
                                : null
                        }</h5>
                        <br />
                        {chengeIcon(4)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[4].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[4].min_temp)}°</p>
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
                        <button data-toggle="collapse" data-target="#details4" type="button" className="btn btn-warning btn-be-days">جزئیات</button>
                        <div className="collapse" id="details4">
                            <div className="details">
                                <span className="day-details">
                                    باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {Math.round(data.data[4].wind_spd)} کیلومتر/ساعت</span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    جهت باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {data.data[4].wind_cdir} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    شاخص فرابنفش:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[4].uv)} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    رطوبت:
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

            <button className="btn btn-warning" data-toggle="collapse" data-target="#demo">آب و هوای روز های آینده</button>

            <br />

            <div id="demo" class="collapse row">

                <div className="col col-6 col-md-6 col-lg-3 col-xl-3 style-for-days">
                    <div className="box box-days-Section3 ">
                        {
                            data.data
                                ? <h5>{data.data[5].datetime}</h5>
                                : null
                        }
                        <br />
                        {chengeIcon(5)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[5].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[5].min_temp)}°</p>
                                    </div>
                                    : null
                            }
                        </div>
                        {
                            data.data
                                ? <span>{data.data[5].pop}%</span>
                                : null
                        }
                        <br />
                        <br />
                        <button data-toggle="collapse" data-target="#details5" type="button" className="btn btn-warning btn-be-days">جزئیات</button>
                        <div className="collapse" id="details5">
                            <div className="details">
                                <span className="day-details">
                                    باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {Math.round(data.data[5].wind_spd)} کیلومتر/ساعت</span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    جهت باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {data.data[5].wind_cdir} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    شاخص فرابنفش:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[5].uv)} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    رطوبت:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[5].rh)} %</span>
                                        : null}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col col-6 col-md-6 col-lg-3 col-xl-3 style-for-days">
                    <div className="box box-days-Section3 ">
                        <h5>{
                            data.data
                                ? <h5>{data.data[6].datetime}</h5>
                                : null
                        }</h5>
                        <br />
                        {chengeIcon(6)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[6].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[6].min_temp)}°</p>
                                    </div>
                                    : null
                            }
                        </div>
                        {
                            data.data
                                ? <span>{data.data[6].pop}%</span>
                                : null
                        }
                        <br />
                        <br />
                        <button data-toggle="collapse" data-target="#details6" type="button" className="btn btn-warning btn-be-days">جزئیات</button>
                        <div className="collapse" id="details6">
                            <div className="details">
                                <span className="day-details">
                                    باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {Math.round(data.data[6].wind_spd)} کیلومتر/ساعت</span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    جهت باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {data.data[6].wind_cdir} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    شاخص فرابنفش:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[6].uv)} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    رطوبت:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[6].rh)} %</span>
                                        : null}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col col-6 col-md-6 col-lg-3 col-xl-3 style-for-days">
                    <div className="box box-days-Section3 ">
                        <h5>{
                            data.data
                                ? <h5>{data.data[7].datetime}</h5>
                                : null
                        }</h5>
                        <br />
                        {chengeIcon(7)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[7].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[7].min_temp)}°</p>
                                    </div>
                                    : null
                            }
                        </div>
                        {
                            data.data
                                ? <span>{data.data[7].pop}%</span>
                                : null
                        }
                        <br />
                        <br />
                        <button data-toggle="collapse" data-target="#details7" type="button" className="btn btn-warning btn-be-days">جزئیات</button>
                        <div className="collapse" id="details7">
                            <div className="details">
                                <span className="day-details">
                                    باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {Math.round(data.data[7].wind_spd)} کیلومتر/ساعت</span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    جهت باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {data.data[7].wind_cdir} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    شاخص فرابنفش:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[7].uv)} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    رطوبت:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[7].rh)} %</span>
                                        : null}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col col-6 col-md-6 col-lg-3 col-xl-3 style-for-days">
                    <div className="box box-days-Section3 ">
                        <h5>{
                            data.data
                                ? <h5>{data.data[8].datetime}</h5>
                                : null
                        }</h5>
                        <br />
                        {chengeIcon(8)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[8].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[5].min_temp)}°</p>
                                    </div>
                                    : null
                            }
                        </div>
                        {
                            data.data
                                ? <span>{data.data[8].pop}%</span>
                                : null
                        }
                        <br />
                        <br />
                        <button data-toggle="collapse" data-target="#details8" type="button" className="btn btn-warning btn-be-days">جزئیات</button>
                        <div className="collapse" id="details8">
                            <div className="details">
                                <span className="day-details">
                                    باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {Math.round(data.data[8].wind_spd)} کیلومتر/ساعت</span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    جهت باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {data.data[8].wind_cdir} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    شاخص فرابنفش:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[8].uv)} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    رطوبت:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[8].rh)} %</span>
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
                                ? <h5>{data.data[9].datetime}</h5>
                                : null
                        }
                        <br />
                        {chengeIcon(9)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[9].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[9].min_temp)}°</p>
                                    </div>
                                    : null
                            }
                        </div>
                        {
                            data.data
                                ? <span>{data.data[9].pop}%</span>
                                : null
                        }
                        <br />
                        <br />
                        <button data-toggle="collapse" data-target="#details9" type="button" className="btn btn-warning btn-be-days">جزئیات</button>
                        <div className="collapse" id="details9">
                            <div className="details">
                                <span className="day-details">
                                    باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {Math.round(data.data[9].wind_spd)} کیلومتر/ساعت</span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    جهت باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {data.data[9].wind_cdir} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    شاخص فرابنفش:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[9].uv)} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    رطوبت:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[9].rh)} %</span>
                                        : null}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col col-6 col-md-6 col-lg-3 col-xl-3 style-for-days">
                    <div className="box box-days-Section3 ">
                        <h5>{
                            data.data
                                ? <h5>{data.data[10].datetime}</h5>
                                : null
                        }</h5>
                        <br />
                        {chengeIcon(10)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[10].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[10].min_temp)}°</p>
                                    </div>
                                    : null
                            }
                        </div>
                        {
                            data.data
                                ? <span>{data.data[10].pop}%</span>
                                : null
                        }
                        <br />
                        <br />
                        <button data-toggle="collapse" data-target="#details10" type="button" className="btn btn-warning btn-be-days">جزئیات</button>
                        <div className="collapse" id="details10">
                            <div className="details">
                                <span className="day-details">
                                    باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {Math.round(data.data[10].wind_spd)} کیلومتر/ساعت</span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    جهت باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {data.data[10].wind_cdir} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    شاخص فرابنفش:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[10].uv)} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    رطوبت:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[10].rh)} %</span>
                                        : null}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col col-6 col-md-6 col-lg-3 col-xl-3 style-for-days">
                    <div className="box box-days-Section3 ">
                        <h5>{
                            data.data
                                ? <h5>{data.data[11].datetime}</h5>
                                : null
                        }</h5>
                        <br />
                        {chengeIcon(11)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[11].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[11].min_temp)}°</p>
                                    </div>
                                    : null
                            }
                        </div>
                        {
                            data.data
                                ? <span>{data.data[11].pop}%</span>
                                : null
                        }
                        <br />
                        <br />
                        <button data-toggle="collapse" data-target="#details11" type="button" className="btn btn-warning btn-be-days">جزئیات</button>
                        <div className="collapse" id="details11">
                            <div className="details">
                                <span className="day-details">
                                    باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {Math.round(data.data[11].wind_spd)} کیلومتر/ساعت</span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    جهت باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {data.data[11].wind_cdir} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    شاخص فرابنفش:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[11].uv)} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    رطوبت:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[11].rh)} %</span>
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
                                ? <h5>{data.data[12].datetime}</h5>
                                : null
                        }
                        <br />
                        {chengeIcon(12)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[12].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[12].min_temp)}°</p>
                                    </div>
                                    : null
                            }
                        </div>
                        {
                            data.data
                                ? <span>{data.data[12].pop}%</span>
                                : null
                        }
                        <br />
                        <br />
                        <button data-toggle="collapse" data-target="#details12" type="button" className="btn btn-warning btn-be-days">جزئیات</button>
                        <div className="collapse" id="details12">
                            <div className="details">
                                <span className="day-details">
                                    باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {Math.round(data.data[12].wind_spd)} کیلومتر/ساعت</span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    جهت باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {data.data[12].wind_cdir} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    شاخص فرابنفش:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[12].uv)} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    رطوبت:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[12].rh)} %</span>
                                        : null}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col col-6 col-md-6 col-lg-3 col-xl-3 style-for-days">
                    <div className="box box-days-Section3 ">
                        <h5>{
                            data.data
                                ? <h5>{data.data[13].datetime}</h5>
                                : null
                        }</h5>
                        <br />

                        {chengeIcon(13)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[13].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[13].min_temp)}°</p>
                                    </div>
                                    : null
                            }
                        </div>
                        {
                            data.data
                                ? <span>{data.data[13].pop}%</span>
                                : null
                        }
                        <br />
                        <br />
                        <button data-toggle="collapse" data-target="#details13" type="button" className="btn btn-warning btn-be-days">جزئیات</button>
                        <div className="collapse" id="details13">
                            <div className="details">
                                <span className="day-details">
                                    باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {Math.round(data.data[13].wind_spd)} کیلومتر/ساعت</span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    جهت باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {data.data[13].wind_cdir} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    شاخص فرابنفش:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[13].uv)} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    رطوبت:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[13].rh)} %</span>
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
                                ? <h5>{data.data[14].datetime}</h5>
                                : null
                        }
                        <br />

                        {chengeIcon(14)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[14].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[14].min_temp)}°</p>
                                    </div>
                                    : null
                            }
                        </div>
                        {
                            data.data
                                ? <span>{data.data[14].pop}%</span>
                                : null
                        }
                        <br />
                        <br />
                        <button data-toggle="collapse" data-target="#details14" type="button" className="btn btn-warning btn-be-days">جزئیات</button>
                        <div className="collapse" id="details14">
                            <div className="details">
                                <span className="day-details">
                                    باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {Math.round(data.data[14].wind_spd)} کیلومتر/ساعت</span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    جهت باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {data.data[14].wind_cdir} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    شاخص فرابنفش:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[14].uv)} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    رطوبت:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[14].rh)} %</span>
                                        : null}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col col-6 col-md-6 col-lg-3 col-xl-3 style-for-days">
                    <div className="box box-days-Section3 ">
                        <h5>{
                            data.data
                                ? <h5>{data.data[15].datetime}</h5>
                                : null
                        }</h5>
                        <br />
                        {chengeIcon(15)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[15].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img alt="temp" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[15].min_temp)}°</p>
                                    </div>
                                    : null
                            }
                        </div>
                        {
                            data.data
                                ? <span>{data.data[15].pop}%</span>
                                : null
                        }
                        <br />
                        <br />
                        <button data-toggle="collapse" data-target="#details15" type="button" className="btn btn-warning btn-be-days">جزئیات</button>
                        <div className="collapse" id="details15">
                            <div className="details">
                                <span className="day-details">
                                    باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {Math.round(data.data[15].wind_spd)} کیلومتر/ساعت</span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">:
                                جهت باد :
                                        {data.data
                                        ? <span className="span-from-1-2"> {data.data[15].wind_cdir} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    شاخص فرابنفش:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[15].uv)} </span>
                                        : null}
                                </span>
                                <br />
                                <hr />
                                <span className="day-details">
                                    رطوبت:
                                            {data.data
                                        ? <span className="span-from-1-2"> {Math.trunc(data.data[15].rh)} %</span>
                                        : null}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default BoxTheNext16Days;