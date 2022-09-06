import { useState, useEffect } from "react";
import Link from "next/link";
import { Zoom } from "react-slideshow-image";
import styles from "../../styles/Header.module.css";

import image1 from "../../public/img/slider/slide_1.jpg";
import image2 from "../../public/img/slider/slide_2.jpg";
import image3 from "../../public/img/slider/slide_3.jpg";
import image4 from "../../public/img/slider/slide_4.jpg";
import image5 from "../../public/img/slider/slide_5.jpg";
import image6 from "../../public/img/hero.jpeg";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [home, setHome] = useState({
    lema: "",
    description: "",
    logo: "",
    imageSlider: "",
  });

  const images = [image1, image2, image3, image4, image5, image6];

  const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    scale: 0.4,
    arrows: false,
  };

  // const getHomes = async () => {
  //   const url = `${process.env.NEXT_PUBLIC_API_URL}/homes`;
  //   const response = await fetch(url);
  //   const result = await response.json();
  //   if (result.length > 1) {
  //     return;
  //   }
  //   setHome({
  //     lema: result[0].lema,
  //     description: result[0].descripcion,
  //     logo: result[0].logo?.url,
  //     imageSlider: result[0].imagenSlider?.url,
  //   });
  // };
  // useEffect(() => {
  //   getHomes();
  // }, []);

  return (
    <header className={styles.header}>
      <nav className="w-full bg-sky-900 shadow-lg">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="!#">
                <h2 className="text-2xl font-bold text-white">LOGO</h2>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white hover:text-indigo-200">
                  <a href="!#">Inicio</a>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <a href="!#">Servicios</a>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <a href="!#">Áreas</a>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <a href="!#">Testimoniales</a>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <a href="!#">Contacto</a>
                </li>
              </ul>

              <div className="mt-3 space-y-2 md:hidden md:inline-block">
                <a
                  href="!#"
                  className="inline-block w-full px-4 py-2 text-center text-white bg-sky-600 rounded-md shadow hover:bg-sky-800"
                >
                  Sistema Academico
                </a>
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-block">
            <a
              href="!#"
              className="px-4 py-2 text-white bg-sky-600 rounded-md shadow hover:bg-sky-800"
            >
              Sistema Academico
            </a>
          </div>
        </div>
      </nav>
      <div className=" responsive-img slide-container relative" >
        <div className="text-silider">
          <Zoom  {...zoomOutProperties}>
            {images.map((each, index) => (
              <img className="h-full w-full imgcover" key={index} src={each.src} />
            ))}
          </Zoom>
        </div>
        <div className="absolute top-0 z-10 grid md:grid-cols-2 md:gap-8">
          <div className="px-5 mt-5 md:mt-20 sm:px-20 w-full">
            <div className="text-center md:text-justify">
              <h2 className="text-3xl tracking-tight  leading-7 font-extrabold sm:text-5xl text-white sm:leading-none md:text-6xl">
                Academia Preuniversitaria <span className="text-cyan-400 uppercase">Sabiduria</span>
              </h2>
              <p className="mt-3 leading-4 md:leading-6 text-white sm:mt-5 sm:max-w-xl md:mt-5 text-lg font-light">
                Formamos personas con las capacidad de superar cada obstáculo en el ámbito estudiantil. mas del 70%
                logran ingresar.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex justify-start">
                <div className="hidden md:block rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-sky-600 hover:bg-sky-800 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Sistema Académico
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-20 text-center md:mr-20 flex justify-center">
            <h3 className="absolute  md:bg-sky-800 px-10 py-5 rounded-full bottom-0 text-sm  sm:text-3xl text-white sm:leading-none md:text-4xl">
              &quot;El principio de la sabiduría es el temor a Jehová&quot;
            </h3>
          </div>
        </div>
      </div>
      {/* Finish NavBar */}
      {/* Init Hero */}

      {/* Finish Hero */}
    </header>
  );
};

export default Header;
