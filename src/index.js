
import React, { Suspense } from "react";
import App from './App';

import './i18n/i18next'; 


// IMAGES IMPORTS 
//  Swipper
import mainImage1 from "./Components/images/MainPage/main-1.png"
import mainImage2 from "./Components/images/MainPage/main-2.png"
import mainImage3 from "./Components/images/MainPage/main-3.png"
import mainImage3_1 from "./Components/images/MainPage/main-3-1.png"


// CARD IMAGES 
import card1 from "./Components/images/MainPage/Cards/card-1.png"
import card2 from "./Components/images/MainPage/Cards/card-2.png"
import card3 from "./Components/images/MainPage/Cards/card-3.png"
import card4 from "./Components/images/MainPage/Cards/card-4.png"
import card5 from "./Components/images/MainPage/Cards/card-5.png"


// MORE SECTIONS IMAGES 
import moreInfo from "./Components/images/MainPage/more-info.png"
import footerLogo from "./Components/images/MainPage/footer-logo.png"


// CONTACT SECTIONS IMAGES 
import contact1 from "./Components/images/MainPage/contact.png"
 



import { NavLink } from "react-router-dom";



// ICONS IMMPORT
import { BsArrowRightCircle } from "react-icons/bs"


// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"

import "swiper/css/bundle";


// import Swiper core and required modules
import SwiperCore, {
    Mousewheel,Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Mousewheel,Pagination]);





ReactDOM.render(
    <Suspense fallback={(<div>Loading ~~~</div>)}>
        <App /> 
    </Suspense>
    , document.getElementById('root')
);




export default function MainPage() {
    return (
        <section>
            <MainSlider />
            <Products />
            <MoreInfo />
            <ContactInfo />
        </section>
    )
}





// MAIN IMAGE FUNCTION 


function SwiperImg(props) {
    return (
            <div className='relative w-full'>
                <div className="swiperImage object-cover">
                    <img className='w-full h-full object-cover' src={props.image_src}/>
                </div>
                <div className='absolute top-10 right-24 max-w-prose object-cover'>
                    <img className='w-full h-full object-cover' src={props.second_img} />
                </div>
                <p className='sm:absolute bottom-3 left-32 p-3 bg-white sm:max-w-md text-left w-full font-bold text-3xl border-l-4 border-red-600 z-10'>
                    {props.image_title}
                </p>
            </div>
    )
}






// SLIDER FUNCTION

function MainSlider() {
    return (
      <div className="container">
            <Swiper  className="swiper" direction={'vertical'} slidesPerView={1} spaceBetween={500} mousewheel={true} pagination={{"clickable": true}} className="mySwiper">
                <SwiperSlide className="swiperSlide">
                    <SwiperImg image_src={mainImage1} image_title={"Компрессорные оборудование в Ташкенте"}/>
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                    <SwiperImg image_src={mainImage2} image_title={"Сервисные услуги от мастера своего дела с опытом более 40 лет"} />
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                    <SwiperImg image_src={mainImage3} second_img={mainImage3_1} image_title={"Максимальная производительность в суровых условиях"}/>
                </SwiperSlide>
            </Swiper>
      </div>
    )
}



//  PRODUCTS CARDS 

function Cards(props) {
    return(
        <div className='group hover:translation-all cursor-pointer'>
            <div className='flex p-4 bg-slate-50 hover:translation-all group-hover:bg-black'>
                <div className='w-2/4 mt-14'>
                    <p className='text-lg font-bold group-hover:text-white leading-5'>{props.card_title}</p>
                    <a href={props.card_src}>
                        <div className='flex items-center mt-1'>
                            <span className='group-hover:text-white text-red-500'>
                                Перейти
                            </span>
                            <BsArrowRightCircle className="group-hover:text-white text-red-500 ml-3" size={18}/>
                        </div>
                    </a>
                </div>
                <div className='w-2/4 object-cover'>
                    <img className='w-full h-full object-cover' src={props.card_image} />
                </div>
            </div>
        </div>
    )
}


function Products() {
    return(
        <section className='mt-36 px-6'>
            <div className="max-w-screen-lg mx-auto">
                <h1 className='text-center text-3xl font-bold'>
                    Категории продукций
                </h1>
                <p className='text-center font-medium leading-6'>
                    Завод NEXUS выпускает более 100+ разновидностей латунных продукции
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-6 pb-10'>
                    <Cards card_title="Direct Drive Air Screw Compressors" card_image={card1} card_src={"."}/>
                    <Cards card_title="Direct Drive Air Screw Compressors" card_image={card2}/>
                    <Cards card_title="Direct Drive Air Screw Compressors" card_image={card3}/>
                    <Cards card_title="Direct Drive Air Screw Compressors" card_image={card4}/>
                    <Cards card_title="Direct Drive Air Screw Compressors" card_image={card5}/>
                    <a className='group flex items-center bg-red-600 hover:bg-red-700 hover:translation-all' href=''>
                        <button className='flex items-center mx-auto py-4'>
                            <span className='text-white font-bold text-lg'>
                                Все категории
                            </span>
                            <BsArrowRightCircle className="text-white ml-3" size={18}/>
                        </button>
                    </a>
                </div>
            </div>
        </section>
    )
}



// MORE INFO 

function More(props) {
    return (
        <div className='max-w-screen-lg mx-auto grid md:grid-cols-2 justify-between'>
            <div className='py-10 pr-2'>
                <div className='w-4/6'>
                    <img className='w-full' src={footerLogo} />
                </div>
                <p className='text-white mt-6'>{props.moreText}</p>
                <div className='flex flex-wrap items-center mt-6'>
                    <NavLink to="/about" exact>
                            <button className='group hover:bg-red-500 hover:transition-all flex items-center bg-gray-200 px-10 py-2 mb-2 mr-6'>
                                <span className='mr-2 group-hover:text-white'>Подробнее</span>
                                <BsArrowRightCircle className="group-hover:text-white" size={18}/>
                            </button>
                    </NavLink>
                    <NavLink to="/about" exact>
                        <a href='#certificat' className='text-red-500 underline decoration-1 hover:text-white hover:transition-all'>Сертификаты</a>
                    </NavLink>
                </div>
            </div>
            <div className='w-full'>
                <img className='w-full h-full object-cover' src={props.moreImage} />
            </div>
        </div>
    )
}


function MoreInfo(props) {
    return (
        <section className='bg-black px-6'>
           <More 
           moreText={"AYKOM COMPRESSOR started its business life at 1960 by manufacturing welding machines and breaking grounds with portable welding machines. We continued to growning since 57 years with the production of air piston compressors at 1977, air screw compressors at 1998 and high pressure washers, industrial vacuum cleaners at 2004."}
           moreImage={moreInfo}/>
        </section>
    )
}



// CONTACT SECTION 

function Contact(props) {
    return (
        <div className='max-w-screen-lg mx-auto relative'>
            <div className='w-full h-full'> 
                <img className='w-full h-full' src={contact1} />
            </div>
        </div>
    )
}

function  ContactInfo() {
    return (
        <section className='py-10'>
            <Contact />
        </section>
    )
}

