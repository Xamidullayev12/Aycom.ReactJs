import React, { useState } from "react";
import logo from "../images/MainPage/header-logo.png"
import { NavLink } from "react-router-dom";

//      Rect Icons      //
import { useLocation } from "react-router-dom";
import { BiMap } from "react-icons/bi"
import { BiPhoneCall } from "react-icons/bi"
import { BsArrowRightCircle } from "react-icons/bs"
import { BsGlobe } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"

import i18n from "i18next";
import { useTranslation } from "react-i18next";
// import ru from "../../../public/locales/ru/translation.json"
// import en from "../../../public/locales/en/tanslation.json"

export default function  NavBar() {
    
    const location = useLocation();
    
    const { pathname } = location;
    
    const splitLocation = pathname.split("/");
    
    
    function handleClick(lang) {
        i18n.changeLanguage(lang);
    }
    const { t, i18n } = useTranslation();


    
    
    
    
    
    const nav_bar = "absolute left-full md:relative md:left-0 md:flex md:justify-between max-w-screen-xl mx-auto px-4"
    const setNav_bar = "absolute left-full md:relative md:left-0 md:flex md:justify-between max-w-screen-xl mx-auto px-4"
    
    const [nav_bar, setNav_bar ] = useState(nav_bar)


    return (
        <section>
            <nav className="realtive">
                <div className="border-b dorder-solid border-neutral-300">
                    <div className="max-w-screen-xl mx-auto px-4 header-top flex justify-between items-center">
                        <div className="py-4 w-60 h-16">
                            <NavLink to="/" exact>
                                <img className="w-full h-full" src={logo}/>
                            </NavLink>
                        </div>
                        <div className="md:hidden">
                            <GiHamburgerMenu className="hover:text-red-600" />
                        </div>
                        <div className="header-top-right hidden md:flex items-center">
                            <NavLink to="/contact" exact>
                                <div className="group flex items-center py-2 px-4 hover:bg-red-500 hover:transition-all">
                                    <h3> <BiMap className="text-red-700 mr-4 group-hover:text-white" size={24}/> </h3>    
                                    <div>
                                        <p className="group-hover:text-gray-200">{ t('navbar.adress')}:</p>
                                        <p className=" font-bold group-hover:text-gray-200">{ t('navbar.adress2')}</p>
                                    </div>
                                </div>
                            </NavLink>
                            <div className="group hover:bg-red-500 hover:transition-all flex items-center px-4 border-l dorder-solid border-neutral-300 py-2">
                                <h3> <BiPhoneCall className="text-red-700 mr-4 group-hover:text-white" size={24}/> </h3>
                                <div>
                                    <p className="group-hover:text-gray-200">{ t('navbar.adress3')}:</p>
                                    <p className=" font-bold group-hover:text-gray-200">+998 90 988-8989</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute left-full md:relative md:left-0 md:flex md:justify-between max-w-screen-xl mx-auto px-4">
                    <ul className="left md:flex justify-center">
                        <li className={splitLocation[1] === "catalog" ? " bg-red-600" : ""}>
                            <NavLink to="/catalog" exact>
                                <div className="flex items-center py-4 px-4 group hover:bg-red-500 hover:transition-all">
                                    <span className="pr-4 group-hover:text-white">
                                        { t('navbar.catalog')}
                                    </span>
                                    <BsArrowRightCircle className="group-hover:text-white" size={20}/>
                                </div>
                            </NavLink>
                        </li>
                        <li className={splitLocation[1] === "" ? "bg-red-600" : ""}>
                            <NavLink to="/" exact>
                                <div className="justify-center py-4 px-4 group hover:bg-red-500 hover:transition-all">
                                    <span className="group-hover:text-white">{ t('navbar.main')}</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className={splitLocation[1] === "about" ? "bg-red-600" : ""}>
                            <NavLink to="/about" exact>
                            <div className="py-4 px-4 group hover:bg-red-500 hover:transition-all">
                                <span className="group-hover:text-white">{ t('navbar.about')}</span>
                            </div>
                            </NavLink>
                        </li>
                        <li className={splitLocation[1] === "contact" ? "bg-red-600" : ""}>
                            <NavLink to="/contact" exact>
                                <div className="py-4 px-4 group hover:bg-red-500 hover:transition-all">
                                    <span className="group-hover:text-white">{ t('navbar.contact')}</span>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                    <div className="flex items-center ">
                        <BsGlobe className="mr-3 font-medium hover:transition-all hover:text-red-600" size={24}/>
                        <button className="font-medium p-4 hover:transition-all hover:bg-red-500 hover:text-white" onClick={() => handleClick('ru')}>Ру</button>
                        <button className="mr-1 font-medium p-4 hover:transition-all hover:bg-red-500 hover:text-white" onClick={() => handleClick('en')}>En</button>
                    </div>
                </div>
            </nav>
        </section>
    )
}
