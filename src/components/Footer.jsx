import React from 'react'

const year = new Date().getFullYear();
export const Footer = () => {

   return (
      <footer className="bg-gray-900 text-white pt-12 pb-8 px-4">
         <div className="container overflow-hidden flex flex-col lg:flex-row justify-between mx-auto px-4">
            <h2 className="block mr-2 w-30 text-2xl font-bold">
               Academia Preuniversitaría Sabiduría
            </h2>
            <div className="w-3/4 block sm:flex text-sm mt-6 lg:mt-0">
               <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                  <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Ofrecemos</li>
                  <li><span className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white">420 horas de clases</span>
                  </li>
                  <li><span className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white">32 horas de evaluación</span>
                  </li>
                  <li><span className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white">Biblioteca</span></li>
                  <li><span className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white">Libros</span></li>
                  <li><span className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white">Enseñanza Basico - Avanzado</span></li>
               </ul>
               <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                  <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Turnos</li>
                  <li><i className="fa-brands fa-algolia text-orange-100"></i><span className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white">Mañana</span>
                  </li>
                  <li><i className="fa-brands fa-algolia text-orange-100"></i><span className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white">Tarde</span>
                  </li>
                  <li><i className="fa-brands fa-algolia text-orange-100"></i><span className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white">Noche</span></li>
               </ul>
               <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                  <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Informes e Inscripciones</li>
                  <li><i className="fa-brands fa-whatsapp-square text-green-500"></i> <span className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white">983 273 364</span>
                  </li>
               </ul>
               <div className="text-gray-700 flex flex-col w-full">
                  <div className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Siguenos en</div>
                  <div className="flex pl-4 justify-start mt-2">
                     <a className="block flex items-center text-gray-300 hover:text-white mr-6 no-underline" target="_blank" href="https://www.facebook.com/AcademiaSabiduria">
                        <i className="fa-brands fa-facebook text-xl"></i>
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <div
            className="pt-4 mt-4 pt-6 text-gray-600 border-t border-gray-800 flex flex-col md:flex-row justify-center items-center">
            <div>&copy; { year } Todos los derechos reservados</div>
         </div>
      </footer>

   )
}
