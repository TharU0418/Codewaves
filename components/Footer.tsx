'use client';

import { motion } from 'framer-motion';
import { footerVariants } from '../utils/motion';
import { socials } from '@/constants/inedex';
import Link from 'next/link';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className="am:px-16 px-6 py-8 relative bg-black"
  >
    <div className="footer-gradient " />
    <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8">
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          CODE WAVES
        </h4>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
          <span className="font-normal text-[16px] text-white">
            <Link href="/contact">
            Connect with us
              </Link>
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-black opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-black">
          <img
            src="/images/3.png"
            alt="get-started"
            //className="w-[90%] h-[90%] object-contain"
            width={60}
            height={60}
          />
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2024 Codewaves. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[32px] h-[32px] object-contain cursor-pointer bg-white p-2 rounded-xl"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
