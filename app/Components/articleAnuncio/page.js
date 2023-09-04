
import IconoUbi from "../../../public/img/anunciosDestacados/iconos/IconoUbi.png"
import IconoWsp from "../../../public/img/anunciosDestacados/iconos/IconoWsp.png"
import IconoDate from "../../../public/img/anunciosDestacados/iconos/IconoDate.png"
import IconoStar from "../../../public/img/anunciosDestacados/iconos/IconoStar.png"

import IconoFacebook from "../../../public/img/anunciosDestacados/iconos/IconoFacebook.png"
import IconoInstagram from "../../../public/img/anunciosDestacados/iconos/IconoInstagram.png"
import Image from "next/image"

const Anuncio = ({img,nameBiz,classDivStars,valueStars,styleImageBiz}) => {
    return (
        <article>
            <Image src={img} alt={img} className="w-[321px]" style={styleImageBiz} />
            <h5 className="font-primaryFontBold text-mediumPrimary text-[21px] leading-none mt-[26px] pl-2.5">{nameBiz}</h5>
            <div className="flex items-center gap-[10px] mt-3 pl-2.5">
                <div className={classDivStars}>
                    <Image src={IconoStar} alt="IconoStar" className="w-2.5 object-contain" />
                    <h5 className="font-secondaryFont text-white leading-none">{valueStars}</h5>
                </div>
                <h5 className="font-primaryFontBold text-[13px] text-[#858586]">5 Revisiones</h5>
            </div>
            <div className="mt-3 -ml-2.5 flex flex-col gap-3">
                <div className="flex gap-3 items-center">
                    <Image src={IconoUbi} alt="IconoUbi" className="w-[12px] object-contain" />
                    <h5 className="font-primaryFontBoldMedium text-[#858586] text-[15px] leading-none">Av. Los Alisos 352 Torre 5</h5>
                </div>
                <div className="flex gap-1.5 items-center">
                    <Image src={IconoWsp} alt="IconoWsp" className="w-[18px] object-contain" />
                    <h5 className="flex gap-1 font-primaryFontBoldMedium text-[#858586] text-[15px] leading-none"><span>01 6207051</span>/<span>992 358 488</span></h5>
                </div>
                <div className="flex gap-1.5 items-center">
                    <Image src={IconoDate} alt="IconoDate" className="w-[18px] object-contain" />
                    <h5 className="font-primaryFontBoldMedium text-[#858586] text-[15px] leading-none">01/07/2023</h5>
                </div>
            </div>
            <div className="mt-10 flex items-center justify-between px-4">
                <button className="bg-[#b69a9d] py-1.5 px-4 rounded-full text-white text-[10px] font-primaryFontBold">Ver Perfil</button>
                <div className="flex items-center gap-2">
                    <h5 className="text-[17px] font-primaryFontBold text-[#b69a9d] pr-2 leading-none">Síguenos</h5>
                    <a href="www.facebook.com">
                        <Image src={IconoFacebook} alt="IconoFacebook" className="w-[7px] object-contain" />
                    </a>
                    <a href="www.instagram.com">
                        <Image src={IconoInstagram} alt="IconoInstagram" className="w-[15px] object-contain" />
                    </a>
                </div>
            </div>
        </article>
    )
}

export default Anuncio