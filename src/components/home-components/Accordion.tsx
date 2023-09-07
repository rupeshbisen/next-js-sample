'use client'

type AccordionpProps = {
    children: React.ReactNode
    title: string
    id: string,
    index: number,
    active: boolean,
    onAcordianClick: (key: number, value: boolean) => void
}

export default function Accordion({
    children,
    title,
    id,
    active,
    index,
    onAcordianClick
}: AccordionpProps) {

    return (
        <div className="py-2">
            <h2 className={`px-5  ${active ? 'accordianHeading' : ''}`}>
                <button
                    className="max-w-7xl mx-auto uppercase text-white flex items-center text-lg lg:text-2xl  justify-between w-full text-left font-semibold py-2"
                    onClick={(e) => { e.preventDefault(); onAcordianClick(index, !active) }}
                    aria-expanded={active}
                    aria-controls={`accordion-text-${id}`}
                >
                    <span>{title}</span>
                    <svg className="fill-white shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                        <rect y="7" width="16" height="2" rx="1" className={`ttransform origin-center transition duration-200 ease-out ${active && '!rotate-180'}`} />
                        <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-180 transition duration-200 ease-out ${active && '!rotate-90'}`} />
                    </svg>
                </button>
            </h2>
            <div className='px-5'>
                <div
                    id={`accordion-text-${id}`}
                    role="region"
                    aria-labelledby={`accordion-title-${id}`}
                    className={`max-w-7xl mx-auto grid text-sm  overflow-hidden transition-all duration-300 ease-in-out ${active ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                    <div className="overflow-hidden">
                        <p className="pb-3 text-base lg:text-lg para-text ">
                            {children}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}