// components/Welcome.tsx

'use client';

//import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const Welcome = () => {

    const words = [
        {
          text: "Riding",
        },
        {
          text: "the",
        },
        {
          text: "wave",
        },
        {
          text: "of",
        },
        {
          text: "code",
        },
        {
          text: "innovation.",
          className: "text-black dark:text-blue-500",
        },
      ];


  return (
    <div className="py-1 w-full" 
    style={{ backgroundImage: "url('/images/bg4.jpg')" }}
    >
      
      <div className="flex justify-center items-center left-20 mt-2 h-screen">
        <h1 className="text-black text-8xl font-bold mt-1 font-fon2">
            CODE WAVES
            {/* <TypewriterEffectSmooth words={words} /> */}

        </h1>
      </div>
    </div>
  );
}

export default Welcome;