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
import { FaEnvelope } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { PiCopyrightThin } from "react-icons/pi";
import { useContext, useState } from 'react';
import { RenderContext, RenderProvider } from '@/context/RenderContext';
import Projects from '@/components/Projects';
import Homepage from '@/components/Homepage';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  const {setPage, page, setFlipped1, setFlipped2, setFlipped3, setFlipped4, flipped1, flipped2, flipped3, flipped4, hover, setHover, hoveringImg, lightMode} = useContext(RenderContext)

  return (
    <div className='overflow-hidden' style={{backgroundImage: `${lightMode ? `url("/desert-3985417_960_720.jpg")` : `url("/iran-6888574_960_720.jpg")`}`, backgroundRepeat: 'no-repeat', backgroundSize: "cover"}}>
      <FloatTab />
      <section className='w-full h-[100vh] lg:grid grid-cols-10' >
        <ImageShuffler />
        <div className='col-span-5 w-full flex p-1 relative'>
          { page === "home"  &&
            <div id='Home' className={`${lightMode ? `bg-gradient-to-tl from-transparent via-yellow-900 to-transparent` : `bg-gradient-to-tl from-transparent via-gray-800 to-gray-transparent`} p-2 relative m-1 h-[100vh] overflow-hidden mb-2`}>
              <Homepage />
            </div> 
          }
          { page === "about" &&
            <About />
          }
          { page === "contact" &&
            <div id='Contact' className='p-2 w-full relative'>
             <Contact />
            </div>
          }
          { page === "project" &&
            <div id='Project' className='p-2 w-full'>
              <div className='absolute w-full inset-0 opacity-40'  style={{backgroundImage: 'url("/desert-8542838_960_720.jpg")', backgroundRepeat: "no-repeat", backgroundRepeat: "no-repeat", backgroundSize:"cover"}} ></div>
              <Projects />
            </div>
          }
        </div>
        <div className='col-span-1 hidden lg:block relative'>
          <ul className='lg:absolute bottom-10 animated-slide-bottom px-10 flex-cols space-y-5 overflow-hidden'>
            <li className='hover:shadow-lg hover:shadow-gray-800 hover:rounded-lg transPic'><a href="https://mail.google.com/mail/?view=cm&fs=1&to=adelsondabup@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope size={30} /></a></li> {/*href="mailto:adelsondabup@gmail.com"*/}
            <li className='hover:shadow-lg hover:shadow-gray-800 hover:rounded-lg transPic'><a href="https://linkedin.com/in/adelson-dabup-aniseng-7a5787179/"><FiLinkedin size={30} /></a></li>
            <li className='hover:shadow-lg hover:shadow-gray-800 hover:rounded-lg transPic'><a href="https://github.com/GoldnRamen"><FaGithub size={30} /></a></li>
            <li className='hover:shadow-lg hover:shadow-gray-800 hover:rounded-lg transPic'><a href="https://medium.com/@adelsondabup"><FaMediumM size={30} /></a></li>
          </ul>          
        </div>
      </section>
    </div>

  )
}
