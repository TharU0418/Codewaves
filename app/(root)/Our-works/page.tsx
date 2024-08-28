'use client';
import { Card, Carousel } from '@/components/ui/apple-cards-carousel';
import { ourwork1, projects } from '@/data';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const OurWorks = () => {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
      ));
    
  return (
    <div className=' h-auto py-16'>

        <h2 className='text-center font-bold text-red-400 text-4xl mb-10'>OUR WORKS</h2>

        <h2 className='text-left  w-80 font-bold text-white bg-red-400 text-2xl mb-10 p-2'>Wep Application</h2>


        <Carousel items={cards} />

        <h2 className='text-left  w-80 font-bold text-white bg-red-400 text-2xl mb-10 p-2'>Mobile Application</h2>


        <Carousel items={cards} />

       
      
    </div>
  )
}

export default OurWorks

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
      src: "https://images.pexels.com/photos/1271620/pexels-photo-1271620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: <DummyContent />,
    },
    {
      category: "Product",
      title: "Launching the new Apple Vision Pro.",
      src: "https://images.pexels.com/photos/1271620/pexels-photo-1271620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
  















// 'use client';
// import { projects } from '@/data';
// import Image from 'next/image'
// import React, { useEffect, useState } from 'react'

// const ProjectDetail = ({ project, onClose }) => {
//     const handleContainerClick = (e) => {
//         e.stopPropagation();
//     };

//     return (
//         <div 
//             className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center' 
//             onClick={onClose}
//         >
//             <div 
//                 className='p-5 rounded-lg relative' 
//                 style={{ backgroundColor: '#13162D' }} 
//                 onClick={handleContainerClick}
//             >
//                 <button onClick={onClose} className='absolute top-2 right-2'>
//                     ✖
//                 </button>
//                 <h1 className='text-3xl font-bold mb-4'>{project.title}</h1>
//                 <video src={project.demo} controls className='w-full h-64 object-cover mb-4' />
//                 <p className='text-lg'>{project.des}</p>
//                 <div className='flex items-center justify-between mt-7'>
//                     <div className='flex items-center'>
//                         {/* {project.iconLists.map((icon, index) => (
//                             <div
//                                 key={index}
//                                 className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
//                                 style={{
//                                     transform: `translateX(-${5 * index + 2}px)`,
//                                 }}
//                             >
//                                 <img src={icon} alt='icons' className='p-2' />
//                             </div>
//                         ))} */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const OurWorks = () => {

//     const [selectedProject, setSelectedProject] = useState(null);

//     const handleCardClick = (project) => {
//         setSelectedProject(project);
//     };

//     const handleCloseDetail = () => {
//         setSelectedProject(null);
//     };

//     useEffect(() => {
//         if (selectedProject) {
//             document.body.classList.add('no-scroll');
//         } else {
//             document.body.classList.remove('no-scroll');
//         }

//         return () => {
//             document.body.classList.remove('no-scroll');
//         };
//     }, [selectedProject]);

//   return (
//     <div className=' h-auto py-16'>

//         <h2 className='text-center font-bold text-white text-4xl mb-10'>OUR WORKS</h2>

        
//         {projects.map((item) => (
//             <>
//             <div className='bg-slate-950 m-7 p-6 rounded-xl py-8 mb-8'>
//             <div className='flex flex-row gap-8'>
//                 <div className='w-6/12 justify-center items-center text-center'>
//                     <h3 className='font-bold text-xl mt-6 text-white'>COMMUINTY APP</h3>
//                     <p className='mt-8 text-white'>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis eleifend ligula non ultrices. Duis viverra ultrices interdum.
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis eleifend ligula non ultrices. Duis viverra ultrices interdum.
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis eleifend ligula non ultrices. Duis viverra ultrices interdum.
//                     </p>
//                     <button className='bg-black text-white mt-4 p-2 rounded-md' onClick={() => handleCardClick(item)}>see more</button>
//                 </div>
//                 <div className='w-6/12 items-end text-end justify-end'>
//                     <Image
//                         src='/images/mobile.png'
//                         alt='screen'
//                         width={500}
//                         height={500}
//                     />
//                 </div>
//             </div>
//         </div>
//             </>
//         ))}

// {selectedProject && (
//                     <ProjectDetail project={selectedProject} onClose={handleCloseDetail} />
//                 )}
      
//     </div>
//   )
// }

// export default OurWorks