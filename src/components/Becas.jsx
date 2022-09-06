import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export const Becas = () => {

   const [urlImage, setUrlImage] = useState([])

   let imagesBeca = [
      '/img/becas/beca01.svg',
      '/img/becas/beca02.svg',
      '/img/becas/beca03.svg',
      '/img/becas/beca04.svg',
      '/img/becas/beca05.svg',
      '/img/becas/beca06.svg',
   ];


   // const getImageBecas = async () => {
   //    const tempArrayUrlImage = [];
   //    const url = `${process.env.NEXT_PUBLIC_API_URL}/becas`;
   //    const response = await fetch(url);
   //    const result = await response.json();

   //    result[0].images.forEach(item => {
   //       const tempUrlImage = `${process.env.NEXT_PUBLIC_API_URL}${item.url}`;
   //       tempArrayUrlImage.push(tempUrlImage);
   //    })
   //    setUrlImage(tempArrayUrlImage);

   // };
   
   return (
      <section className='mb-5 mt-10 md:mb-10 md:pb-10 pb-5 px-5 rounded-md'>
         <Slide slidesToScroll={4} slidesToShow={4} indicators={true}>
            {imagesBeca.map((item) => (
               <div key={item} className='text-center'>
                  <Image src={item} height={80} width={100} alt='images-becas' />
               </div>
            ))}
         </Slide>
      </section>
   )
}
