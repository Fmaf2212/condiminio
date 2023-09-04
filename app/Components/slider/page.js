"use client";

import React, { useState, useEffect, useRef } from "react";
import "./slider.css";

import flechaDerecha from '../../../public/img/slider/arrowRight.png'
import flechaIzquierda from '../../../public/img/slider/arrowLeft.png'
import Image from "next/image";

const Slider = ({ images }) => {
  const wrapperRef = useRef(null);//el wrapper que envuelve el slider con todo y flechas
  const carouselRef = useRef(null);//El ul del slider
  const firstCardRef = useRef(null);//primer elemento hijo li (primer card) del ul
  const arrowBtnsRef = useRef([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);
  const [cardPerView, setCardPerView] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    const firstCard = firstCardRef.current;

    // Obtén la cantidad de tarjetas que caben en el carrusel a la vez
    setCardPerView(Math.round(carousel.offsetWidth / firstCard.offsetWidth));

    // Inserta copias de las últimas tarjetas al comienzo del carrusel para un desplazamiento infinito
    const reversedChildren = [...carousel.children]
      .slice(-cardPerView)
      .reverse();
    reversedChildren.forEach((card) => {
      carousel.insertAdjacentElement("afterbegin", card.cloneNode(true));
    });

    // Inserta copias de las primeras tarjetas hasta el final del carrusel para un desplazamiento infinito
    const firstChildren = [...carousel.children].slice(0, cardPerView);
    firstChildren.forEach((card) => {
      carousel.insertAdjacentElement("beforeend", card.cloneNode(true));
    });

    // Desplázate por el carrusel hasta la posición adecuada para ocultar las primeras tarjetas duplicadas
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    arrowBtnsRef.current.forEach((btn) => {
      btn.addEventListener("click", () => {
        carousel.scrollLeft +=
          btn.id === "left" ? -firstCard.offsetWidth : firstCard.offsetWidth;
      });
    });

    return () => {
      arrowBtnsRef.current.forEach((btn) => {
        btn.removeEventListener("click", () => {
          carousel.scrollLeft +=
            btn.id === "left" ? -firstCard.offsetWidth : firstCard.offsetWidth;
        });
      });
    };
  }, [cardPerView]);

  const dragStart = (e) => {
    setIsDragging(true);
    carouselRef.current.classList.add("dragging");
    setStartX(e.pageX);
    setStartScrollLeft(carouselRef.current.scrollLeft);
  };

  const dragging = (e) => {
    if (!isDragging) return;
    carouselRef.current.scrollLeft = startScrollLeft - (e.pageX - startX);
  };

  const dragStop = () => {
    setIsDragging(false);
    carouselRef.current.classList.remove("dragging");
  };

  const infiniteScroll = () => {
    const carousel = carouselRef.current;
    if (carousel.scrollLeft === 0) {
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
      carousel.classList.remove("no-transition");
    } else if (
      Math.ceil(carousel.scrollLeft) ===
      carousel.scrollWidth - carousel.offsetWidth
    ) {
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove("no-transition");
    }
    clearTimeout(timeoutId);
    if (!wrapperRef.current.matches(":hover")) {
      autoPlay();
    }
  };

  const autoPlay = () => {
    const carousel = carouselRef.current;
    if (window.innerWidth < 800 || !isAutoPlay) return;
    setTimeoutId(
      setTimeout(
        () => (carousel.scrollLeft += firstCardRef.current.offsetWidth),
        2500
      )
    );
  };

  const handleMouseDown = (e) => {
    dragStart(e);
  };

  const handleMouseMove = (e) => {
    dragging(e);
  };

  const handleMouseUp = () => {
    dragStop();
  };

  const handleScroll = () => {
    infiniteScroll();
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
  };

  const handleMouseLeave = () => {
    autoPlay();
  };


  return (
    <div className="wrapper" ref={wrapperRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <i
        id="left"
        className="arrow left flex justify-center items-center"
        ref={(el) => (arrowBtnsRef.current[0] = el)}
      ><Image src={flechaIzquierda} alt="flechaIzquierda" className="w-[14px] h-[20px]" /></i>
      <ul className="carousel" ref={carouselRef} onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onScroll={handleScroll}>
        <li className="card" ref={firstCardRef}>
            <div className="img"><img src="/img/slider/comida.png" alt="img" draggable="false" /></div>
            <h2 className="font-[MontserratBold] text-[28px] text-white text-center leading-none"  style={{textShadow: "1px 1px 8px rgba(0, 0, 0, 1)"}}>Comida Rápida</h2>
        </li>
        <li className="card">
            <div className="img"><img src="/img/slider/licoreria.png" alt="img" draggable="false" /></div>
            <h2 className="font-[MontserratBold] text-[28px] text-white text-center leading-none"  style={{textShadow: "1px 1px 8px rgba(0, 0, 0, 1)"}}>Sancks y Licores</h2>
        </li>
        <li className="card">
            <div className="img"><img src="/img/slider/preparacion.png" alt="img" draggable="false" /></div>
            <h2 className="font-[MontserratBold] text-[28px] text-white text-center leading-none max-w-[178px]"  style={{textShadow: "1px 1px 8px rgba(0, 0, 0, 1)"}}>Reparación de Celulares</h2>
        </li>
        <li className="card">
            <div className="img"><img src="/img/slider/veterinaria.png" alt="img" draggable="false" /></div>
            <h2 className="font-[MontserratBold] text-[28px] text-white text-center leading-none"  style={{textShadow: "1px 1px 8px rgba(0, 0, 0, 1)"}}>Veterinaria</h2>
        </li>
      </ul>
      <i
        id="right"
        className="arrow right flex justify-center items-center"
        ref={(el) => (arrowBtnsRef.current[1] = el)}
      ><Image src={flechaDerecha} alt="flechaDerecha" className="w-[14px] h-[20px]" /></i>
    </div>
  );
};

export default Slider;
