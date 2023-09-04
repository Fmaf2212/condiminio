import React from 'react'

import './header.css'
import Image from 'next/image'

import iconUser from '../../../public/img/iconUser.png'

const Header = () => {
  return (
    <header className='pt-[63px] pb-[57px]'>
        <div className='flex items-center justify-center gap-8 pb-[57px]'>
            <h1 className='font-[Fontspring] font-bold text-[44px] leading-none text-mediumPrimary'>CONDOMINIO</h1>
            <h2 className='font-[MrDafoe] text-[73px] leading-[0.603] text-mediumPrimary'>Santa Anita</h2>
        </div>
        <nav className='max-w-idealMaximumWidth m-auto flex justify-between px-6'>
            <ul className='flex gap-[32px]' data-animation="bonus">
                <li><a href="#" className='relative h-[60%] block font-[MontserratBold] leading-none text-base text-mediumText after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:z-[1]  after:bg-mediumPrimary after:scale-x-0 after:origin-left after:duration-500 after:ease-in-out hover:after:origin-left hover:after:scale-x-100 hover:after:ease-[0.2,1,0.82,0.94]'>Inicio</a></li>
                <li><a href="#" className='relative h-[60%] block font-[MontserratBold] leading-none text-base text-mediumText after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:z-[1]  after:bg-mediumPrimary after:scale-x-0 after:origin-left after:duration-500 after:ease-in-out hover:after:origin-left hover:after:scale-x-100 hover:after:ease-[0.2,1,0.82,0.94]'>Anuncios</a></li>
                <li><a href="#" className='relative h-[60%] block font-[MontserratBold] leading-none text-base text-mediumText after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:z-[1]  after:bg-mediumPrimary after:scale-x-0 after:origin-left after:duration-500 after:ease-in-out hover:after:origin-left hover:after:scale-x-100 hover:after:ease-[0.2,1,0.82,0.94]'>Categorías</a></li>
                <li><a href="#" className='relative h-[60%] block font-[MontserratBold] leading-none text-base text-mediumText after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:z-[1]  after:bg-mediumPrimary after:scale-x-0 after:origin-left after:duration-500 after:ease-in-out hover:after:origin-left hover:after:scale-x-100 hover:after:ease-[0.2,1,0.82,0.94]'>Lugares</a></li>
                <li><a href="#" className='relative h-[60%] block font-[MontserratBold] leading-none text-base text-mediumText after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:z-[1]  after:bg-mediumPrimary after:scale-x-0 after:origin-left after:duration-500 after:ease-in-out hover:after:origin-left hover:after:scale-x-100 hover:after:ease-[0.2,1,0.82,0.94]'>Contáctenos</a></li>
                <li><a href="#" className='relative h-[60%] block font-[MontserratBold] leading-none text-base text-mediumText after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:z-[1]  after:bg-mediumPrimary after:scale-x-0 after:origin-left after:duration-500 after:ease-in-out hover:after:origin-left hover:after:scale-x-100 hover:after:ease-[0.2,1,0.82,0.94]'>Miembros</a></li>
            </ul>
            <button className='flex items-center gap-2 font-[MontserratBold] text-base text-mediumText bg-[rgba(182,154,157,.1)] rounded-lg py-1 pr-[108px] pl-[31px]'>
                <Image src={iconUser} alt='iconUser' className='w-[31px]' />
                Crear Perfil
            </button>
        </nav>
    </header>
  )
}

export default Header