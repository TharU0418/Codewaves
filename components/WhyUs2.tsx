'use client';

import { motion } from 'framer-motion';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';
import { TextGenerateEffect } from './ui/text-generate-effect';

const words = `Code Waves is a dynamic and innovative software development company 
specializing in the creation of cutting-edge mobile applications and comprehensive 
full-stack web solutions. With a team of highly skilled and passionate professionals, 
we are committed to delivering exceptional digital experiences that drive business 
growth and customer satisfaction.`;

const WhyUs2 = () => (
  <div className='bg-bgred-100 m-7 rounded-xl p-4'
    style={{
      background: "rgb(245,31,31)",
      background: "linear-gradient(90deg, rgba(245,31,31,1) 0%, rgba(250,100,100,1) 72%, rgba(233,2,2,1) 100%)"
    }}
  >
    <section className="sm:p-16 xs:p-2 px-2 py-1">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=" sm:py-2 xs:py-8 py-6 mx-auto flex lg:flex-row flex-col gap-8"
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <h2 className='text-white font-bold text-4xl bg-black p-4 rounded-r-xl font-fon2'>WHY US</h2>
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px] items-center">
            <TextGenerateEffect words={words} />
          </div>
        </motion.div>

        <motion.div
          variants={planetVariants('right')}
          className="flex-1 flex justify-center items-center hidden-on-mobile"
        >
          <img
            src="/images/red_computer.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  </div>
);

export default WhyUs2;