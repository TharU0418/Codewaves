'use client';
import { staggerContainer } from '@/utils/motion';
import { motion } from 'framer-motion';
import ExploreCard from './ExploreCard';
import { useState } from 'react';
import { exploreWorlds } from '@/data';

const Wedocard = () => {
    const [active, setActive] = useState('world-2');

  return (
    <section className="sm:p-4 xs:p-8 px-6 py-4" id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Wedocard