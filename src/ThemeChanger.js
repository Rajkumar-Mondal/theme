import React, { useState, useContext, useEffect } from 'react'
import { ThemeContext } from "./themeContext"

export default function ThemeChanger() {
    const [header, setHeader] = useState("white");
    const [fotter, setFotter] = useState("white");
    const [text, setText] = useState("black");
    const [iscustom, setIscustom] = useState(false);
    const [themeName, setThemeName] = useState('light');


    const { theme, ThemeSelecter, CustomThemeSelecter } = useContext(ThemeContext)

    const themeChangehandler = (e) => {
        setIscustom(false);
        setThemeName(e.target.value);
    }
    useEffect(() => {
        ThemeSelecter(themeName);
    }, [themeName]);

    const onSubmithandler = () => {
        CustomThemeSelecter({
            headerBackgroundColor: header,
            fotterBackgroundColor: fotter,
            color: text
        });
        setIscustom(true);
    }

    useEffect(() => {
        setHeader(theme.headerBackgroundColor);
        setFotter(theme.fotterBackgroundColor);
        setText(theme.color);
    }, [theme]);

    return (
        <>
            <h1>Themes:</h1>
            <select value={iscustom ? "customTheme" : themeName} onChange={(e) => themeChangehandler(e)}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="primaryTheme">Primary Theme</option>
                <option value="secondaryTheme">Secondary Theme</option>
                {
                    iscustom && <option value="customTheme">Custom Theme</option>
                }
            </select>
            <h1>Custom Themes:</h1>
            <label>
                Header Color:
                <input type="text" value={header} onChange={(e) => setHeader(e.target.value.trim())} required />
            </label>
            <label>
                Fotter Color:
                <input type="text" value={fotter} onChange={(e) => setFotter(e.target.value.trim())} required />
            </label>
            <label>
                text Color:
                <input type="text" value={text} onChange={(e) => setText(e.target.value.trim())} required />
            </label>
            <input type="submit" onClick={onSubmithandler} />
        </>
    )
}