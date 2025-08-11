import { useEffect, useState } from 'react';

const images = [
  '/COLLAGE_20221217_204658.jpg',
  '/COLLAGE_20221217_204658_dark.jpg',
  '/COLLAGE_20240307_113627.jpg',
  '/COLLAGE_20240307_113627_dark.jpg',
  '/IMG_20220520_140211.jpg',
  '/IMG_20220520_140211_dark.jpg',
  '/COLLAGE_20210510_173140.jpg',
  '/COLLAGE_20210510_173140_dark.jpg',
];

export default function ImageShuffler() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [hover, setHover] = useState(true)
  const [hover1, setHover1] = useState(true)
  const [hover2, setHover2] = useState(true)
  const [hover3, setHover3] = useState(true)

  const hoveringImg = ()=>{
    setHover(prev=>!prev)
  }
  const hoveringImg1 = ()=>{
   setHover1(prev=>!prev)    
  }
  const hoveringImg2 = ()=>{
  setHover2(prev=>!prev)
  }
  const hoveringImg3 = ()=>{
  setHover3(prev=>!prev)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // trigger fade-out  
        setTimeout(() => {
          const next = Math.floor(Math.round() * images.length);
          setCurrentIndex(next);
          // setCurrentIndex(prevIndex => (prevIndex + 1) % images.length); // move to next, loop back to start
          setFade(true); // trigger fade-in
        }, 100); // fade-out duration
    }, 5000); // change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    // <div className="col-span-4 hidden lg:block w-full h-[100vh] overflow-hidden relative">
    //   <div className='cursor-pointer h-[36vh] top-[8vh] left-21 absolute w-[27vh] animated-slide-top overflow-hidden border border-5 border-gray-900 '>
    //     <img
    //     alt="Public"
    //     key={images[0]}
    //     src={hover ? images[1] : images[0]}
    //     className={`object-cover h-full transPic w-full shadow-lg shadow-gray-800`}
    //     onMouseEnter={()=>hoveringImg()} onMouseLeave={()=>hoveringImg()}
    //     />
    //   </div>
    //   <div className='cursor-pointer h-[22vh] top-[22vh] right-19 absolute w-[33vh] animated-slide-bottom overflow-hidden border border-5 border-gray-900 '>
    //     <img
    //       alt="Public"
    //       key={images[1]}
    //       src={hover1 ? images[3] : images[2] }
    //       className={`object-cover h-full transPic w-full shadow-lg shadow-gray-800`}
    //       onMouseEnter={()=>hoveringImg1()} onMouseLeave={()=>hoveringImg1()}
    //     />
    //   </div>
    //   <div className='cursor-pointer hover:transPic h-[22vh] top-[45vh] left-12 absolute w-[33vh] animated-slide-bottom overflow-hidden border border-5 border-gray-900 '>
    //     <img
    //       alt="Public"
    //       key={images[2]}
    //       src={hover2 ? images[5] : images[4]}
    //       className={`object-cover object-top transPic w-full h-full shadow-lg shadow-gray-800`}
    //       onMouseEnter={()=>hoveringImg2()} onMouseLeave={()=>hoveringImg2()}
    //     />
    //   </div>
    //   <div className={`cursor-pointer h-[36vh] top-[45vh] right-28 absolute w-[27vh] animated-slide-top overflow-hidden border border-5 border-gray-900 `}>
    //     <img
    //       alt="Public"
    //       // key={images[3]}
    //       src={hover3 ? images[7] : images[6]}
    //       className={`object-cover w-full transPic h-full shadow-lg shadow-gray-800`}
    //       onMouseEnter={()=>hoveringImg3()} onMouseLeave={()=>hoveringImg3()}
    //     />
    //   </div>
    // </div>
    <div className='animated-slide-top col-span-4 hidden lg:block w-[90%] h-[80vh] mt-10 rounded mx-auto shadow shadow-lg shadow-black bg-gradient-to-br from-gray-950 to-cyan-800 rounded-full relative p-3'>
      <div className="border-5 rounded-full border-gray-200 h-full w-full overflow-hidden relative">
        <div style={{backgroundImage: 'url("/wall-795219_1280.jpg")', backgroundRepeat: "no-repeat", backgroundSize: "cover"}} className="border-3 rounded-full border-gray-900 h-full w-full overflow-hidden relative">
          <img src={hover ? '/Ade12bw.png' : '/Ade12_cut_011348.png'} alt="Public" className='border-b w-fit h-fit border-b-3' onMouseEnter={()=>hoveringImg()} onMouseLeave={()=>hoveringImg()}/>
        </div>
      </div>
    </div>
  );
}
