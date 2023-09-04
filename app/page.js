import Header from "./Components/header/page";
import Slider from "./Components/slider/page";

import ticket from "../public/img/ticket.png"
import iconSearch from "../public/img/iconSearch.png"

// import PremiumLicoreria from "../../../public/img/anunciosDestacados/PremiumLicoreria.jpg"
import PremiumLicoreria from "../public/img/anunciosDestacados/PremiumLicoreria.jpg"
import PremiumTienda from "../public/img/anunciosDestacados/PremiumTienda.jpg"
import PremiumTragos from "../public/img/anunciosDestacados/PremiumTragos.jpg"
import NoPremiumTienda from "../public/img/anunciosDestacados/NoPremiumTienda.jpg"
import NoPremiumLicoreria from "../public/img/anunciosDestacados/NoPremiumLicoreria.jpg"
import NoPremiumTragos from "../public/img/anunciosDestacados/NoPremiumTragos.jpg"

import IconoArrowRight from "../public/img/anunciosDestacados/iconos/IconoArrowRight.png"

import Image from "next/image";
import Anuncio from "./Components/articleAnuncio/page";
import SliderNoticias from "./Components/sliderNoticias/page";
import Footer from "./Components/footer/page";


export default function Home() {
  const images = [
    '/img/slider/comida.png',
    '/img/slider/licoreria.png',
    '/img/slider/preparacion.png',
    '/img/slider/veterinaria.png',
  ];

  return (
    <>
      <Header />
      <section className="bg-[url('/img/portadaCarruselHome.webp')] bg-cover bg-no-repeat h-[603px]">
        <div className="max-w-idealMaximumWidth m-auto pt-[40px]">
          <h2 className="font-primaryFontBold text-[47px] text-white text-center w-[785px] m-auto leading-tight" style={{textShadow: "1px 1px 8px rgba(0, 0, 0, 1)"}}>Descubre los productos <br /> y servicios que tienes alrededor</h2>
          <div>
            <Slider images={images} />
          </div>
          <div className="flex justify-center">
            <div className="flex gap-4 bg-white w-fit px-[17px] py-[14px] rounded-2xl">
              <input type="text" placeholder="Qué buscas" className="border-b-[1px] border-[#f4af14] leading-normal focus-visible:outline-none"/>
              <button className="border-[1px] border-[#f4af14] p-2"><Image src={ticket} alt="ticket" /></button>
              <button className="flex items-center gap-2 font-primaryFontBold text-white text-base gap rounded-2xl px-6 after:content:url('/img/iconSearch.png')" style={{background: "linear-gradient(180deg, rgba(207, 107, 0, 1) 0%, rgba(210, 113, 2, 1) 21.7%, rgba(219, 128, 6, 1) 49.47%, rgba(233, 155, 14, 1) 80.41%, rgba(244, 175, 20, 1) 100%)"}}><Image src={iconSearch} alt="iconSearch" className="w-[17px]"/>Buscar</button>
            </div>
          </div>
        </div>
      </section>
      <main className="max-w-idealMaximumWidth m-auto flex flex-col justify-between items-center">
        <h2 className="bg-mediumPrimary rounded-[26px] text-white font-primaryFontBold text-[42px] px-[29px] leading-[50px] mt-[90px]">ANUNCIO DESTACADO</h2>
        <span className="text-mediumPrimary text-[25px] font-primaryFontBold border-b-2 border-mediumPrimary leading-none mt-3">Snacks y Licores</span>
        <div className="grid grid-cols-3 mt-16 gap-x-[107px] gap-y-[114px]">
          <Anuncio img={PremiumTragos} nameBiz="Licorería Pepito" classDivStars="flex bg-[#30b507] rounded-[4px] px-1 py-1 gap-1" valueStars="5.0" styleImageBiz={{boxShadow: "5px 5px 10px 0px rgba(0, 0, 0, .5)"}} />
          <Anuncio img={PremiumTienda} nameBiz="Chisitos Juancito" classDivStars="flex bg-[#30b507] rounded-[4px] px-1 py-1 gap-1" valueStars="3.8" styleImageBiz={{boxShadow: "5px 5px 10px 0px rgba(0, 0, 0, .5)"}} />
          <Anuncio img={PremiumLicoreria} nameBiz="Licorería Mary" classDivStars="flex bg-[#30b507] rounded-[4px] px-1 py-1 gap-1" valueStars="3.0" styleImageBiz={{boxShadow: "5px 5px 10px 0px rgba(0, 0, 0, .5)"}} />
          <Anuncio img={NoPremiumTragos} nameBiz="Licorería Pepito" classDivStars="flex bg-[#B69A9D] rounded-[4px] px-1 py-1 gap-1" valueStars="0.0" styleImageBiz={{boxShadow: "none"}} />
          <Anuncio img={NoPremiumTienda} nameBiz="Chisitos Juancito" classDivStars="flex bg-[#B69A9D] rounded-[4px] px-1 py-1 gap-1" valueStars="0.0" styleImageBiz={{boxShadow: "none"}} />
          <Anuncio img={NoPremiumLicoreria} nameBiz="Licorería Mary" classDivStars="flex bg-[#B69A9D] rounded-[4px] px-1 py-1 gap-1" valueStars="0.0" styleImageBiz={{boxShadow: "none"}} />
        </div>
        <div>
          <a>
            <h5 className="flex items-center font-primaryFontBold text-[#b69a9d] text-xl leading-none gap-3 mt-24">Ver más anuncios <Image src={IconoArrowRight} alt="IconoArrowRight" className="w-[19px] object-contain"/></h5>
          </a>
        </div>
      </main>
      <section className="mb-52">
        <h3 className="font-primaryFontBold text-[42px] text-mediumPrimary text-center mt-32 leading-none">ÚLTIMAS NOTICIAS</h3>
        <div className="max-w-idealMaximumWidth mx-auto mt-28">
          <SliderNoticias />
          <a className="flex justify-center">
            <h5 className="flex items-center font-primaryFontBold text-[#b69a9d] text-xl leading-none gap-3 mt-12">Ver más noticias <Image src={IconoArrowRight} alt="IconoArrowRight" className="w-[19px] object-contain"/></h5>
          </a>
        </div>
      </section>
      <Footer />
    </>
  )
}
