'use client'

import Image from 'next/image'
import React from 'react'

export type CardProps = {
    title: string,
    text: string
    icon: string,
    img: string,
}

export default function CardComponent({
    title,
    text,
    icon,
    img
}: CardProps) {

    return (
        <div className='max-w-sm '>
            {img ? <Image
                src={img}
                alt="user-plus"
                width={410} // Set the desired width
                height={410} // Set the desired height
                className='mb-20 lg:mb-10'
            /> : ''}
            <h3 className='uppercase text-lg lg:text-2xl text-white font-semibold'>{title}</h3>
            <p className='para-text mb-8 text-lg'>{text}</p>
            <Image
                src={icon}
                alt="user-plus"
                width={24} // Set the desired width
                height={24} // Set the desired height
                className='mb-10'
            />
        </div>
    )
}
