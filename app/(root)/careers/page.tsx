'use client';
import CareerForm2 from '@/components/CareerForm2';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, planetVariants, staggerContainer } from '@/utils/motion';

const Careers = () => {
  return (
    <div>
      <div
        className='bg-bgred-100 mx-auto my-7 rounded-xl p-1 text-center'
        style={{
          background: 'linear-gradient(90deg, rgba(245,31,31,1) 0%, rgba(250,100,100,1) 72%, rgba(233,2,2,1) 100%)',
          width: '80%',
        }}
      >
        <section className="sm:p-10 xs:p-2 px-2 py-1">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="sm:py-2 xs:py-2 py-2 mx-auto flex lg:flex-row flex-col gap-8"
          >
            <motion.div
              variants={fadeIn('right', 'tween', 0.2, 1)}
              className="flex-[0.95] flex justify-center flex-col text-center"
            >
              <h2 className='text-4xl font-bold mb-14 text-white'>Wanna Join Our Team</h2>
              <p className='text-2xl text-white'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, possimus! Placeat cumque, eligendi illo temporibus officiis inventore accusantium vel porro aliquid ipsam eaque quis doloribus exercitationem, tenetur praesentium, cum sed.
              </p>
            </motion.div>
            <motion.div className="flex-1 flex justify-center items-center hidden-on-mobile">
              <img src='/images/join.png' className="w-[90%] h-[90%] object-contain" />
            </motion.div>
          </motion.div>
        </section>
      </div>

      <CareerForm2 />
    </div>
  );
};

export default Careers;
