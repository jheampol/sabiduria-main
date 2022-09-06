import React from 'react'
import dynamic from 'next/dynamic';
import styles from '../../styles/Home.module.css';

const Map = dynamic(import('./Map/Map'), {ssr: false})
const DEFAULT_CENTER = [-9.306140392419213, -75.99910266102623]

export const Contact = () => {
   return (
      <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
         <div className="flex flex-col justify-between">
            <div>
               <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Contactanos!</h2>
               <div className="text-gray-700 mt-8">
                  Nos puede <span className="underline">ubicar</span> en:
               </div>
            </div>
            <div className="mt-8 text-center">
               <Map className={styles.homeMap} center={DEFAULT_CENTER} zoom={16}>
                  {({ TileLayer, Marker, Popup }) => (
                     <>
                        <TileLayer
                           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                           attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        />
                        <Marker position={DEFAULT_CENTER}>
                           <Popup>
                              A pretty CSS3 popup. <br /> Easily customizable.
                           </Popup>
                        </Marker>
                     </>
                  )}
               </Map>
            </div>
         </div>
         <div className="">
            <div>
               <span className="uppercase text-sm text-gray-600 font-bold">Nombre Completo</span>
               <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text" placeholder="" />
            </div>
            <div className="mt-8">
               <span className="uppercase text-sm text-gray-600 font-bold">Correo</span>
               <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text" />
            </div>
            <div className="mt-8">
               <span className="uppercase text-sm text-gray-600 font-bold">Mensaje</span>
               <textarea
                  className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="mt-8">
               <button
                  className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                  Enviar Mensaje
               </button>
            </div>
         </div>
      </div>
   )
}
