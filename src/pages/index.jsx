import { Roboto } from 'next/font/google';
import { Lobster } from 'next/font/google';
import { Odibee_Sans } from 'next/font/google';
import { Saira } from 'next/font/google';

import FloatTab from '@/components/FloatTab'
import ImageShuffler from '@/components/ImageShuffler';
import RollingName from '@/components/RollingName'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { useContext, useState } from 'react';
import { RenderContext, RenderProvider } from '@/context/RenderContext';

export default function Home() {
  const {setPage, page,} = useContext(RenderContext)

  return (
    <div className='overflow-hidden' style={{backgroundImage: 'url("/iran-6888574_960_720.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: "cover"}}>
      <FloatTab />
      <section className='w-full h-[100vh] grid grid-cols-10' >
        <ImageShuffler />
        <div className='col-span-5 w-full flex p-1 relative'>
          { page === "home"  &&
            <div id='Home' className='bg-gradient-to-tl from-800 via-gray-800 to-gray-500 p-2 relative m-1 h-[100vh] overflow-hidden mb-2'>
              {/* <div className='absolute top-[15px] right-10 rounded-l-[50%] bg-black border-l border-black shadow-white shadow-b irregular-box animated-slide-top'>
                  <div className='rounded-l-[50%] bg-gray-900 border-l border-black shadow-white shadow-b irregular-box'>
                    <img src="/Ade17 cut_055438.png" className='w-[280px] rounded-bl-[13%] bg-gradient-to-tl from-black via-gray-800 to-white irregular-box' alt="Adelson" />
                  </div>
                </div> */}
              <RollingName />
              <div className='sticky'>
                <div className='space-y-3  mt-[5vh] ml-3 mr-30'>
                  <p className='text-2xl font-saira '>Full Stack Web Developer</p>
                  <p>
                    Hello! I’m Adelson Dabup, a curious builder of websites and apps. I believe that great code meets great design, and I’m here to craft digital solutions that make people’s lives easier
                  </p>
                  <div className='flex gap-5 ml-20 mt-10'>
                      <div className="border rounded-full b0 bg-transparent text-gray-300 w-fit p-4 flex gap-2 itetransPic ">
                        <p className='odibee text-xl font-semibold'>Contact Me</p>
                        <MdOutlineKeyboardArrowRight size={30}/>
                      </div>
                  </div>
                </div>
              </div>
            </div> 
          }
          { page === "about" &&
            <div id='About' style={{backgroundImage: 'url("/texture-2061709_640.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: "cover"}} className='p-7 relative m-2 h-[97vh] opacity-80 overflow-y-scroll overflow-x-hidden'>
              <div className='sticky mt-[10vh] p-4 text-black'>                
                <div className='space-y-3 mt-[20vh] mb-3'>
                  <p className='text-2xl odibee'>About Adelson</p>
                  <p>I'm a passionate full-stack developer with a flair for creating responsive, visually engaging web experiences. I work primarily with React, Tailwind CSS, and JavaScript, building dynamic interfaces backed by Node.js, MongoDB, and MySQL.</p>
                  <p>My journey into tech began with curiosity and a love for problem-solving — now I turn ideas into fast, accessible applications with clean code and elegant transitions. Whether it's integrating APIs or fine-tuning performance, I enjoy every part of the build process.</p>
                  <p>I'm currently open to opportunities that challenge me to grow and collaborate with others. When I’m not coding, I’m usually exploring design inspiration or experimenting with new tools and frameworks.</p>
                  <div className=''><p>Let’s build something meaningful — feel free to check out my projects or</p><p onClick={()=>setPage("contact")} className='text-blue-500 hover:underline'> get in touch!</p></div>
                </div>
              </div>
            </div> 
          }
          { page === "contact" &&
            <div id='Contact' className='bg-gradient-to-tl from-800 via-gray-800 to-gray-500 p-2 w-full'>
              <p>Contact</p>
              <p>Contact</p>
              <p>Contact</p>
              <p>Contact</p>
              <p>Contact</p>
              <p>Contact</p>
            </div>
          }
          { page === "project" &&
            <div id='Project' className='bg-gradient-to-tl from-800 via-gray-800 to-gray-500 p-2 w-full'>
              <p>Project</p>
              <p>Project</p>
              <p>Project</p>
              <p>Project</p>
              <p>Project</p>
              <p>Project</p>
              <p>Project</p>
              <p>Project</p>
              <p>Project</p>
              <p>Project</p>
              <p>Project</p>
              <p>Project</p>
              <p>Project</p>
              <p>Project</p>
              <p>Project</p>
              <p>Project</p>
              <p>Project</p>
              <p>Project</p>
              <p>Project</p>
              <p>Project</p>
            </div>
          }
        </div>
        <div className='col-span-1 border-l border-gray-500 relative'>
          <ul className='absolute bottom-10 animated-slide-bottom px-10 flex-cols space-y-5 overflow-hidden'>
            <li className='hover:shadow-lg hover:shadow-gray-800 hover:rounded-lg transPic'><FiLinkedin size={30} /></li>
            <li className='hover:shadow-lg hover:shadow-gray-800 hover:rounded-lg transPic'><FaGithub size={30} /></li>
            <li className='hover:shadow-lg hover:shadow-gray-800 hover:rounded-lg transPic'><FaMediumM size={30} /></li>
          </ul>
        </div>
      </section>
    </div>

  )
}
