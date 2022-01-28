import React , {useState , useEffect}from "react";
import appStyle from "./../style/react.css";
import style from '../Font/style.css';

function BoxToday(){

    const [tempToday, settempToday] = useState({ data: "" });

    async function getTemp() {
        let tempToday = await fetch('https://api.weatherbit.io/v2.0/current?city=Berlin&country=DE&key=e18186b3a3324db780a0f350eeba7098');
        tempToday = await tempToday.json()
        settempToday(tempToday)
    }

    useEffect(() => {
        getTemp();
    }, [])

    return(
        <div className="box box-today">
            <div className="row">
                <h5 className="col col-9" style={{ textAlign: "right" }}>آب و هوای امروز برلین</h5>
                <div className="col col-3 row">
                    <div className="col col-6 div-from-1-2">

                        {tempToday.data
                            ? <span className="span-from-1-2"> {tempToday.data[0].sunset} </span>
                            : null}

                        <div className="img-from-1-2">
                            <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-sunset-weather-those-icons-lineal-color-those-icons.png" />
                        </div>

                    </div>
                    <div className="col col-6 div-from-1-2">

                        {tempToday.data
                            ? <span className="span-from-1-2"> {tempToday.data[0].sunrise} </span>
                            : null}

                        <div className="img-from-1-2">
                            <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-sunrise-weather-those-icons-lineal-color-those-icons.png" />
                        </div>

                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col col-6 box-2-2">
                    <span>
                        رطوبت:
                            {tempToday.data
                            ? <span className="span-from-1-2"> {Math.trunc(tempToday.data[0].rh)} </span>
                            : null}
                    </span>
                    <br />
                    <hr />
                    <span>
                        فشار:
                            {tempToday.data
                            ? <span className="span-from-1-2"> {Math.trunc(tempToday.data[0].pres)} </span>
                            : null}
                    </span>
                    <br />
                    <hr />
                    <span>
                        قابلیت دید:
                            {tempToday.data
                            ? <span className="span-from-1-2"> {Math.trunc(tempToday.data[0].vis)} </span>
                            : null}
                    </span>
                </div>
                <div className="col col-6 box-2-2">
                    <span>
                        باد:
                            {tempToday.data
                            ? <span className="span-from-1-2"> {Math.trunc(tempToday.data[0].wind_spd)} </span>
                            : null}
                        {tempToday.data
                            ? <span className="span-from-1-2"> {Math.trunc(tempToday.data[0].wind_cdir)} </span>
                            : null}
                    </span>
                    <br />
                    <hr />
                    <span>
                        نقطه شبنم:
                            {tempToday.data
                            ? <span className="span-from-1-2"> {Math.trunc(tempToday.data[0].dewpt)} </span>
                            : null}
                    </span>
                    <br />
                    <hr />
                    <span>
                        شاخص فرابنفش:
                        {tempToday.data
                            ? <span className="span-from-1-2"> {Math.trunc(tempToday.data[0].uv)} </span>
                            : null}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default BoxToday;