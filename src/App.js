// in react you can only pass data downward, do this by prrops 
/*


// three steps to context
1. [ ] Create the context
2. [ ] Provide the context 
3. [ ] Consume the context
*/

// app component is commen component that header and button use so this is where we provide what we want context to do aka  seccond step provide the context  import context aabove 


// in this context exaplme we will switch between dark an light theme 

import React from "react"
import Button from './Button';
import Header from './Header';
import ThemeContext from "./themeContext";
function App(props) {
    return (
        <>
       
        {/* // to use theme context, you   would wrap header and button in it like a parent  */}

{/* using value inth etge belo, lets us pass data to these compnetns without using a bunch of props  */}
        <ThemeContext.Provider 
        
        // hard coded it to be the ligth theme fror now 
        value= "light"  >
            <Header/>
            <Button/>

            </ThemeContext.Provider>
        </>
    );
}

export default App;