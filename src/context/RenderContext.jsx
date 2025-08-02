const { useRouter } = require("next/router")
const { useState, useContext, createContext } = require("react")

export const RenderContext = createContext()
export const RenderProvider=({children})=>{
    
    const [page, setPage] = useState("home")
    
    return(
        <RenderContext.Provider value={{page, setPage}}>
            {children}
        </RenderContext.Provider>
    )
}
  