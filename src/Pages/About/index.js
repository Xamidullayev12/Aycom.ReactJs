import React from "react"
import mainImage from "../../Components/images/AboutPage/mainImage-1.png"
import logo from "../../Components/images/MainPage/header-logo.png"


// CERTIFICATE IMAGE
import certificat1 from "../../Components/images/AboutPage/image-1.png"
import certificat2 from "../../Components/images/AboutPage/image-2.png"
import certificat3 from "../../Components/images/AboutPage/image-3.png"




export default function AboutPage() {
    return (
        <section>
            <Main image={mainImage}/>
        </section>
    )
}

function Certificate(props) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 justify-center gap-10 mt-4">
            <div>
                <img className="w-full" src={props.certificate_1} />
            </div>
            <div>
                <img className="w-full" src={props.certificate_2} />
            </div>
            <div >
                <img className="w-full" src={props.certificate_3} />
            </div>
        </div>
    )
}


function Main(props) {
    return (
        <div className="max-w-screen-lg mx-auto px-6">
            <div className="items-center flex flex-wrap justify-between mt-10">
                <h1 className="text-3xl font-bold mt-6">О компании</h1>
                <div className="mt-6">
                    <img className="" src={logo}/>
                </div>
            </div>
            <div className="mt-10">
                <img className="w-full" src={props.image} />
            </div>
            <div className="pt-8">
                <p>
                    HKDA series non-heating chemical driers have -40°C fixed (-70°C optional) dew point. 
                    These driers are fit for applications needing clean and quite dry compressed air. 
                    You need to use inlet and outlet filters with the driers. By means of it,
                    you will make sure that compressed air is clean and also humectants in the product are maintained.
                </p>
                <p id="certificat" >
                    Perfect operation of the product is guaranteed owing to safe electronic controller on the product. 
                    HKDA non-heating type of chemical drier is equipped with special valves and high-quality humectants. 
                    In addition to these characteristics, these products are the chemical driers with the lowest pressure decrease in the market.
                </p>
            </div>
            <div className="mt-6 mb-12">   
                <h1 className="text-3xl font-bold">
                    Сертификаты
                </h1>
                <Certificate certificate_1={certificat1} certificate_2={certificat2} certificate_3={certificat3}/>
            </div>
        </div>
    )
}


