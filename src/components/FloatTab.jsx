import { RenderContext } from '@/context/RenderContext';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

export default function FloatTab (){
    const {page, setPage, lightMode, setLightMode, setLight, setDark} = useContext(RenderContext)
    const [shrink, setShrink] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
        setShrink(true); // shrink after 5 seconds
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    return(
        <div className='relative'>
            <div
                className={`${lightMode ? "bg-yellow-900 fixed" : "bg-gray-700 fixed"} block top-5 z-50 lg:left-10 left-3 lg:right-10 right-3 opacity-95 rounded-full p-1 items-center shadow-2xl 
                    transition-[margin,width] duration-1000 ease-in-out animated-slide-right
                    ${shrink ? 'lg:ml-[400px] lg:w-[calc(100%-450px)]' : 'lg:animated-slide-right'}`}>
                <div className={`${lightMode ? "bg-yellow-100 text-amber-900" : "bg-gradient-to-br from-cyan-600 via-gray-950 to-cyan-800"} p-1 lg:p-0 rounded-full px-1`}>
                    <div className="p-1 lg:p-0 opacity-100 lg:mx-10 grid grid-cols-7 items-center">
                        <div className="hidden lg:flex gap-3 items-center text-xs col-span-3 lobster">
                            <img src="/Adel_Logo.png" className='h-[40px] m-0 w-fit rounded-lg' alt="Logo" />
                            <div>
                                <p>Adelson</p>
                                <p>Dabup</p>
                            </div>
                        </div>
                        <div className="col-span-4 flex justify-between text-sm items-center">
                            <ul className="flex gap-4 roboto h-full text-center space-around align-middle">
                                <li onClick={()=>setPage("home")} className={`${lightMode ? `homeLight home` : ` home`} cursor-pointer ${(page === "home" && lightMode) && "font-bold text-amber-900"} ${(page !== "home" && !lightMode) && "text-gray-500"}`}>Home</li>
                                <li onClick={()=>setPage("about")} className={`${lightMode ? `homeLight home` : ` home`} cursor-pointer  ${(page === "about" && lightMode) && "font-bold text-amber-900"} ${(page !== "about" && !lightMode) && "text-gray-500"}`}>About</li>
                                <li onClick={()=>setPage("contact")} className={`${lightMode ? `homeLight home` : ` home`} lg:hidden cursor-pointer  ${(page === "contact" && lightMode) && "font-bold text-amber-900"} ${(page !== "contact" && !lightMode) && "text-gray-500"}`}>Contacts</li>
                                <li onClick={()=>setPage("project")} className={`${lightMode ? `homeLight home` : ` home`} cursor-pointer  ${(page === "project" && lightMode) && "font-bold text-amber-900"} ${(page !== "project" && !lightMode) && "text-gray-500"}`}>Projects</li>
                            </ul>                            
                            <div className="items-end text-xs hidden lg:block">
                                <a href="/files/Adelson_Resume.pdf" download>
                                    <p className="border rounded-full border-b-gray-400 w-fit py-1 px-2">Download&nbsp;resume</p>
                                </a>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
            <div className='fixed z-10 lg:top-17 top-3 lg:right-8 right-3 animated-slide-mode'>
                <div className='flex mx-5 my-1 p-2 w-fit relative gap-2 mt-14 lg:mt-1'>
                    <div className='opacity-20 z-10 bg-black absolute right-0 left-0 top-0 bottom-0 rounded-lg'></div>
                    <div onClick={()=>setLightMode(true)} className={`cursor-pointer z-30 h-[1.5rem] w-[1.5rem] ${lightMode ? "bg-cyan-900" : "transparent"} rounded-full items-center`}><MdWbSunny className='mx-auto mt-1 text-amber-400' /></div>
                    <div onClick={()=>setLightMode(false)}  className={`cursor-pointer z-30 h-[1.5rem] w-[1.5rem] ${lightMode ? "transparent" : "bg-cyan-900"} rounded-full items-center`}><FaMoon className='mx-auto mt-1 text-amber-400' /></div>
                </div>
            </div>
        </div>
    )
}