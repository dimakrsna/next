import React from 'react'
import { Breadcrumb } from './../components/breadcrumb'

export const Features = () => {
    return (
        <>
            <Breadcrumb pageName='features' />
            <section className="use_sasu padding_top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single_feature">
                                <div className="single_feature_part">
                                    <img src="static/img/icon/feature_icon_1.png" alt="" />
                                    <h4>Fully Secured</h4>
                                    <p>Made great fish shall beast, fourth land also Doesn
                                        tree without lesser likeness he fruit of called gathering
                                day whose called were have </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single_feature">
                                <div className="single_feature_part">
                                    <img src="static/img/icon/feature_icon_2.png" alt="" />
                                    <h4>Unique Design</h4>
                                    <p>Made great fish shall beast, fourth land also Doesn tree
                                        without lesser likeness he fruit of called gathering day whose
                                called were have </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single_feature">
                                <div className="single_feature_part">
                                    <img src="static/img/icon/feature_icon_3.png" alt="" />
                                    <h4>A Volunteer</h4>
                                    <p>Made great fish shall beast, fourth land also Doesn tree without
                                lesser likeness he fruit of called gathering day whose called were have </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="static/img/animate_icon/Ellipse_1.png" alt="" className="feature_icon_1 custom-animation1" />
            </section>
            <section className="about_us section_padding">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-6 col-lg-5">
                            <div className="about_us_text">
                                <img src="static/img/icon/Icon_1.png" alt="" />
                                <h2>Easy To <br />
                                    Access Social Media</h2>
                                <p>Saw shall light. Us their to place had creepeth day
                                    night great wher appear to. Hath, called, sea called,
                                    gathering wherein open make living Female itself
                                    gathering man. Waters and, two. Bearing. Saw she'd
                            all let she'd lights abundantly blessed.</p>
                                <a href="#" className="btn_2">learn more</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="learning_img">
                                <img src="static/img/about_img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <img src="static/img/animate_icon/Ellipse_4.png" alt="" className="feature_icon_1 custom-animation1" />
            </section>
            <section className="about_us right_time">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-6 col-lg-6">
                            <div className="learning_img">
                                <img src="static/img/about_img_1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-5">
                            <div className="about_us_text">
                                <img src="static/img/icon/Icon_2.png" alt="" />
                                <h2>With efficiency to
                            unlock more opportunities</h2>
                                <p>Saw shall light. Us their to place had creepeth day
                                    night great wher appear to. Hath, called, sea called,
                                    gathering wherein open make living Female itself
                                    gathering man. Waters and, two. Bearing. Saw she'd
                            all let she'd lights abundantly blessed.</p>
                                <a href="#" className="btn_2">learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="static/img/animate_icon/Ellipse_5.png" alt="" className="feature_icon_2 custom-animation2" />
            </section>
            <section className="subscribe_part section_padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="subscribe_part_text text-center">
                                <h2>Experience the most simple way to <br />
                                    manage business</h2>
                                <div className="subscribe_form">
                                    <form action="#">
                                        <div className="form-row">
                                            <div className="col-sm-9">
                                                <input type="email" className="form-control" placeholder="enter your email" />
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="subscribe_btn">
                                                    <div className="btn_2 d-block">free trail</div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="static/img/animate_icon/Ellipse_5.png" alt="" className="feature_icon_2 custom-animation2" />
            </section>
            <section className="client_logo">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="client_logo_slider owl-carousel d-flex justify-content-between">
                                <div className="single_client_logo">
                                    <img src="static/img/client_logo/client_logo_1.png" alt="" />
                                </div>
                                <div className="single_client_logo">
                                    <img src="static/img/client_logo/client_logo_2.png" alt="" />
                                </div>
                                <div className="single_client_logo">
                                    <img src="static/img/client_logo/client_logo_3.png" alt="" />
                                </div>
                                <div className="single_client_logo">
                                    <img src="static/img/client_logo/client_logo_4.png" alt="" />
                                </div>
                                <div className="single_client_logo">
                                    <img src="static/img/client_logo/client_logo_5.png" alt="" />
                                </div>
                                <div className="single_client_logo">
                                    <img src="static/img/client_logo/client_logo_1.png" alt="" />
                                </div>
                                <div className="single_client_logo">
                                    <img src="static/img/client_logo/client_logo_2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}