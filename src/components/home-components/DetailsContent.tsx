import Image from 'next/image'
import React from 'react'
import CardComponent, { CardProps } from './CardComponent'

export default function DetailsContent() {
  const cardData:CardProps[] = [
    {
      title: "Lorem ipsum dolor",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit hic provident? Deserunt natus aspernatur fugiat ea doloribus necessitatibus nemo id, et dicta ullam perspiciatis, eum quidem, expedita rem. A repellendus rerum cum, cumque ut id ipsum, perspiciatis consectetur blanditiis tempore nam recusandae amet reprehenderit nulla deserunt necessitatibus. Minima laudantium ut distinctio? ",
      icon: "/shield-tick.svg",
      img:''
    },
    {
      title: "Dolor sit Amet",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit hic provident? Deserunt natus aspernatur fugiat ea doloribus necessitatibus nemo id, et dicta ullam perspiciatis, eum quidem, expedita rem. A repellendus rerum cum, cumque ut id ipsum, perspiciatis consectetur blanditiis tempore nam recusandae amet reprehenderit nulla deserunt necessitatibus. Minima laudantium ut distinctio? ",
      icon: "/dataflow-03.svg",
      img:''
    }
  ]
  return (
    <div className='p-4 md:p-8 lg:px-16 lg:pt-20 lg:pb-36'>
      <div className='max-w-7xl mx-auto '>
        <h1 className='uppercase text-4xl lg:text-7xl  text-white  font-extrabold '>Lorem ipsum</h1>
        <h1 className='uppercase text-4xl lg:text-7xl text-white  font-extrabold '>dolor set</h1>

        <div className='flex flex-wrap gap-14 gap-y-10 mx-auto mt-14 lg:mt-20'>
          {
            cardData.map((value, index) => (
              <CardComponent key={index} title={value.title} text={value.text} icon={value.icon} img={value.img} />
            ))
          }
        </div>
        <div className='flex flex-wrap justify-end gap-14 gap-y-10'>
          <div className='max-w-sm flex-col '>
            <Image
              src="/image4.png"
              alt="Lorem Logo"
              width={410} // Set the desired width
              height={410} // Set the desired height
            />
          </div>
          <div className='max-w-sm flex-col me-4'>
            <h3 className='uppercase text-lg lg:text-2xl text-white font-semibold'>Lorem ipsum </h3>
            <p className='para-text mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit hic provident? Deserunt natus aspernatur fugiat ea doloribus necessitatibus nemo id, et dicta ullam perspiciatis, eum quidem, expedita rem. A repellendus rerum cum, cumque ut id ipsum, perspiciatis consectetur blanditiis tempore nam recusandae amet reprehenderit nulla deserunt necessitatibus. Minima laudantium ut distinctio?</p>
            <Image
              src="/bar-chart-circle-01.svg"
              alt="bar-chart"
              width={24} // Set the desired width
              height={24} // Set the desired height
            />
          </div>
        </div>
      </div>
    </div>
  )
}
