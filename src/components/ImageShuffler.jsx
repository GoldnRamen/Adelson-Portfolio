import { useEffect, useState } from 'react';

const images = [
  '/COLLAGE_20210510_173140.jpg',
  '/COLLAGE_20221217_204658.jpg',
  '/COLLAGE_20240307_113627.jpg',
  // Add more images here
];

export default function ImageShuffler() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // trigger fade-out  
        setTimeout(() => {
          //const next = Math.flor(Math.round() * images.length);
          //setCurrentIndex(next);
          setCurrentIndex(prevIndex => (prevIndex + 1) % images.length); // move to next, loop back to start
          setFade(true); // trigger fade-in
        }, 100); // fade-out duration
    }, 5000); // change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="col-span-4 w-full h-[100vh] overflow-hidden relative animate-pulse">
      <img
        alt="Public"
        key={images[currentIndex]}
        src={images[currentIndex]}
        className={`h-[100vh] w-full object-cover shadow-xl shadow-gray-800 rounded-full transition-all duration-[3000ms] ease-in-out transform filter ${
            fade ? 'opacity-100 scale-50 blur-0' : 'opacity-0 scale-105 blur-lg'
        }`}
/>

    </div>
  );
}
