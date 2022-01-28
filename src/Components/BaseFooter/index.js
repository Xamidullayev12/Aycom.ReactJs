import React from "react"
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

//  React Icons
import { AiFillTwitterCircle } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import { RiWhatsappFill } from "react-icons/ri"
import { FaFacebook } from "react-icons/fa"
import { FiPhoneCall } from "react-icons/fi"
import { FiMapPin } from "react-icons/fi"

//  FOOTER IMAGES 
import logo from "../images/MainPage/footer-logo.png" 






export default function BaseFooter () {

    const { t, i18n } = useTranslation();

    return (
        <footer className="bg-black">
            <MainFooter />
            <SecondFooter firma="SPACEMOS" />
        </footer>
    )
}


//  FOOTER LEFT 


function Left() {

    const location = useLocation();

    const { pathname } = location;

    const splitLocation = pathname.split("/");

    const { t, i18n } = useTranslation();

    return (
            <ul className="grid grid-cols-2">
                <li className={splitLocation[1] === "" ? "text-red-500" : ""}>
                    <NavLink to="/" exact>
                            <span className="text-white px-2 py-1 hover:font-semibold hover:outline hover:outline-offset-4 outline-red-500 hover:transition-all hover:bg-white hover:text-black">
                                { t("footer.main")}
                            </span>
                    </NavLink>
                </li>
                <li className={splitLocation[1] === "catalog" ? "text-red-500" : ""}>
                    <NavLink to="/catalog" exact>
                            <span className="text-white px-2 py-1 hover:font-semibold hover:outline hover:outline-offset-4 outline-red-500 hover:transition-all hover:bg-white hover:text-black">
                                { t("footer.catalog")}
                            </span>
                    </NavLink>
                </li>
                <li className={splitLocation[1] === "contact" ? "text-red-500" : ""}>
                    <NavLink to="/contact" exact>
                            <span className="text-white px-2 py-1 hover:font-semibold hover:outline hover:outline-offset-4 outline-red-500 hover:transition-all hover:bg-white hover:text-black">
                            { t("footer.contact")}
                            </span>
                    </NavLink>
                </li>
                <li className={splitLocation[1] === "about" ? "text-red-500" : ""}>
                    <NavLink to="/about" exact>
                            <span className="text-white px-2 py-1 hover:font-semibold hover:outline hover:outline-offset-4 outline-red-500 hover:transition-all hover:bg-white hover:text-black">
                            { t("footer.about")}
                            </span>
                    </NavLink>
                </li>
                <a href="#certificat"  className={splitLocation[1] === "cretificate" ? "text-red-500" : ""}>
                        <span className="text-white px-2 py-1 hover:font-semibold hover:outline hover:outline-offset-4 outline-red-500 hover:transition-all hover:bg-white hover:text-black">
                        { t("footer.certificate")}
                        </span>
                </a>
                
            </ul>
    )
}


// FOOTER CENTER

function Center(props) {
    return (
        <div className="py-8 w-full">
               <div>
                   <NavLink to="/" exact>
                        <img className="mx-auto" src={logo} />
                   </NavLink>
                </div>
            <div className="flex mx-auto mt-2 justify-center">
                <div className="m-1 p-1 group translation-all cursor-pointer shadow group-hover:shadow-2xl rounded-full shadow-blue-600">
                    <AiFillTwitterCircle className="text-white group-hover:text-blue-600 text-2xl" />
                </div>
                <div className="m-1 p-1 group translation-all cursor-pointer shadow group-hover:shadow-2xl rounded-full shadow-red-600">
                    <AiFillInstagram className="text-white group-hover:text-red-400 text-2xl" />
                </div>
                <div className="m-1 p-1 group translation-all cursor-pointer shadow group-hover:shadow-2xl rounded-full shadow-green-600">
                    <RiWhatsappFill className="text-white group-hover:text-green-600 text-2xl" />
                </div>
                <div className="m-1 p-1 group translation-all cursor-pointer shadow group-hover:shadow-2xl rounded-full shadow-blue-600">
                    <FaFacebook className="text-white group-hover:text-blue-700 text-2xl" />
                </div>
            </div>
        </div>
    )
}


// FOOTER RIGHT 

function Right(props) {
    return (
        <div>
            <div className="flex items-center">
                <div className="mr-4">
                    <FiPhoneCall className="text-red-500 text-xl" />
                </div>
                <div>
                    <p className="text-white ">{ t("footer.adress3")}:</p>
                    <p className="text-white">+998 95 515 22 15</p>
                </div>
            </div>
            <div className="flex items-center mt-4">
                <div className="mr-4">
                    <FiMapPin className="text-red-500 text-xl" />
                </div>
                <div>
                    <p className="text-white">{ t("footer.adress")}:</p>
                    <p className="text-white">{ t("footer.adress2")}</p>
                </div>
            </div>            
        </div>
    )
}


function MainFooter(props) {
    return (
        <section className="">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-20 max-w-screen-lg mx-auto px-6 py-10">
                <Left />
                <Center />
                <Right />
            </div>
        </section>
    )
}

function SecondFooter(props) {
    return (
        <div className="border-t border-gray-700 py-4 px-6">
            <div className="max-w-screen-lg flex flex-wrap mx-auto justify-between">
                <p className="text-gray-500">
                    “AYKOM COMPRESSOR” sinse 2014
                </p>
                <p className="text-gray-500">
                    { t("footer.devoloped")}
                    <span className="text-gray-300 ml-1">
                        {props.firma}
                    </span>
                </p>
            </div>
        </div>
    )
}