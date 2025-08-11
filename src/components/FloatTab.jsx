import { RenderContext } from '@/context/RenderContext';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';

export default function FloatTab (){
    const {page, setPage} = useContext(RenderContext)
    const [shrink, setShrink] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
        setShrink(true); // shrink after 5 seconds
        }, 4000);

        return () => clearTimeout(timer);
    }, []);
    return(
        <div
            className={`fixed block top-5 z-50 lg:left-10 left-3 lg:right-10 right-3 opacity-95 bg-gray-700 rounded-full p-1 items-center shadow-2xl 
                transition-[margin,width] duration-1000 ease-in-out animated-slide-right
                ${shrink ? 'lg:ml-[400px] lg:w-[calc(100%-450px)]' : 'lg:animated-slide-right'}`}>
            <div className="bg-black rounded-full px-1 bg-gradient-to-br from-gray-950 to-cyan-800">
                <div className="p-1 opacity-100 lg:mx-10 grid grid-cols-7 items-center">
                    <div className="hidden lg:block text-xs col-span-3 lobster">
                        <p>Adelson</p>
                        <p>Dabup</p>
                    </div>
                    <div className="col-span-4 flex justify-between text-sm items-center">
                        <ul className="flex gap-4 roboto h-full text-center space-around align-middle">
                            <li onClick={()=>setPage("home")} className={`home cursor-pointer ${page === "home" ? "text-white" : "text-gray-500"}`} >Home</li>
                            <li onClick={()=>setPage("about")} className={`home cursor-pointer ${page === "about" ? "text-white" : "text-gray-500"}`}>About</li>
                            <li onClick={()=>setPage("contact")} className={`home lg:hidden cursor-pointer ${page === "contact" ? "text-white" : "text-gray-500"}`}>Contacts</li>
                            <li onClick={()=>setPage("project")} className={`home cursor-pointer ${page === "project" ? "text-white" : "text-gray-500"}`}>Projects</li>
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
    )
}