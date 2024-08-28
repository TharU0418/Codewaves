import React from 'react';
//import { CanvasRevealEffectDemo } from './CanvasRevealEffectDemo';
//import WhatWeDoCard from './WhatWeDoCard';
import { WhatCard } from './WhatCard';
import Wedocard from './Wedocard';

const WhatWeDo = () => {
  return (
    <div className='py-12'>
        {/* <p className='mb-5 text-bg-blue-700'>rrrr</p> */}
      <h2 className='text-center ml-10 py-10 text-red-500 font-bold text-8xl font-fon2 items-center'>
          WHAT <span className='bg-red-500 text-white'>WE DO</span>
      </h2>
      
      {/* <WhatCard/> */}
      <Wedocard/>
      {/* <WhatWeDoCard/> */}

      {/* <CanvasRevealEffectDemo /> */}
    </div>
  );
};

export default WhatWeDo;
