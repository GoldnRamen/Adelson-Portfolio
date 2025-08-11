import { RenderContext } from "@/context/RenderContext"
import { useContext, useEffect } from "react"
import { FaEnvelope, FaMediumM } from "react-icons/fa"
import { FaGithub, FaRotate, FaWhatsapp } from "react-icons/fa6"
import { FiLinkedin } from "react-icons/fi"

export default function Contact(){
    const {setPage, page, setFlipped1, setFlipped2, setFlipped3, setFlipped4, flipped1, flipped2, flipped3, flipped4, hover, setHover, hoveringImg} = useContext(RenderContext)
      useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && page === "contact") {
        setPage("home");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [page]);
    return(
         <div className='z-20 relative flex w-full lg:hidden mx-auto'>
            {/* <div class="bg-gradient-to-br from-transparent via-gray-transparent to-gray-600 border-b border-5 shadow-black border-gray-500 p-6 shadow-lg rounded-2xl w-fit text-center mx-auto">
            <h1 class="text-3xl font-bold text-gray-800">Contact Me</h1>
            </div> */}
            <div class="space-y-4 p-8 rounded-2xl w-full flex lg:flex-row flex-col justify-between text-center mt-[15vh] mx-auto">
            <div className={`p-2 duration-700 transform-style preserve-3d ${flipped1 ? 'rotate-y-180' : ''} relative mx-auto`}>
                <FaEnvelope className={`transPic cursor-pointer backface-hidden text-gray-100 ${!flipped1 ? "relative" : "hidden"}`} size={50} onClick={()=>setFlipped1(!flipped1)} />
                {flipped1 && 
                <div className='bg-white items-center align-center rounded-lg shadow-lg shadow-gray-900 backface-hidden rotate-y-180 relative'>
                    <FaRotate className='right-3 text-gray-900 text-sm absolute top-2 cursor-pointer'  onClick={() => setFlipped1(false)}/>
                    {/* <a href="tel:+2349055731649" target="_blank" rel="noopener" class="text-blue-600 text-xs hover:underline">
                    @adelsondabup
                    </a>  */}
                    <div style={{backgroundImage: 'url("/wall-795219_1280.jpg")', backgroundRepeat: "no-repeat", backgroundSize: "cover"}} className="p-5 rounded">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=adelsondabup@gmail.com" target="_blank" rel="noopener noreferrer" className="text-blue-900 font-semibold text-xs hover:underline">
                            adelsondabup@gmail.com
                        </a> 
                    </div>
                </div>
                }
            </div>
            <div className={`p-2 duration-700 transform-style preserve-3d ${flipped2 ? 'rotate-y-180' : ''} relative mx-auto`}>
                <FiLinkedin className={`transPic cursor-pointer backface-hidden text-gray-100 ${!flipped2 ? "relative" : "hidden"}`} size={50} onClick={()=>setFlipped2(!flipped2)} />
                {flipped2 && 
                <div className='bg-white items-center align-center rounded-lg shadow-lg shadow-gray-900 backface-hidden rotate-y-180 relative'>
                    <FaRotate className='right-3 text-gray-900 text-sm absolute top-2 cursor-pointer'  onClick={() => setFlipped2(false)}/>
                    <div style={{backgroundImage: 'url("/wall-795219_1280.jpg")', backgroundRepeat: "no-repeat", backgroundSize: "cover"}} className="p-5 rounded">
                        <a href="https://github.com/GoldnRamen" target="_blank" rel="noopener" class="text-blue-900 font-semibold text-xs hover:underline">
                            linkedin.com/in/adelson-dabup-aniseng-7a5787179/
                        </a> 
                    </div>
                </div>
                }
            </div>
            <div className={`p-2 duration-700 transform-style preserve-3d ${flipped3 ? 'rotate-y-180' : ''} relative mx-auto`}>
                <FaGithub className={`transPic cursor-pointer backface-hidden text-gray-100 ${!flipped3 ? "relative" : "hidden"}`} size={50} onClick={()=>setFlipped3(!flipped3)} />
                {flipped3 && 
                <div className='bg-white items-center align-center rounded-lg shadow-lg shadow-gray-900 backface-hidden rotate-y-180 relative'>
                    <FaRotate className='right-3 text-gray-900 text-sm absolute top-2 cursor-pointer'  onClick={() => setFlipped3(false)}/>
                    <div style={{backgroundImage: 'url("/wall-795219_1280.jpg")', backgroundRepeat: "no-repeat", backgroundSize: "cover"}} className="p-5 rounded">
                        <a href="https://linkedin.com/in/adelson-dabup-aniseng-7a5787179/" target="_blank" rel="noopener" class="text-blue-900 text-xs font-semibold hover:underline">
                            github.com/GoldnRamen
                        </a> 
                    </div>
                </div>
                }
            </div>
            <div className={`p-2 duration-700 transform-style preserve-3d ${flipped4 ? 'rotate-y-180' : ''} relative mx-auto`}>
                <FaMediumM className={`transPic cursor-pointer backface-hidden text-gray-100 ${!flipped4 ? "relative" : "hidden"}`} size={50} onClick={()=>setFlipped4(!flipped4)} />
                {flipped4 && 
                <div className='bg-white items-center align-center rounded-lg shadow-lg shadow-gray-900 backface-hidden rotate-y-180 relative'>
                    <FaRotate className='right-3 text-gray-900 text-sm absolute top-2 cursor-pointer'  onClick={() => setFlipped4(false)}/>
                    <div style={{backgroundImage: 'url("/wall-795219_1280.jpg")', backgroundRepeat: "no-repeat", backgroundSize: "cover"}} className="p-5 rounded">
                        <a href="https://medium.com/@adelsondabup" target="_blank" rel="noopener" class="text-blue-900 text-xs font-semibold hover:underline">
                            medium.com/@adelsondabup
                        </a> 
                    </div>
                </div>
                }
            </div>
            </div>
        </div>
    )
}