const { useRouter } = require("next/router")
const { useState, useContext, createContext } = require("react")

export const RenderContext = createContext()
export const RenderProvider=({children})=>{
    
    const [page, setPage] = useState("home")
    const [flipped1, setFlipped1] = useState(false)
    const [flipped2, setFlipped2] = useState(false)
    const [flipped3, setFlipped3] = useState(false)
    const [flipped4, setFlipped4] = useState(false)
    const [flipped5, setFlipped5] = useState(false)

    const [isVisible1, setIsVisible1] = useState(false)
    const [stillVisible1, setStillVisible1] = useState(false)
    const [isVisible2, setIsVisible2] = useState(false)
    const [stillVisible2, setStillVisible2] = useState(false)
    const [isVisible3, setIsVisible3] = useState(false)
    const [stillVisible3, setStillVisible3] = useState(false)
    const [isVisible4, setIsVisible4] = useState(false)
    const [stillVisible4, setStillVisible4] = useState(false)

    const [hover, setHover] = useState(true)

    const hoveringImg = ()=>{
    setHover(prev=>!prev)
  }
    
    return(
        <RenderContext.Provider value={{page, setPage, flipped1, flipped2, flipped3, flipped4, flipped5, setFlipped1, setFlipped2, setFlipped3, setFlipped4, setFlipped5, hover, setHover, hoveringImg}}>
            {children}
        </RenderContext.Provider>
    )
}
  