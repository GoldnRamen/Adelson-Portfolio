import { Roboto } from 'next/font/google';
import { Lobster } from 'next/font/google';
import { Odibee_Sans } from 'next/font/google';
import { Saira } from 'next/font/google';

import FloatTab from '@/components/FloatTab'
import ImageShuffler from '@/components/ImageShuffler';
import RollingName from '@/components/RollingName'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaRotate } from "react-icons/fa6";
import { FaMedium, FaWhatsapp } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { useContext, useState } from 'react';
import { RenderContext, RenderProvider } from '@/context/RenderContext';
import Projects from '@/components/Projects';

export default function Home() {
  const {setPage, page, setFlipped1, setFlipped2, setFlipped3, setFlipped4, flipped1, flipped2, flipped3, flipped4, hover, setHover, hoveringImg} = useContext(RenderContext)

  return (
    <div className='overflow-hidden' style={{backgroundImage: 'url("/iran-6888574_960_720.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: "cover"}}>
      <FloatTab />
      <section className='w-full h-[100vh] lg:grid grid-cols-10' >
        <ImageShuffler />
        <div className='col-span-5 w-full flex p-1 relative'>
          { page === "home"  &&
            <div id='Home' className='bg-gradient-to-tl from-transparent via-gray-800 to-gray-transparent p-2 relative m-1 h-[100vh] overflow-hidden mb-2'>
              {/* <div className='absolute top-[15px] right-10 rounded-l-[50%] bg-black border-l border-black shadow-white shadow-b irregular-box animated-slide-top'>
                  <div className='rounded-l-[50%] bg-gray-900 border-l border-black shadow-white shadow-b irregular-box'>
                    <img src="/Ade17 cut_055438.png" className='w-[280px] rounded-bl-[13%] bg-gradient-to-tl from-black via-gray-800 to-white irregular-box' alt="Adelson" />
                  </div>
                </div> */}
              <RollingName />       
              <div className='sticky'>
                <div className='space-y-3  lg:mt-[5vh] mt-[2vh] ml-3 lg:mr-30'>
                  <p className='lg:text-2xl font-saira text-xl'>Full Stack Web Developer</p>
                  <div className="lg:hidden items-end text-xs">
                    <a href="/files/Adelson_Resume.pdf" download>
                        <p className="border rounded-full border-b-gray-400 w-fit py-1 px-2">Download&nbsp;resume</p>
                    </a>
                </div>        
                  <div className='lg:relative sticky lg:overflow-y-hidden overflow-y-scroll lg:p-0 p-2 lg:h-full h-[30vh]'>
                    <p>
                      Hello! I’m Adelson Dabup, a curious builder of websites and apps. I believe that great code meets great design, and I’m here to craft digital solutions that make people’s lives easier
                    </p>
                    <div className='lg:ml-20 my-10'>
                        <div onClick={()=>setPage("contact")} className="border rounded-full b0 bg-transparent text-gray-300 w-fit p-4 flex gap-2 itetransPic  hover:bg-white hover:text-gray-900 cursor-pointer">
                          <p className='odibee lg:text-xl font-semibold'>Contact Me</p>
                          <MdOutlineKeyboardArrowRight size={30}/>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          }
          { page === "about" &&
            <div id='About' style={{backgroundImage: 'url("/texture-2061709_640.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: "cover"}} className='p-7 relative m-2 h-[97vh] w-full opacity-80'>
              <div className='lg:mt-[7vh] mt-[7vh] h-[85vh] p-4 text-black absolute right-0 overflow-y-scroll overflow-x-hidden'>                
                <img src={hover ? '/Ade12_cut_011348_dark.png' : '/Ade12_cut_011348.png'} alt="Public" className='border-b w-fit h-fit border-b-3' onMouseEnter={()=>hoveringImg()} onMouseLeave={()=>hoveringImg()}/>
                <div className='space-y-3 lg:mt-[20vh] mt-[10vh] mb-3'>
                  <p className='text-2xl odibee'>About Adelson</p>
                  <p>I'm a passionate full-stack developer with a flair for creating responsive, visually engaging web experiences. I work primarily with React, Tailwind CSS, and JavaScript, building dynamic interfaces backed by Node.js, MongoDB, and MySQL.</p>
                  <p>My journey into tech began with curiosity and a love for problem-solving — now I turn ideas into fast, accessible applications with clean code and elegant transitions. Whether it's integrating APIs or fine-tuning performance, I enjoy every part of the build process.</p>
                  <p>I'm currently open to opportunities that challenge me to grow and collaborate with others. When I’m not coding, I’m usually exploring design inspiration or experimenting with new tools and frameworks.</p>
                  <div className=''><p>Let’s build something meaningful — feel free to check out my projects or</p><p onClick={()=>setPage("contact")} className='text-blue-500 cursor-pointer hover:underline'> get in touch!</p></div>
                </div>
              </div>
            </div> 
          }
          { page === "contact" &&
            <div id='Contact' className='p-2 w-full relative'>
              <div className='z-20 relative flex w-full mx-auto'>
                  {/* <div class="bg-gradient-to-br from-transparent via-gray-transparent to-gray-600 border-b border-5 shadow-black border-gray-500 p-6 shadow-lg rounded-2xl w-fit text-center mx-auto">
                    <h1 class="text-3xl font-bold text-gray-800">Contact Me</h1>
                  </div> */}
                  <div class="space-y-4 p-8 rounded-2xl w-full flex lg:flex-row flex-col justify-between text-center lg:mt-[40vh] mt-[20vh] mx-auto">
                    <div className={`p-2 duration-700 transform-style preserve-3d ${flipped1 ? 'rotate-y-180' : ''} relative mx-auto`}>
                      <FaWhatsapp className={`transPic cursor-pointer backface-hidden text-gray-100 ${!flipped1 ? "relative" : "hidden"}`} size={50} onClick={()=>setFlipped1(!flipped1)} />
                      {flipped1 && 
                        <div className='bg-white items-center align-center rounded-lg shadow-lg shadow-gray-900 p-5 backface-hidden rotate-y-180 relative'>
                          <FaRotate className='right-3 text-gray-900 text-sm absolute top-2 cursor-pointer'  onClick={() => setFlipped1(false)}/>
                          <a href="tel:+2349055731649" target="_blank" rel="noopener" class="text-blue-600 text-xs hover:underline">
                            @adelsondabup
                          </a> 
                        </div>
                      }
                    </div>
                    <div className={`p-2 duration-700 transform-style preserve-3d ${flipped2 ? 'rotate-y-180' : ''} relative mx-auto`}>
                      <FiLinkedin className={`transPic cursor-pointer backface-hidden text-gray-100 ${!flipped2 ? "relative" : "hidden"}`} size={50} onClick={()=>setFlipped2(!flipped2)} />
                      {flipped2 && 
                        <div className='bg-white items-center align-center rounded-lg shadow-lg shadow-gray-900 p-5 backface-hidden rotate-y-180 relative'>
                          <FaRotate className='right-3 text-gray-900 text-sm absolute top-2 cursor-pointer'  onClick={() => setFlipped2(false)}/>
                          <a href="https://github.com/GoldnRamen" target="_blank" rel="noopener" class="text-blue-600 text-xs hover:underline">
                            linkedin.com/in/adelson-dabup-aniseng-7a5787179/
                          </a> 
                        </div>
                      }
                    </div>
                    <div className={`p-2 duration-700 transform-style preserve-3d ${flipped3 ? 'rotate-y-180' : ''} relative mx-auto`}>
                      <FaGithub className={`transPic cursor-pointer backface-hidden text-gray-100 ${!flipped3 ? "relative" : "hidden"}`} size={50} onClick={()=>setFlipped3(!flipped3)} />
                      {flipped3 && 
                        <div className='bg-white items-center align-center rounded-lg shadow-lg shadow-gray-900 p-5 backface-hidden rotate-y-180 relative'>
                          <FaRotate className='right-3 text-gray-900 text-sm absolute top-2 cursor-pointer'  onClick={() => setFlipped3(false)}/>
                          <a href="https://linkedin.com/in/adelson-dabup-aniseng-7a5787179/" target="_blank" rel="noopener" class="text-blue-600 text-xs hover:underline">
                            github.com/GoldnRamen
                          </a> 
                        </div>
                      }
                    </div>
                    <div className={`p-2 duration-700 transform-style preserve-3d ${flipped4 ? 'rotate-y-180' : ''} relative mx-auto`}>
                      <FaMediumM className={`transPic cursor-pointer backface-hidden text-gray-100 ${!flipped4 ? "relative" : "hidden"}`} size={50} onClick={()=>setFlipped4(!flipped4)} />
                      {flipped4 && 
                        <div className='bg-white items-center align-center rounded-lg shadow-lg shadow-gray-900 p-5 backface-hidden rotate-y-180 relative'>
                          <FaRotate className='right-3 text-gray-900 text-sm absolute top-2 cursor-pointer'  onClick={() => setFlipped4(false)}/>
                          <a href="https://medium.com/@adelsondabup" target="_blank" rel="noopener" class="text-blue-600 text-xs hover:underline">
                            medium.com/@adelsondabup
                          </a> 
                        </div>
                      }
                    </div>
                  </div>
              </div>
            </div>
          }
          { page === "project" &&
            <div id='Project' className='p-2 w-full'>
              <div className='absolute w-full inset-0 opacity-40'  style={{backgroundImage: 'url("/desert-8542838_960_720.jpg")', backgroundRepeat: "no-repeat", backgroundRepeat: "no-repeat", backgroundSize:"cover"}} ></div>
              <Projects />
            </div>
          }
        </div>
        <div className='col-span-1 hidden lg:block border-l border-gray-500 relative'>
          <ul className='lg:absolute bottom-10 animated-slide-bottom px-10 flex-cols space-y-5 overflow-hidden'>
            <li className='hover:shadow-lg hover:shadow-gray-800 hover:rounded-lg transPic'><a href="https://linkedin.com/in/adelson-dabup-aniseng-7a5787179/"><FiLinkedin size={30} /></a></li>
            <li className='hover:shadow-lg hover:shadow-gray-800 hover:rounded-lg transPic'><a href="https://github.com/GoldnRamen"><FaGithub size={30} /></a></li>
            <li className='hover:shadow-lg hover:shadow-gray-800 hover:rounded-lg transPic'><a href="https://medium.com/@adelsondabup"><FaMediumM size={30} /></a></li>
          </ul>
        </div>
      </section>
    </div>

  )
}
