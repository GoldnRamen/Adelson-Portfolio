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
    <div className='overflow-hidden'>
      <FloatTab />
      <RollingName />
      <section className='bg-gray-900 w-full h-[100vh] grid grid-cols-10'>
        <ImageShuffler />
        <div className='col-span-5 w-full flex p-1 relative'>
          { page === "home"  &&
            <div id='Home' className='bg-gradient-to-tl from-800 via-gray-800 to-gray-500 p-2 relative m-1 h-[100vh] overflow-y-scroll overflow-x-hidden'>
              <div className='absolute top-[15px] right-10 rounded-l-[50%] bg-black border-l border-black shadow-white shadow-b irregular-box animated-slide-top'>
                  <div className='rounded-l-[50%] bg-gray-900 border-l border-black shadow-white shadow-b irregular-box'>
                    <img src="/Ade17 cut_055438.png" className='w-[280px] rounded-bl-[13%] bg-gradient-to-tl from-black via-gray-800 to-white irregular-box' alt="Adelson" />
                  </div>
                </div>
              <div className='sticky'>
                <div className='space-y-3  mt-[60vh]'>
                  <p className='text-2xl odibee'>Full Stack Web Developer</p>
                  <p>
                    Hello! I’m Adelson Dabup, a curious builder of websites and apps. I believe that great code meets great design, and I’m here to craft digital solutions that make people’s lives easier
                  </p>
                  <div className='flex gap-5 ml-20 mt-10'>
                      <div className="border rounded-full border-gray-100 bg-transparent text-gray-300 w-fit p-4 flex gap-2 items-center hover:bg-white hover:text-gray-900 ">
                        <p className='odibee text-xl font-semibold'>Contact Me</p>
                        <MdOutlineKeyboardArrowRight size={30}/>
                      </div>
                  </div>
                </div>
                <div className='space-y-3  mt-[60vh]'>
                  <p className='text-2xl odibee'>Full Stack Web Developer</p>
                  <p>
                    Hello! I’m Adelson Dabup, a curious builder of websites and apps. I believe that great code meets great design, and I’m here to craft digital solutions that make people’s lives easier
                  </p>
                  <div className='flex gap-5 ml-20 mt-10'>
                      <div className="border rounded-full border-gray-100 bg-transparent text-gray-300 w-fit p-4 flex gap-2 items-center hover:bg-white hover:text-gray-900 ">
                        <p className='odibee text-xl font-semibold'>Contact Me</p>
                        <MdOutlineKeyboardArrowRight size={30}/>
                      </div>
                  </div>
                </div>
                <div className='space-y-3  mt-[60vh]'>
                  <p className='text-2xl odibee'>Full Stack Web Developer</p>
                  <p>
                    Hello! I’m Adelson Dabup, a curious builder of websites and apps. I believe that great code meets great design, and I’m here to craft digital solutions that make people’s lives easier
                  </p>
                  <div className='flex gap-5 ml-20 mt-10'>
                      <div className="border rounded-full border-gray-100 bg-transparent text-gray-300 w-fit p-4 flex gap-2 items-center hover:bg-white hover:text-gray-900 ">
                        <p className='odibee text-xl font-semibold'>Contact Me</p>
                        <MdOutlineKeyboardArrowRight size={30}/>
                      </div>
                  </div>
                </div>
                <div className='space-y-3  mt-[60vh]'>
                  <p className='text-2xl odibee'>Full Stack Web Developer</p>
                  <p>
                    Hello! I’m Adelson Dabup, a curious builder of websites and apps. I believe that great code meets great design, and I’m here to craft digital solutions that make people’s lives easier
                  </p>
                  <div className='flex gap-5 ml-20 mt-10'>
                      <div className="border rounded-full border-gray-100 bg-transparent text-gray-300 w-fit p-4 flex gap-2 items-center hover:bg-white hover:text-gray-900 ">
                        <p className='odibee text-xl font-semibold'>Contact Me</p>
                        <MdOutlineKeyboardArrowRight size={30}/>
                      </div>
                  </div>
                </div>
                <div className='space-y-3  mt-[60vh]'>
                  <p className='text-2xl odibee'>Full Stack Web Developer</p>
                  <p>
                    Hello! I’m Adelson Dabup, a curious builder of websites and apps. I believe that great code meets great design, and I’m here to craft digital solutions that make people’s lives easier
                  </p>
                  <div className='flex gap-5 ml-20 mt-10'>
                      <div className="border rounded-full border-gray-100 bg-transparent text-gray-300 w-fit p-4 flex gap-2 items-center hover:bg-white hover:text-gray-900 ">
                        <p className='odibee text-xl font-semibold'>Contact Me</p>
                        <MdOutlineKeyboardArrowRight size={30}/>
                      </div>
                  </div>
                </div>
              </div>
            </div> 
          }
          { page === "about" &&
            <div id='Home' className='bg-gradient-to-tl from-800 via-gray-800 to-gray-500 p-2 relative m-1 h-[100vh] overflow-y-scroll overflow-x-hidden'>
              
              <div className='sticky'>
                <div className='space-y-3  mt-[60vh]'>
                  <p className='text-2xl odibee'>Full Stack Web Developer</p>
                  <p>
                    Hello! I’m Adelson Dabup, a curious builder of websites and apps. I believe that great code meets great design, and I’m here to craft digital solutions that make people’s lives easier
                  </p>
                  <div className='flex gap-5 ml-20 mt-10'>
                      <div className="border rounded-full border-gray-100 bg-transparent text-gray-300 w-fit p-4 flex gap-2 items-center hover:bg-white hover:text-gray-900 ">
                        <p className='odibee text-xl font-semibold'>Contact Me</p>
                        <MdOutlineKeyboardArrowRight size={30}/>
                      </div>
                  </div>
                </div>
                <div className='space-y-3  mt-[60vh]'>
                  <p className='text-2xl odibee'>Full Stack Web Developer</p>
                  <p>
                    Hello! I’m Adelson Dabup, a curious builder of websites and apps. I believe that great code meets great design, and I’m here to craft digital solutions that make people’s lives easier
                  </p>
                  <div className='flex gap-5 ml-20 mt-10'>
                      <div className="border rounded-full border-gray-100 bg-transparent text-gray-300 w-fit p-4 flex gap-2 items-center hover:bg-white hover:text-gray-900 ">
                        <p className='odibee text-xl font-semibold'>Contact Me</p>
                        <MdOutlineKeyboardArrowRight size={30}/>
                      </div>
                  </div>
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
            <li className='hover:border hover:shadow-lg hover:shadow-gray-800 hover:rounded-lg hover:p-1 hover:bg-white hover:text-gray-900'><FiLinkedin size={30} /></li>
            <li className='hover:border hover:shadow-lg hover:shadow-gray-800 hover:rounded-lg hover:p-1 hover:bg-white hover:text-gray-900'><FaGithub size={30} /></li>
            <li className='hover:border hover:shadow-lg hover:shadow-gray-800 hover:rounded-lg hover:p-1 hover:bg-white hover:text-gray-900'><FaMediumM size={30} /></li>
          </ul>
        </div>
      </section>
    </div>

  )
}
