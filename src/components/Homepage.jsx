import { RenderContext } from "@/context/RenderContext"
import RollingName from "./RollingName"
import { useContext } from "react"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

export default function Homepage() {
    const {setPage, page, setFlipped1, setFlipped2, setFlipped3, setFlipped4, flipped1, flipped2, flipped3, flipped4, hover, setHover, hoveringImg, lightMode} = useContext(RenderContext)
    return(
        <div>
            <RollingName />       
            <div className='sticky'>
                <div className='space-y-3  lg:mt-[5vh] mt-[2vh] ml-3 lg:mr-30'>
                    <p className='lg:text-2xl font-saira text-xl'>Full Stack Web Developer</p>
                    <div className="lg:hidden items-end text-xs">
                    <a href="/files/Adelson_Resume.pdf" download>
                        <p className={`border rounded-full ${lightMode ? "hover:bg-white hover:text-yellow-800" : "hover:bg-white hover:text-cyan-800"} w-fit py-1 px-2`}>Download&nbsp;resume</p>
                    </a>
                </div>        
                    <div className='lg:relative sticky lg:overflow-y-hidden overflow-y-scroll lg:p-0 p-2 lg:h-full h-[30vh]'>
                    <p>
                        Hello! I’m Adelson Dabup, a curious builder of websites and apps. I believe that great code meets great design, and I’m here to craft digital solutions that make people’s lives easier
                    </p>
                    <div className='ml-20 lg:hidden my-5'>
                        <div onClick={()=>setPage("contact")} className={`border rounded-full bg-transparent text-gray-300 ${lightMode ? "hover:bg-white hover:text-yellow-800" : "hover:bg-cyan-100 hover:text-cyan-800"} w-fit p-3 flex gap-2 hover:bg-white hover:text-gray-900 cursor-pointer`}>
                            <p className='odibee lg:text-xl font-semibold'>Contact Me</p>
                            <MdOutlineKeyboardArrowRight size={30}/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}