'use client'
import React, { useState } from 'react'
import image2 from '../../asset/image3.png'

export default function AboutUs() {
  const [imageHover, setImageHover] = useState<boolean>(false);
  const onImageHover = () => {
    setImageHover(true);
  }
  const onImageHoverOut = () => {
    setImageHover(false);
  }
  console.log(imageHover);
  return (
    <div className='p-4 md:p-8 lg:px-16 lg:pt-20 lg:pb-36'>
      <div className='max-w-7xl mx-auto relative aboutUsImgPasrent' style={{
        backgroundImage: imageHover ? `url(${image2.src})` : '',
        backgroundSize: 'cover',
        height:'470px'
      }}>
        <div className='flex flex-wrap justify-between' >
          <div className=''>
            <h1 className='uppercase  text-4xl lg:text-7xl text-white  font-extrabold '>About </h1>
            <h1 className='uppercase  text-4xl lg:text-7xl text-white  font-extrabold '>Us</h1>

            <span className='text-white'>Lorem</span>
            <span className='text-white'>Lorem</span>
          </div>

          <div className='flex flex-wrap items-end justify-end max-w-xl'>
            <p className='para-text max-w-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis modi ad magni eos deleniti, nostrum repellendus tenetur laudantium beatae minima eveniet nihil consequuntur nesciunt et iste aspernatur? Architecto, fugiat ad nesciunt libero debitis esse provident corrupti repellat accusamus quis voluptatibus rem id sunt unde voluptas sit alias ab velit eligendi!</p>
          </div>
        </div>
        <div className='rounded-full  h-full ms-20 md:ms-2 lg:ms-32 absolute md:top-16 lg:top-24 '
          onMouseEnter={onImageHover} onMouseLeave={onImageHoverOut}
          style={{
            backgroundImage: !imageHover ? `url(${image2.src})` : '',
            backgroundSize: 'cover',

          }}>
        </div>
      </div>
    </div>
  )
}
