import { useContext, useState } from 'react';
import { RenderContext, RenderProvider } from '@/context/RenderContext';

export default function About(){
    const {setPage, page, setFlipped1, setFlipped2, setFlipped3, setFlipped4, flipped1, flipped2, flipped3, flipped4, hover, setHover, hoveringImg, lightMode} = useContext(RenderContext)
    return(
        <div id='About' style={{backgroundImage: 'url("/texture-2061709_640.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: "cover"}} className='p-7 relative m-2 h-[97vh] w-full lg:opacity-80 opacity-100'>
            <div className='lg:mt-[7vh] mt-[6vh] h-[87vh] p-4 text-black absolute right-0'>                
                <div className='relative h-[35vh] w-full lg:hidden overflow-hidden'>
                    {/* <div className="rounded-full p-2 shadow shadow-black bg-gradient-to-br from-gray-950 to-cyan-800 mx-auto w-[50%] h-full">   
                    </div> */}
                    <div style={{backgroundImage: 'url("/wall-795219_1280.jpg")'}} className="border-3 rounded-full border-gray-900 h-fit w-fit overflow-hidden relative md:mx-auto">
                        <img className='md:h-56' src={hover ? '/Ade12bw.png' : '/Ade12_cut_011348.png'} alt="Public" onMouseEnter={()=>hoveringImg()} onMouseLeave={()=>hoveringImg()}/>
                    </div>
                </div>
                <div className='flex h-fit w-fit mt-[3vh] mx-auto'><p className='text-2xl odibee'>About Adelson</p></div>
                <div className='space-y-3 lg:mt-[5vh] mt-[3vh] lg:h-full h-[35vh] mb-3 p-2 lg:overflow-hidden overflow-y-scroll overflow-x-hidden'>
                    <p>I'm a passionate full-stack developer with a flair for creating responsive, visually engaging web experiences. I work primarily with React, Tailwind CSS, and JavaScript, building dynamic interfaces backed by Node.js, MongoDB, and MySQL.</p>
                    <p>My journey into tech began with curiosity and a love for problem-solving — now I turn ideas into fast, accessible applications with clean code and elegant transitions. Whether it's integrating APIs or fine-tuning performance, I enjoy every part of the build process.</p>
                    <p>I'm currently open to opportunities that challenge me to grow and collaborate with others. When I’m not coding, I’m usually exploring design inspiration or experimenting with new tools and frameworks.</p>
                    <div className=''><p>Let’s build something meaningful — feel free to check out my projects or</p><p onClick={()=>setPage("contact")} className='text-blue-500 cursor-pointer hover:underline'> get in touch!</p></div>
                </div>
            </div>
        </div> 
    )
    
}