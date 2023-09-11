import React from 'react'
import ScrollingBanner from '../home-components/ScrollingBanner'

export default function NavConent() {
    return (
        <div className='' style={{height:window.innerHeight}}>
            <div className=' p-3 ' style={{height:'87%',paddingTop:'50%'}}>
                <div className='uppercase text-lg text-white'>
                    <div className='row'>
                        <div className='col'><a href="/#home">Home</a></div>
                    </div>
                    <div className='row'>
                        <div className='col'><a href="/#aboutUs">About</a></div>
                    </div>
                    <div className='row'>
                        <div className='col'><a href="/#dolar-detail">Dolor</a></div>
                    </div>
                    <div className='row'>
                        <div className='col'><a href="#">Lorem ipsum</a></div>
                    </div>
                    <div className='row'>
                        <div className='col'><a href="#">Lorem ipsum</a></div>
                    </div>
                    <div className='row flex flex-wrap justify-between para-text' >
                        <div className='col'><a href="#">Lorem ipsum</a></div>
                        <div className='col'><a href="#">coming soon </a></div>
                    </div>
                </div>

            </div>
            <ScrollingBanner />
        </div>
    )
}
