import Image from 'next/image'
import React from 'react'
import CardComponent, { CardProps } from '@/components/home-components/CardComponent'

export default function HomeComponent() {

    const cardData: CardProps[] = [
        {
            title: "dolor sit",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit hic provident? Deserunt natus aspernatur fugiat ea doloribus necessitatibus nemo id, et dicta ullam perspiciatis, eum quidem, expedita rem. A repellendus rerum cum, cumque ut id ipsum, perspiciatis consectetur blanditiis tempore nam recusandae amet reprehenderit nulla deserunt necessitatibus. Minima laudantium ut distinctio? ",
            icon: "/users-plus.svg",
            img: '',
        },
        {
            title: "Lorem ipsum dolor sit",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit hic provident? Deserunt natus aspernatur fugiat ea doloribus necessitatibus nemo id, et dicta ullam perspiciatis, eum quidem, expedita rem. A repellendus rerum cum, cumque ut id ipsum, perspiciatis consectetur blanditiis tempore nam recusandae amet reprehenderit nulla deserunt necessitatibus. Minima laudantium ut distinctio? ",
            icon: "/server-01.svg",
            img: '',
        },
        {
            title: "Lorem ipsum dolor sit",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit hic provident? Deserunt natus aspernatur fugiat ea doloribus necessitatibus nemo id, et dicta ullam perspiciatis, eum quidem, expedita rem. A repellendus rerum cum, cumque ut id ipsum, perspiciatis consectetur blanditiis tempore nam recusandae amet reprehenderit nulla deserunt necessitatibus. Minima laudantium ut distinctio? ",
            icon: "/server-01.svg",
            img: '/image1.png'
        },
        {
            title: "Lorem ipsum ",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit hic provident? Deserunt natus aspernatur fugiat ea doloribus necessitatibus nemo id, et dicta ullam perspiciatis, eum quidem, expedita rem. A repellendus rerum cum, cumque ut id ipsum, perspiciatis consectetur blanditiis tempore nam recusandae amet reprehenderit nulla deserunt necessitatibus. Minima laudantium ut distinctio? ",
            icon: "/percent-03.svg",
            img: ''
        },
        {
            title: "Dolor sit amet",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit hic provident? Deserunt natus aspernatur fugiat ea doloribus necessitatibus nemo id, et dicta ullam perspiciatis, eum quidem, expedita rem. A repellendus rerum cum, cumque ut id ipsum, perspiciatis consectetur blanditiis tempore nam recusandae amet reprehenderit nulla deserunt necessitatibus. Minima laudantium ut distinctio? ",
            icon: "/cpu-chip-01.svg",
            img: ''
        }
    ]

    return (
        <div className='p-4 md:p-8 lg:px-16 lg:pt-20 lg:pb-36' id='home'>
            <div className='max-w-7xl mx-auto '>
                <h1 className='uppercase text-4xl text-white mb-4 font-bold  md:text-5xl lg:text-[7.5rem] dark:text-white '> lorem ipsum </h1>
                <div className='flex flex-wrap gap-14 gap-y-10  mx-auto'>
                    {
                        cardData.map((value, index) => (
                            <CardComponent key={index} title={value.title} text={value.text} icon={value.icon} img={value.img} />
                        ))
                    }
                </div>
                <div className='flex flex-wrap gap-14 gap-y-10 justify-end mx-auto'>
                    <div className='max-w-sm'>
                        <Image
                            src="/image2.png"
                            alt="Lorem Logo"
                            width={410} // Set the desired width
                            height={410} // Set the desired height
                        />
                    </div>
                    <div className='max-w-sm me-4'>
                        <h3 className='uppercase text-white text-lg lg:text-2xl dark:text-white font-semibold'>Lorem ipsum dolor</h3>
                        <p className='para-text mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque animi nihil quia fugit iure. Maiores delectus reprehenderit itaque ratione ut distinctio aliquid facilis pariatur? In deserunt facilis pariatur nisi impedit voluptas perspiciatis alias suscipit voluptatibus.</p>
                        <Image
                            src="/cube-01.svg"
                            alt="cube"
                            width={24} // Set the desired width
                            height={24} // Set the desired height
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
