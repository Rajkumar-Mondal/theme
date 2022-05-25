import React from 'react'
import { ThemeContext } from "./themeContext"


export default function ThemeChanger() {
    const { Dark , Primarytheme , Secondarytheme , Light} = React.useContext(ThemeContext)
    const themeChangehandler=(e) => {
        console.log(e.target.value);
        if(e.target.value==="dark"){
            Dark();
        } else if (e.target.value==="primaryTheme") {
            Primarytheme();
        } else if (e.target.value==="secondaryTheme") {
            Secondarytheme();
        } else {
            Light();
        }
    }

    return (
        <>
            <h1>Themes:</h1>
            <select onChange={(e) => themeChangehandler(e)}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="primaryTheme">Primary Theme</option>
                <option value="secondaryTheme">Secondary Theme</option>
            </select>
        </> 
    )
}
