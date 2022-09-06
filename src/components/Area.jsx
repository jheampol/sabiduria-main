import React, { useState } from 'react'

export const Area = () => {

   const [showModal, setShowModal] = useState(false);

   return (
      <>
         <section className="max-w-screen-xl mt-20 mx-auto px-6 md:px-16">
            <div className="text-center mb-4 w-full">
               <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Areas</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
               <div className="transform transition duration-500 hover:scale-110">
                  <div className="card">
                     <div className="rounded overflow-hidden shadow-2xl bg-gray-100">
                        <img className="w-full" src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg" alt="Mountain" />
                        <div className="px-6 py-4">
                           <div className="font-bold text-xl mb-2">Red Heaven</div>
                           <p className="text-gray-700 text-base">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                           </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                           <button
                              className=" bg-red-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(true)}
                           >Mas Informacion
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="transform transition duration-500 hover:scale-110">
                  <div className="card">
                     <div className="rounded overflow-hidden shadow-2xl bg-gray-100">
                        <img className="w-full" src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg" alt="Mountain" />
                        <div className="px-6 py-4">
                           <div className="font-bold text-xl mb-2">Red Heaven</div>
                           <p className="text-gray-700 text-base">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                           </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                           <span className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2 cursor-pointer hover:bg-red-600 transition delay-50 duration-300 ease-in-out">Mas Informacion</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="transform transition duration-500 hover:scale-110">
                  <div className="card">
                     <div className="rounded overflow-hidden shadow-2xl bg-gray-100">
                        <img className="w-full" src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg" alt="Mountain" />
                        <div className="px-6 py-4">
                           <div className="font-bold text-xl mb-2">Red Heaven</div>
                           <p className="text-gray-700 text-base">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                           </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                           <span className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2 cursor-pointer hover:bg-red-600 transition delay-50 duration-300 ease-in-out">Mas Informacion</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="transform transition duration-500 hover:scale-110">
                  <div className="card">
                     <div className="rounded overflow-hidden shadow-2xl bg-gray-100">
                        <img className="w-full" src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg" alt="Mountain" />
                        <div className="px-6 py-4">
                           <div className="font-bold text-xl mb-2">Red Heaven</div>
                           <p className="text-gray-700 text-base">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                           </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                           <span className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2 cursor-pointer hover:bg-red-600 transition delay-50 duration-300 ease-in-out">Mas Informacion</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {showModal ? (
            <>
               <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
               >
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                     {/*content*/}
                     <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                           <h3 className="text-3xl font-semibold">
                              Modal Title
                           </h3>
                           <button
                              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setShowModal(false)}
                           >
                              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                 ×
                              </span>
                           </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                           <p className="my-4 text-slate-500 text-lg leading-relaxed">
                              I always felt like I could do anything. That’s the main
                              thing people are controlled by! Thoughts- their perception
                              of themselves! They're slowed down by their perception of
                              themselves. If you're taught you can’t do anything, you
                              won’t do anything. I was taught I could do everything.
                           </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                           <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                           >
                              Cerrar
                           </button>
                           
                        </div>
                     </div>
                  </div>
               </div>
               <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
         ) : null}
      </>
   )
}
