import React from 'react'
import { InfiniteMovingCardsDemo } from './InfiniteMovingCardsDemo'

const WhatOurClients = () => {
  return (
    <div className='mt-6 bg-black py-12'  style={{
      background: "rgb(245,31,31)",
background:"linear-gradient(90deg, rgba(245,31,31,1) 0%, rgba(250,100,100,1) 49%, rgba(233,2,2,1) 100%)"
    }}>
        <h2 className='text-center text-white font-bold mt-6 text-7xl font-fon1'>
            What Our Clients Thinks !
        </h2>

        <InfiniteMovingCardsDemo/>
    </div>
  )
}

export default WhatOurClients