"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import { weblanguges } from "@/data";
import {mobilelanguges} from '@/data';
import {uilanguges} from '@/data';


export function WhatCard() {
  const tabs = [
    {
      title: "Web Development",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-red-700 to-red-900">
          {/* <p>Web Development</p> */}
          <DummyContent 
            title = "Web Development"
            img="/images/custom-web.png"
            dec="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas esse veniam quasi reprehenderit voluptatum provident quidem commodi officia 
        magni quibusdam ex eius voluptas repellat quos architecto, nam exercitationem! Provident, voluptas"
        icons = {weblanguges}
          />
        </div>
      ),
    },
    {
      title: "Mobile Development",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-red-700 to-red-900">
          {/* <p>Mobile Development</p> */}
          <DummyContent 
          title = "Mobile Development"
          img="/images/mobile.png"
          dec="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas esse veniam quasi reprehenderit voluptatum provident quidem commodi officia 
      magni quibusdam ex eius voluptas repellat quos architecto, nam exercitationem! Provident, voluptas"
      icons = {mobilelanguges}

          />
        </div>
      ),
    },
    {
      title: "UI/UX Design",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-red-700 to-red-900">
          {/* <p>UI/UX Design</p> */}
          <DummyContent 
          title = "UI/UX Design"
          img="/images/ui.png"
          dec="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas esse veniam quasi reprehenderit voluptatum provident quidem commodi officia 
      magni quibusdam ex eius voluptas repellat quos architecto, nam exercitationem! Provident, voluptas"
      icons = {uilanguges}

          />
        </div>
      ),
    },
    
  ];

  return (
    <div className="h-[10rem] md:h-[32rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-1 mb-1">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({title, img, dec, icons}) => {
  console.log('titl', title,img, dec, icons)
  return (
    <>
       <div className="py-4 tems-center justify-center text-center">
          
          <h2>{title}</h2>

        <div className="flex flex-row items-center justify-center text-center">
          <Image
            src={img}
            alt="dummy image"
            width={360}
            height={360}
            className="mt-8"
            //className="absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
                <p className="text-sm">{dec}</p>

        </div>
    
        <div className='flex flex-row mt-6 text-center items-center justify-center'>
            {icons.map((item) => (
                <img src={item.img} alt={item.name} className='bg-white border-r-2 mr-2 p-1 rounded-full' width={40}  height={40} />

            ))}
            </div>

       </div>
    </>
  );
};
