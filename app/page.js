import Header from "./header/page";
import Slider from "./slider/page";

import ticket from "../public/img/ticket.png"
import iconSearch from "../public/img/iconSearch.png"
import Image from "next/image";

export default function Home() {
  const images = [
    '/img/slider/comida.png',
    '/img/slider/licoreria.png',
    '/img/slider/preparacion.png',
    '/img/slider/veterinaria.png',
  ];

  return (
    <main className="">
      <Header />
      <section className="bg-[url('/img/portadaCarruselHome.webp')] bg-cover bg-no-repeat h-[603px]">
        <div className="max-w-idealMaximumWidth m-auto pt-[47px]">
          <h2 className="font-[MontserratBold] text-[47px] text-white text-center w-[785px] m-auto leading-tight" style={{textShadow: "1px 1px 8px rgba(0, 0, 0, 1)"}}>Descubre los productos <br /> y servicios que tienes alrededor</h2>
          <div>
            <Slider images={images} />
          </div>
          <div className="flex justify-center">
            <div className="flex gap-4 bg-white w-fit px-[17px] py-[16px] rounded-2xl">
              <input type="text" placeholder="Qué buscas" className="border-b-[1px] border-[#F4AF14] leading-normal focus-visible:outline-none"/>
              <button className="border-[1px] border-[#f4af14] p-2"><Image src={ticket} alt="ticket" /></button>
              <button className="flex items-center gap-2 font-[MontserratBold] text-white rounded-xl pt-1 px-6 after:content:url('/img/iconSearch.png')" style={{background: "linear-gradient(180deg, rgba(207, 107, 0, 1) 0%, rgba(210, 113, 2, 1) 21.7%, rgba(219, 128, 6, 1) 49.47%, rgba(233, 155, 14, 1) 80.41%, rgba(244, 175, 20, 1) 100%)"}}><Image src={iconSearch} alt="iconSearch" /> Buscar</button>
            </div>
          </div>
        </div>
      </section>
      <main>
        <h2>ANUNCIO DESTACADO</h2>
        <span>Snacks y Licores</span>
        <div>
          <article>
            {/* <Image /> */}
            <h5>Licorería Pepito</h5>
            <div>

            </div>
          </article>
          <article></article>
          <article></article>
          <article></article>
          <article></article>
          <article></article>
        </div>
      </main>
    </main>
  )
}