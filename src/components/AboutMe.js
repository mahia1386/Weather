import React from "react";

//images
import MainPageImg from "./../image/MainPageImg.png";
import Part1 from "./../image/Part1.png";
import Part2 from "./../image/Part2.png";

function AboutMe() {
    return (
        <div className="box container">
            <h4>درباره ما</h4>
            <br />
            <div>
                <div className="row">
                    <div className="col col-12 col-md-12 col-lg-5 col-xl-5">
                        <img src={MainPageImg} alt="Main Page" className="main-page-aboutme" />
                    </div>
                    <br />
                    <br />
                    <div className="col col-12 col-md-12 col-lg-7 col-xl-7">
                        <h5>آب و هوای امروز</h5>
                        <p>
                            .ما در این برنامه سعی کردیم اب و هوای دقیقی از 2 هفته اینده در دسترس مخاطب قرار دهیم . همچنین این برنامه با طراحی ساده و اما کار بردی میتواند جزو یکی از مهم ترین تارنما هی مورد استفاده شما باشد
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <div>
                    <button data-toggle="collapse" data-target="#btn1" className="btn btn-warning">بیشتر</button>
                    <br />
                    <br />
                    <div id="btn1" class="collapse">
                        <div className="container-fluid">
                            <div className="row box-about">
                                <div className="col col-12 col-md-4 col-lg-4 col-xl-4">
                                    <img src={Part1} alt="" className="main-page-aboutme"/>
                                </div>
                                <div className="col col-12 col-md-8 col-lg-8 col-xl-8">
                                    <h5>میانبر</h5>
                                    <p>
                                        شما میتوانید  با کلیک بر هر یک از گزینه ها سریع به گزینه مورد نضر خود منتقل شوید
                                    </p>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="container-fluid">
                            <div className="row box-about">
                                <div className="col col-12 col-md-4 col-lg-4 col-xl-4">
                                    <img src={Part2} alt="" className="main-page-aboutme"/>
                                </div>
                                <div className="col col-12 col-md-8 col-lg-8 col-xl-8">
                                    <h5>جزئیات روز های اینده</h5>
                                    <p>
                                       ما به گذاشتن دکمه ای در این بخش با نام «جزئیات » جزئیات بسیار مهمی از ان تاریخ به مخاطب میدهد.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;