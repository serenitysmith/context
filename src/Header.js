import React, {useContext} from 'react';

// to make our components consumed we above import theme context 
//
import {ThemeContext} from './themeContext';


function Header(props) {

//we save it here in a saved varible  
    const context = useContext(ThemeContext)
// using the cosntext them makes it so we dont have to hard code dark or light kind of like usig props 
    

// a console log statement shows the string light 
    console.log(context)
    
    return (
        <div 
        //rremove hard codded theme 
        
        className={`${context.color}-theme`}>
            <h2>Theme Context</h2>
            {/* <h3>You are currently using light mode</h3> */}
{/* 
            // changed the hard coded h3 to contxtt so h3 changes with the theme  */}
            <h3> you are currently using {context.color}   mode </h3>        </div>
    );
}

export default Header;