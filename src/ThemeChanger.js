import React, { useState, useContext } from 'react'
import { ThemeContext } from "./themeContext"


export default function ThemeChanger() {
    const [header, setHeader] = useState("");
    const [fotter, setFotter] = useState("");

    const { ThemeSelecter } = useContext(ThemeContext)


    const themeChangehandler = (e) => {
        ThemeSelecter(e.target.value);
    }

    const onSubmithandler = (e) => {
        console.log(header);
        console.log(fotter);
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
            <h1>Custom Themes:</h1>
            <label>
                Header Color:
                <input type="text" value={header} onChange={(e) => setHeader(e.target.value.trim())} />
            </label>
            <label>
                Fotter Color:
                <input type="text" value={fotter} onChange={(e) => setFotter(e.target.value.trim())} />
            </label>
            <input type="submit" onClick={onSubmithandler} />
        </>
    )
}
