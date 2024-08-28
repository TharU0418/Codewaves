"use client";
import { useRouter } from 'next/navigation'
import React from 'react'
import { ButtonsCard } from './ui/tailwindcss-buttons2'
const OurProjects = () => {

    const router = useRouter();

    const handleClick = () => {
        router.push("/Our-works")
    }

  return (
    <div className= 'py-8 mt-8'>
       
       <div className='bg-red-700 p-7 mb-5 ml-7 mr-7 rounded-md flex flex-row gap-4 items-center justify-center py-16 mt-1' style={{marginBottom:'10px'}}>
            <div className='w-4/12'>
            <h2 className='text-3xl font-bold font-fon2 text-white'>EXPLORE OUR WORKS</h2>
            </div>
            <div className='w-8/12 items-center justify-center'>
                <p className='mb-4 text-xl font-fon1 text-white hidden-on-mobile'>
                  Explore few of our team's work on web apps, mobile apps. See how we've benefited our client's in growing revenue, 
                  managing enterprise web projects, and producing remarkable user experiences.
                </p>

                {/* <div className='text-center mt-10'>
                  {buttons.map((button, idx) => (
                    <ButtonsCard key={idx}>
                      {button.component}
                    </ButtonsCard>
                  ))}
                   
              </div> */}

                <div className='text-center mt-10'>
                <button className="p-[2px] relative items-center justify-center" onClick={handleClick}>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                        <div className="px-10 py-4  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                            EXPLORE
                        </div>
                    </button>
                </div>            
            </div>
       </div>

    </div>
  )
}

export default OurProjects

export const buttons = [
    {
        name: "Explore",
        description: "Gradient button with perfect corners",
        component: (
          <button className="p-[2px] relative items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-10 py-4  bg-red-500 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              EXPLORE
            </div>
          </button>
        ),
      },
]