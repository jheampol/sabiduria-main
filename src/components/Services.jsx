import React from 'react'

export const Services = () => {
   return (
      <section className="max-w-screen-xl mx-auto px-6 md:px-16">
         <div className="text-center mb-4 w-full">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Servicios</h2>
         </div>
         <div className="flex flex-col sm:flex-row sm:-m-4">
            <div className="sm:w-1/3 mt-4 transform transition duration-500 hover:scale-110">
               <div
                  className="shadow-2xl h-full border-b-4 border-pink-500 bg-white flex flex-col items-center p-8 rounded-lg text-center sm:m-4 sm:p-3">
                  <div className="bg-gray-200 rounded-full text-indigo-700 w-16 h-16 p-2">
                     Image
                  </div>
                  <div className="font-bold mt-4">No Custom CSS</div>
                  <div className="mt-4 text-gray-600 text-sm tracking-wide">Tailwind's advanced className extraction will leave your
                     project free of custom CSS.</div>
               </div>
            </div>
            <div className="sm:w-1/3 mt-4 transform transition duration-500 hover:scale-110">
               <div
                  className=" shadow-2xl h-full border-b-4 border-pink-500 bg-white flex flex-col items-center p-8 rounded-lg text-center sm:m-4 sm:p-3">
                  <div className="bg-gray-200 rounded-full text-indigo-700 w-16 h-16 p-2"><svg className="h-12 w-12 fill-current"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                     <path
                        d="M20.1 4H3.6c-.5 0-.9.4-.9.9v10.5c0 .5.4.9.9.9h6.2v2H7.4c-.5 0-.8.4-.8.8s.3.9.8.9h9c.5 0 .8-.4.8-.8s-.4-.8-.8-.8H14v-2h6.2c.5 0 .9-.4.9-.9V4.9c-.1-.5-.5-.9-1-.9zm-.4 11H4.1V5.4h15.6V15zM6.9 10.7L9.7 12h.2c.1 0 .2 0 .3-.1.2-.1.3-.3.3-.5s-.1-.4-.3-.5l-1.7-.8 1.7-.8c.2-.1.3-.3.3-.5s-.1-.4-.3-.5h-.3c-.1 0-.2 0-.2.1L6.9 9.6c-.2.1-.3.3-.3.5 0 .3.1.5.3.6zm3.6 2.6c.1.1.3.2.4.2.2 0 .4-.2.5-.4l1.8-5.8c.1-.2 0-.4-.1-.5-.1-.1-.3-.2-.4-.2-.2 0-.4.2-.5.4l-1.8 5.8c0 .2 0 .4.1.5zm2.8-4.5c0 .2.1.4.3.5l1.7.8-1.7.9c-.2.1-.3.3-.3.5s.1.4.3.5c.1.1.2.1.3.1.1 0 .2 0 .2-.1l2.8-1.3c.2-.1.3-.3.3-.5s-.1-.4-.3-.5L14 8.3c-.1 0-.1-.1-.2-.1s-.2 0-.3.1c-.1.2-.2.3-.2.5z" />
                  </svg></div>
                  <div className="font-bold mt-4">Developer Experience</div>
                  <div className="mt-4 text-gray-600 text-sm tracking-wide">Tailwind is designed with your happiness in mind. The ease
                     of performing changes is refreshing.</div>
               </div>
            </div>

            <div className="sm:w-1/3 mt-4 transform transition duration-500 hover:scale-110">
               <div
                  className="shadow-2xl h-full border-b-4 border-pink-500 bg-white flex flex-col items-center p-8 rounded-lg text-center sm:m-4 sm:p-3">
                  <div className="bg-gray-200 rounded-full text-indigo-700 w-16 h-16 p-2"><svg className="h-12 w-12 fill-current"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                     <path
                        d="M15.3 3.3c0-.2.1-.3.3-.3h.4c.2 0 .3.1.3.3 0 .2-.1.3-.3.3h-.3c-.2.1-.4-.1-.4-.3zm-5 .4h3.3c.2 0 .3-.1.3-.3.1-.3 0-.4-.2-.4h-3.3c-.3 0-.4.1-.4.3 0 .2.1.4.3.4zm7.4 14.6v2.5c0 .7-.5 1.2-1.2 1.2h-9c-.7 0-1.2-.5-1.2-1.2V3.2c0-.7.6-1.2 1.2-1.2h8.9c.7 0 1.2.5 1.2 1.2v15.1zM7 18h10V4.7H7V18zM7 3.2V4h10v-.8c0-.3-.2-.5-.5-.5h-9c-.3 0-.5.2-.5.5zm10 17.6v-2.1H7v2.1c0 .3.2.5.5.5h8.9c.4 0 .6-.2.6-.5zm-3.7-.9v.2c0 .5-.4.9-.9.9h-.8c-.5 0-.9-.4-.9-.9v-.2c0-.5.4-.9.9-.9h.8c.5 0 .9.4.9.9zm-.6 0c0-.1-.1-.3-.3-.3h-.8c-.1 0-.3.1-.3.3v.2c0 .1.1.3.3.3h.8c.1 0 .3-.1.3-.3v-.2zm3.8 2.5h-9c-.9 0-1.6-.7-1.6-1.6V3.2c0-.9.7-1.6 1.6-1.6h8.9c.9 0 1.6.7 1.6 1.6v17.6c0 .9-.7 1.6-1.5 1.6zM13.4 21h3.1c.1 0 .2-.1.2-.2V19h-3.3c.2.2.3.5.3.9v.2c0 .3-.1.6-.3.9zm-6-2v1.8c0 .1.1.2.2.2h3.1c-.2-.2-.3-.5-.3-.9v-.2c0-.3.1-.6.3-.9H7.4zm0-1.4h9.2V5H7.4v12.6zm6.9-14h.7v-.3V3h-.7c0 .1.1.2.1.3s0 .2-.1.3zm-6.9 0h2.3c0-.1-.1-.2-.1-.3s0-.2.1-.3H7.5c-.1 0-.1.1-.1.2v.4z" />
                  </svg></div>
                  <div className="font-bold mt-4">Mobile Friendly</div>
                  <div className="mt-4 text-gray-600 text-sm tracking-wide">Modern applications demand mobile-friendly & Tailwind's
                     responsive modifiers make it easy.</div>
               </div>
            </div>
         </div>
      </section>

   )
}
