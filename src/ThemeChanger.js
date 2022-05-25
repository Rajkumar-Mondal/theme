import React from 'react'
import { ThemeContext } from "./themeContext"


export default function ThemeChanger() {
    const { toggleDark , togglePrimarytheme , toggleSecondarytheme , togglelight} = React.useContext(ThemeContext)
    const themeChangehandler=(e) => {
        console.log(e.target.value);
        if(e.target.value==="dark"){
            toggleDark();
        } else if (e.target.value==="primaryTheme") {
            togglePrimarytheme();
        } else if (e.target.value==="secondaryTheme") {
            toggleSecondarytheme();
        } else {
            togglelight();
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
