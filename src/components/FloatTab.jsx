import { RenderContext } from '@/context/RenderContext';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';

export default function FloatTab (){
    const {page, setPage} = useContext(RenderContext)
    const [shrink, setShrink] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
        setShrink(true); // shrink after 5 seconds
        }, 15000);

        return () => clearTimeout(timer);
    }, []);
    return(
        <div
            className={`fixed top-5 z-50 left-10 right-10 opacity-95 bg-gray-700 rounded-full p-1 items-center shadow-2xl 
                transition-[margin,width] duration-1000 ease-in-out
                ${shrink ? 'ml-[400px] w-[calc(100%-500px)]' : 'animated-slide-right'}`}>
            <div className="bg-black rounded-full px-1 bg-gradient-to-br from-gray-950 to-cyan-800">
                <div className="p-1 opacity-100 mx-10 grid grid-cols-7 items-center">
                    <div className="text-xs col-span-3 lobster">
                        <p>Adelson</p>
                        <p>Dabup</p>
                    </div>
                    <div className="col-span-4 flex justify-between text-sm items-center">
                        <ul className="flex gap-4 roboto h-full">
                            <li onClick={()=>setPage("home")} className='cursor-pointer hover:bg-white hover:text-gray-900 '>Home</li>
                            <li onClick={()=>setPage("about")} className='cursor-pointer hover:bg-white hover:text-gray-900 '>About</li>
                            <li onClick={()=>setPage("contact")} className='cursor-pointer hover:bg-white hover:text-gray-900 '>Contacts</li>
                            <li onClick={()=>setPage("project")} className='cursor-pointer hover:bg-white hover:text-gray-900 '>Projects</li>
                        </ul>
                        <div className="items-end text-sm">
                            <p className="border rounded-full border-b-gray-400 w-fit py-1 px-2">Download resume</p>
                        </div>
                    </div>                   
                </div>
            </div>
            
        </div>
    )
}