'use client'
import React, { useState } from 'react'
import Accordion from './Accordion'
const accordianDataActual = [
    {
        title: "Lorem ipsum dolor sit amet",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, numquam provident accusantium totam doloribus quos ratione iste debitis, architecto qui necessitatibus libero natus nostrum unde aliquam quis quasi? Voluptate, cum?",
        active: true,

    },
    {
        title: "Lorem ipsum dolor sit amet",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, numquam provident accusantium totam doloribus quos ratione iste debitis, architecto qui necessitatibus libero natus nostrum unde aliquam quis quasi? Voluptate, cum?",
        active: false,
    },
    {
        title: "Lorem ipsum dolor sit amet",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, numquam provident accusantium totam doloribus quos ratione iste debitis, architecto qui necessitatibus libero natus nostrum unde aliquam quis quasi? Voluptate, cum?",
        active: false,
    },
    {
        title: "Lorem ipsum dolor sit amet",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, numquam provident accusantium totam doloribus quos ratione iste debitis, architecto qui necessitatibus libero natus nostrum unde aliquam quis quasi? Voluptate, cum?",
        active: false,
    },
    {
        title: "Lorem ipsum dolor sit amet",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, numquam provident accusantium totam doloribus quos ratione iste debitis, architecto qui necessitatibus libero natus nostrum unde aliquam quis quasi? Voluptate, cum?",
        active: false,
    },
    {
        title: "Lorem ipsum dolor sit amet",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, numquam provident accusantium totam doloribus quos ratione iste debitis, architecto qui necessitatibus libero natus nostrum unde aliquam quis quasi? Voluptate, cum?",
        active: false,
    },
    {
        title: "Lorem ipsum dolor sit amet",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, numquam provident accusantium totam doloribus quos ratione iste debitis, architecto qui necessitatibus libero natus nostrum unde aliquam quis quasi? Voluptate, cum?",
        active: false,
    },
];
export default function Footer() {
    const [accordianData, setAccordianData] = useState(accordianDataActual);
    const onAcordianClick = (key: number, value: boolean) => {
        accordianData.forEach(ele => {
            ele.active = false;
        });
        accordianData[key].active = value;
        setAccordianData(Object.assign([], accordianData));
    }
    return (
        <div className=''>
            <div className='p-5 '>
                <div className=' max-w-7xl mx-auto '>
                    <h1 className='text-4xl max-sm:mb-8 font-extrabold tracking-wider leading-none md:text-5xl lg:text-[5.9rem] text-white uppercase'>Lorem ipsum dolor</h1>
                </div>
            </div>
            <div className="mb-12">
                {accordianData.map((value, index) => (
                    <Accordion
                        onAcordianClick={onAcordianClick}
                        key={index}
                        index={index}
                        title={value.title}
                        id={`value-${index}`}
                        active={value.active}>
                        {value.text}
                    </Accordion>
                ))}
            </div>
        </div>
    )
}
