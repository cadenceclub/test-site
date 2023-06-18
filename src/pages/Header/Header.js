import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';

import Sidebar from '../../components/Sidebar/Sidebar';

const Header = () => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }

    return (
        <>
            <header>
                <div className="header__area p-relative header__transparent">
                    <div className="header__shape p-absolute">
                        <img src="assets/img/icon/slider/03/icon-5.png" alt="" />
                    </div>
                    <div id="header__sticky" className="header__bottom header__bottom-2 header__style-4">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                    <div className="logo-3">
                                        <NavLink to="/">
                                            <img src="assets/img/logo/onetouch.png" alt="logo" />
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                                    <div className="header__bottom-right d-flex justify-content-end align-items-center">
                                        <div className="main-menu main-menu-3 menu_three_wrapper">
                                            <nav id="mobile-menu">
                                                <ul>
                                                    <li><NavLink to="/about">About Us </NavLink></li>
                                                    <li>
                                                        <NavLink to="/">Home Loans</NavLink>
                                                        <ul className="submenu">
                                                            <li><NavLink to="/homeOne">First Home Buyer</NavLink></li>
                                                            <li>
                                                                <NavLink to="/homeTwo">Refinancing</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/homeThree">Investment Loans</NavLink>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/services">Personal Loans</NavLink>
                                                        <ul className="submenu">
                                                            <li><NavLink to="/services">Debt Consolidation</NavLink></li>
                                                            <li><NavLink to="/servicesDetails">Car & Motor Vehicles</NavLink></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/portfolio">Business Loans</NavLink>
                                                        <ul className="submenu">
                                                            <li><NavLink to="/portfolio">Cash Flow Loan</NavLink></li>
                                                            <li><NavLink to="/portfolioDetails">Commercial Loan</NavLink></li>
                                                            <li><NavLink to="/team">Equipment Finance</NavLink></li>
                                                            <li><NavLink to="/teamDetails">Trade Finance</NavLink></li>
                                                            <li><NavLink to="/teamDetails">SMSF Loans</NavLink></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/blogs">For Brokers</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/contact">FAQ</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/contact">Calculators</NavLink>
                                                        <ul className="submenu">
                                                            <li><NavLink to="/portfolio">Loan Eligibility Calculator</NavLink></li>
                                                            <li><NavLink to="/portfolioDetails">Loan Calculator</NavLink></li>
                                                            <li><NavLink to="/team">Loan & Amortization Calculator</NavLink></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <div onClick={handleShow} className="sidebar__menu d-lg-none">
                                            <div className="sidebar-toggle-btn sidebar-toggle-btn-3" id="sidebar-toggle">
                                                <span className="line"></span>
                                                <span className="line"></span>
                                                <span className="line"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Sidebar show={show} handleClose={handleClose} />
        </>
    )
}

export default Header;