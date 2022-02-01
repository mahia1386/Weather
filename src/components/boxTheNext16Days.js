import React, { useEffect, useState } from "react";
import appStyle from "./../style/react.css";
import style from '../Font/style.css';

function BoxTheNext16Days() {

    const [data, setData] = useState({ data: "" });

    async function getData() {
        let data = await fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=Berlin&country=DE&key=e18186b3a3324db780a0f350eeba7098');
        data = await data.json()
        setData(data);
    }

    useEffect(() => {
        getData();
    }, [])

    let shiftIcon = (x) => {
        let icon = "";
        let iconText = data?.data?.[x]?.weather?.code;

        if (iconText == 610) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-snowy-weather-those-icons-lineal-color-those-icons-1.png";

        } else if (iconText == 804) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-cloudy-weather-those-icons-lineal-color-those-icons-1.png";

        } else if (iconText == 803 || iconText == 801 || iconText == 802) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-cloudy-weather-those-icons-lineal-color-those-icons.png";

        } else if (iconText == 520) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-rain-weather-those-icons-lineal-color-those-icons.png";

        } else if (iconText == 200 || iconText == 201 || iconText == 230 || iconText == 231) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-storm-weather-those-icons-lineal-color-those-icons-3.png";

        } else if (iconText == 202 || iconText == 232) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-storm-weather-those-icons-lineal-color-those-icons-1.png";

        } else if (iconText == 233 || iconText == 511) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-hail-weather-those-icons-lineal-color-those-icons.png";

        } else if (iconText == 300 || iconText == 301 || iconText == 500 || iconText == 501 || iconText == 522 || iconText == 302) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-rain-weather-those-icons-lineal-color-those-icons.png";

        } else if (iconText == 502 || iconText == 520 || iconText == 521 || iconText == 900) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-humidity-weather-those-icons-lineal-color-those-icons.png";

        } else if (iconText == 600 || iconText == 601 || iconText == 602 || iconText == 621 || iconText == 622) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-snow-weather-those-icons-lineal-color-those-icons.png";

        } else if (iconText == 611 || iconText == 612) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-windy-weather-those-icons-lineal-color-those-icons-2.png";

        } else if (iconText == 623) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-hurricane-weather-those-icons-lineal-color-those-icons.png";

        } else if (iconText == 700 || iconText == 711 || iconText == 721 || iconText == 731 || iconText == 741 || iconText == 751) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-fog-weather-those-icons-lineal-color-those-icons.png";

        } else if (iconText == 800) {

            icon = "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-sun-weather-those-icons-lineal-color-those-icons.png";

        }

        return (
            <img className="img-for-3" src={icon} />
        )
    }

    return (
        <div className="box box-The-next-16-days" id="part-3">
            <h4>آب و هوای  16 روز آینده</h4>
            <div className="row">
                <div className="col col-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="box div-box-3">
                        {
                            data.data
                                ? <h5>{data.data[1].datetime}</h5>
                                : null
                        }
                        <br />
                        {shiftIcon(1)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around", paddingLeft: "40px", paddingRight: "40px" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[1].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
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
                        <button type="button" className="btn btn-warning btn-for-3" data-toggle="collapse" data-target="#datails1">جزئیات</button>
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
                                <span className="day-details">جهت باد
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
                <div className="col col-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="box div-box-3">
                        <h5>{
                            data.data
                                ? <h5>{data.data[2].datetime}</h5>
                                : null
                        }</h5>
                        <br />
                        {shiftIcon(2)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around", paddingLeft: "40px", paddingRight: "40px" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[2].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
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
                        <button data-toggle="collapse" data-target="#details2" type="button" className="btn btn-warning btn-for-3">جزئیات</button>
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
                                <span className="day-details">جهت باد
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
                <div className="col col-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="box div-box-3">
                        <h5>{
                            data.data
                                ? <h5>{data.data[3].datetime}</h5>
                                : null
                        }</h5>
                        <br />
                        {shiftIcon(3)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around", paddingLeft: "40px", paddingRight: "40px" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[3].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
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
                        <button data-toggle="collapse" data-target="#details3" type="button" className="btn btn-warning btn-for-3">جزئیات</button>
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
                                <span className="day-details">جهت باد
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
                <div className="col col-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="box div-box-3">
                        <h5>{
                            data.data
                                ? <h5>{data.data[4].datetime}</h5>
                                : null
                        }</h5>
                        <br />
                        {shiftIcon(4)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around", paddingLeft: "40px", paddingRight: "40px" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[4].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
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
                        <button data-toggle="collapse" data-target="#details4" type="button" className="btn btn-warning btn-for-3">جزئیات</button>
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
                                <span className="day-details">جهت باد
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
            <br/>
            <div id="demo" class="collapse row">
                <div className="col col-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="box div-box-3">
                        {
                            data.data
                                ? <h5>{data.data[5].datetime}</h5>
                                : null
                        }
                        <br />
                        {shiftIcon(5)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around", paddingLeft: "40px", paddingRight: "40px" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[5].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
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
                        <button data-toggle="collapse" data-target="#details5" type="button" className="btn btn-warning btn-for-3">جزئیات</button>
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
                                <span className="day-details">جهت باد
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
                <div className="col col-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="box div-box-3">
                        <h5>{
                            data.data
                                ? <h5>{data.data[6].datetime}</h5>
                                : null
                        }</h5>
                        <br />
                        {shiftIcon(6)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around", paddingLeft: "40px", paddingRight: "40px" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[6].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
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
                        <button data-toggle="collapse" data-target="#details6" type="button" className="btn btn-warning btn-for-3">جزئیات</button>
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
                                <span className="day-details">جهت باد
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
                <div className="col col-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="box div-box-3">
                        <h5>{
                            data.data
                                ? <h5>{data.data[7].datetime}</h5>
                                : null
                        }</h5>
                        <br />
                        {shiftIcon(7)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around", paddingLeft: "40px", paddingRight: "40px" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[7].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
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
                        <button data-toggle="collapse" data-target="#details7" type="button" className="btn btn-warning btn-for-3">جزئیات</button>
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
                                <span className="day-details">جهت باد
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
                <div className="col col-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="box div-box-3">
                        <h5>{
                            data.data
                                ? <h5>{data.data[8].datetime}</h5>
                                : null
                        }</h5>
                        <br />
                        {shiftIcon(8)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around", paddingLeft: "40px", paddingRight: "40px" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[8].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
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
                        <button data-toggle="collapse" data-target="#details8" type="button" className="btn btn-warning btn-for-3">جزئیات</button>
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
                                <span className="day-details">جهت باد
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
                <div className="col col-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="box div-box-3">
                        {
                            data.data
                                ? <h5>{data.data[9].datetime}</h5>
                                : null
                        }
                        <br />
                        {shiftIcon(9)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around", paddingLeft: "40px", paddingRight: "40px" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[9].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
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
                        <button data-toggle="collapse" data-target="#details9" type="button" className="btn btn-warning btn-for-3">جزئیات</button>
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
                                <span className="day-details">جهت باد
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
                <div className="col col-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="box div-box-3">
                        <h5>{
                            data.data
                                ? <h5>{data.data[10].datetime}</h5>
                                : null
                        }</h5>
                        <br />
                        {shiftIcon(10)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around", paddingLeft: "40px", paddingRight: "40px" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[10].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
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
                        <button data-toggle="collapse" data-target="#details10" type="button" className="btn btn-warning btn-for-3">جزئیات</button>
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
                                <span className="day-details">جهت باد
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
                <div className="col col-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="box div-box-3">
                        <h5>{
                            data.data
                                ? <h5>{data.data[11].datetime}</h5>
                                : null
                        }</h5>
                        <br />
                        {shiftIcon(11)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around", paddingLeft: "40px", paddingRight: "40px" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[11].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
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
                        <button data-toggle="collapse" data-target="#details11" type="button" className="btn btn-warning btn-for-3">جزئیات</button>
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
                                <span className="day-details">جهت باد
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
                <div className="col col-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="box div-box-3">
                        {
                            data.data
                                ? <h5>{data.data[12].datetime}</h5>
                                : null
                        }
                        <br />
                        {shiftIcon(12)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around", paddingLeft: "40px", paddingRight: "40px" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[12].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
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
                        <button data-toggle="collapse" data-target="#details12" type="button" className="btn btn-warning btn-for-3">جزئیات</button>
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
                                <span className="day-details">جهت باد
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
                <div className="col col-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="box div-box-3">
                        <h5>{
                            data.data
                                ? <h5>{data.data[13].datetime}</h5>
                                : null
                        }</h5>
                        <br />

                        {shiftIcon(13)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around", paddingLeft: "40px", paddingRight: "40px" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[13].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
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
                        <button data-toggle="collapse" data-target="#details13" type="button" className="btn btn-warning btn-for-3">جزئیات</button>
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
                                <span className="day-details">جهت باد
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
                <div className="col col-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="box div-box-3">
                        {
                            data.data
                                ? <h5>{data.data[14].datetime}</h5>
                                : null
                        }
                        <br />

                        {shiftIcon(14)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around", paddingLeft: "40px", paddingRight: "40px" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[14].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
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
                        <button data-toggle="collapse" data-target="#details14" type="button" className="btn btn-warning btn-for-3">جزئیات</button>
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
                                <span className="day-details">جهت باد
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
                <div className="col col-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="box div-box-3">
                        <h5>{
                            data.data
                                ? <h5>{data.data[15].datetime}</h5>
                                : null
                        }</h5>
                        <br />
                        {shiftIcon(15)}
                        <br />
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-around", paddingLeft: "40px", paddingRight: "40px" }}>
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-temperature-weather-those-icons-lineal-color-those-icons.png" width="24px" height="24px" />
                                        <p>{Math.trunc(data.data[15].max_temp)}°</p>
                                    </div>
                                    : null
                            }
                            {
                                data.data
                                    ? <div style={{ display: "flex" }}>
                                        <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-thermometer-weather-those-icons-lineal-color-those-icons-1.png" width="24px" height="24px" />
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
                        <button data-toggle="collapse" data-target="#details15" type="button" className="btn btn-warning btn-for-3">جزئیات</button>
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
                                <span className="day-details">:جهت باد
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