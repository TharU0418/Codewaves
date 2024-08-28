"use client";
import Image from "next/image";
import React from "react";
import { Card,Carousel } from "./ui/apple-cards-carousel";
import { Card2,Carousel2 } from "./ui/apple-cards-carousel2";
import { ourwork1 } from "@/data";

export function OurWorks() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  const cards2 = data.map((card, index) => (
    <Card2 key={card.src} card={card} index={index} />
  ));


  return (
    <div className="w-full h-full py-10">
      <h2 className='text-center ml-10 py-10 text-red-500 font-bold text-8xl font-fon2 items-center'>
          EXPLORE <span className='bg-red-500 text-white'>OUR WORK</span>
      </h2>
      <Carousel items={cards} />

      {/* <Carousel2 items={cards2} /> */}

    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {/* {[...new Array(3).fill(1)].map((_, index) => {
        return ( */}
          <div
            key={"dummy-content"}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            
         
            <img src="/images/cp.png" />

            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mt-5">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Commuinty App
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>

            <h3 className="font-bold text-neutral-700 dark:text-neutral-200 mt-4">Business challenge</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mt-1">
          
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>

            <h3 className="font-bold text-neutral-700 dark:text-neutral-200 mt-4">Solution</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mt-1">
          
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>

            <h3 className="font-bold text-neutral-700 dark:text-neutral-200 mt-4">Reviews</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mt-1">
          
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>

            <div className='flex flex-row mt-6 text-center items-center justify-center'>
            {ourwork1.map((item) => (
                <img src={item.img} alt={item.name} className='bg-black border-r-2 mr-2 p-1 rounded-full' width={40}  height={40} />

            ))}
            </div>

          </div>
        {/* );
      })} */}
    </>
  );
};

const data = [
  {
    category: "Mobile and Web Application",
    title: "Community App",
    src: "/images/cp.png",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "/images/cp2.png ",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://file.mockplus.com/image/2019/11/e2c96dfa-05b1-4d84-b56c-5fc6d756a33e.jpg",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.pexels.com/photos/1271620/pexels-photo-1271620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.pexels.com/photos/1271620/pexels-photo-1271620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: <DummyContent />,
  }
];
