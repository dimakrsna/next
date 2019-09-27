import React from 'react'
import Link from 'next/link'

export const Footer = () => {
    return (
        <footer className="footer_part">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-md-4 col-lg-4">
                        <div className="single_footer_part">
                            <Link href="/index"><a className="footer_logo_iner"><img src="/static/img/footer_logo.png" alt="#" /></a></Link>
                            <p>Gathered. Under is whose you'll to make years is mat lights thing together fish made
                                forth thirds cattle behold won't. Fourth creeping first female.
                        </p>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-2">
                        <div className="single_footer_part">
                            <h4>About Us</h4>
                            <ul className="list-unstyled">
                                <li><a href="">Managed Website</a></li>
                                <li><a href="">Manage Reputation</a></li>
                                <li><a href="">Power Tools</a></li>
                                <li><a href="">Marketing Service</a></li>
                                <li><a href="">Customer Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-2">
                        <div className="single_footer_part">
                            <h4>Quick Links</h4>
                            <ul className="list-unstyled">
                                <li><a href="">Store Hours</a></li>
                                <li><a href="">Brand Assets</a></li>
                                <li><a href="">Investor Relations</a></li>
                                <li><a href="">Terms of Service</a></li>
                                <li><a href="">Privacy & Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-2">
                        <div className="single_footer_part">
                            <h4>My Account</h4>
                            <ul className="list-unstyled">
                                <li><a href="">Press Inquiries</a></li>
                                <li><a href="">Media Directories</a></li>
                                <li><a href="">Investor Relations</a></li>
                                <li><a href="">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-3 col-lg-2">
                        <div className="single_footer_part">
                            <h4>Resources</h4>
                            <ul className="list-unstyled">
                                <li><a href="">Application Security</a></li>
                                <li><a href="">Software Policy</a></li>
                                <li><a href="">Supply Chain</a></li>
                                <li><a href="">Agencies Relation</a></li>
                                <li><a href="">Manage Reputation</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-lg-8">
                        <div className="copyright_text">
                            <p>Copyright &copy;</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer_icon social_icon">
                            <ul className="list-unstyled">
                                <li><a href="#" className="single_social_icon"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#" className="single_social_icon"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#" className="single_social_icon"><i className="fas fa-globe"></i></a></li>
                                <li><a href="#" className="single_social_icon"><i className="fab fa-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}