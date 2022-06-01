import { createContext } from "react";
import { useState } from "react";

export const TheameContext=createContext();

export const TheameProvider=({children})=>{
    const [isDark,setisdark]=useState(false);


    const toggletheme=()=>{

       setisdark(isDark==false?true:false)
    }
    
    return (
        <TheameContext.Provider value={{isDark,toggletheme}}>
            {children}
        </TheameContext.Provider>
    )
}