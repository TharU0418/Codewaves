'use client';
import { ButtonsCard } from './ui/tailwindcss-buttons'
import { useRouter } from 'next/navigation'

const Contact = () => {

    const router = useRouter();

    const handleEmail = () => {
        router.push("mailto:tharushadil11@gmail.com")
    }

  return (
    <div className='py-10 items-center justify-center mt-4'>
        <h2 className='text-center text-black font-bold mt-4 text-4xl mb-4'>
            CONTACT US
        </h2> 
        <h3 className='text-center text-black text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis eleifend ligula non ultrices. </h3>

        <div className='text-center mt-4'>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-6" onClick={handleEmail}>
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-sm font-medium text-white backdrop-blur-3xl">
              EMAIL US
            </span>
          </button>
        </div>
    </div>
  )
}

export default Contact

export const buttons = [
    {
        name: "Border Magic",
        description: "Border Magic button for your website",
        showDot: false,
        component: (
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-6">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-sm font-medium text-white backdrop-blur-3xl">
              EMAIL US
            </span>
          </button>
        ),
      },
]