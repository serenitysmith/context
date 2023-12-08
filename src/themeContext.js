


// when we moved our files, to seperatre them, we toook state color set color etc from aapp and moved them here set in a const 

import React, {useState} from "react"
// first step of context is what you see below importing context


const ThemeContext = React.createContext() 

// the removed content from app added to a varible 
function ThemeContextProvider(props){ 
    
    const [color, setColor] = useState("dark")
    
    const toggleTheme = () => {
        setColor(prevColor => prevColor === "dark" ? "light" : "dark")
    }
    // we moved the header compnetn to the return statement along with the button co mpoent and made them props 
    return(

        // usoing children generalizes it and makes it so any children in these tags will have access to the context passed down to it 
        <ThemeContext.Provider value={{
            color: color, 
            toggleTheme: toggleTheme
        }}>
           {props.children}
        </ThemeContext.Provider>
    )
}



//you have to export it as well 
export {ThemeContext, ThemeContextProvider} 

//if your exporting more than one thing no need for the word defaukt and curls braces are needed 
// export default  ThemeContext