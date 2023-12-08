// in react you can only pass data downward, do this by prrops 
/*


// three steps to context
1. [ ] Create the context
2. [ ] Provide the context 
3. [ ] Consume the context
*/

// app component is commen component that header and button use so this is where we provide what we want context to do aka  seccond step provide the context  import context aabove 


// in this context exaplme we will switch between dark an light theme 

import React, {useState} from "react"
import Button from './Button';
import Header from './Header';



// firs tiem we ran belwo code, there was an error becuase no curly braces were used with theme context 
import {ThemeContextProvider} from "./themeContext";
import './App.css'





function App(props) {
// added state funtions here to toggle between themes
   
// we move this out of app to theme context to make sure our contaxt and app dont mix and or cause confusion


// const [color, setColor] = useState("dark")
    
    // const toggleTheme = () => {
    //     setColor(prevColor => prevColor === "dark" ? "light" : "dark")
    // }
    return (
        <>
       
        {/* // to use theme context, you   would wrap header and button in it like a parent  */}

{/* using value inth etge belo, lets us pass data to these compnetns without using a bunch of props  */}


{/* // added two curly braces to represent jsx and an object so no erors  */}
{/* <ThemeContexProvider value={{
                color: color, 
                toggleTheme: toggleTheme
            }}> */}

{/* // we neeed to consume our componets?? w do this by using the use context hook 
        // see hesder component  
        // hard coded it to be the light  theme fror now  */}


        {/* // this changes the theme of the page  */}
{/* // this error was thrown when first ran bezcuase we are now passsing an object vs a string  we added .color to our context call in header and button to fix this  */}

        {/* {color: "dark", toggleTheme: ƒ()}
!Error: Unknown error (/node_modules/react-dom/cjs/react-dom.development.js:237)
!The above error occurred in the <h3> component: in h3 (created by Header) in div (created by Header) in Header (created by App) in App Consider adding an error boundary to your tree to customize error handling behavior. Visit https://fb.me/react-error-boundaries to learn more about error boundaries.
›Error: A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://fb.me/react-crossorigin-error for more information. (/node_modules/react-dom/cjs/react-dom.development.js:248)
/index.html */}

<ThemeContextProvider>

            <Header/>
            <Button/>

            </ThemeContextProvider>
        </>
    );
}

export default App;