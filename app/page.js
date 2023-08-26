import Header from "./header/page";
import Slider from "./slider/page";

import ticket from "../public/img/ticket.png"
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
            <div className="bg-white w-fit">
              <input type="text" placeholder="Qué buscas"/>
              <button><Image src={ticket} alt="ticket" /></button>
              <button>Buscar</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
