import { createContext } from "react";


export const ChurchContext = createContext();

const ChurchContextPrivider = () =>{
    const value = {

    }

    return (
        <ChurchContext.Provider value={value}>
            {props.children}
        </ChurchContext.Provider>
    )
}

export default ChurchContextPrivider