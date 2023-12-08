import React, {useContext} from 'react';
import {ThemeContext} from "./themeContext"


// imported context here as well to make button counsume content aka change the theme 
function Button(props) {
    // const {color, toggleTheme} she also changed belwo log to this state varible 
    const context = useContext(ThemeContext)
    
    return (


        // on click 
        //toggle theme changes theme s
        // updates state 


        // she got ride of the word context but i left it to chow where we are pulling form but color is all we need for this
        <button onClick={context.toggleTheme} className={`${context.color}-theme`}>Change Theme</button>
    );
}

export default Button;