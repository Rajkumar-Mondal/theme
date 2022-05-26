import React, { useState, createContext } from "react";

const themes = {
    dark: {
        headerBackgroundColor: "black",
        fotterBackgroundColor: "red",
        color: "white",
    },
    light: {
        headerBackgroundColor: "white",
        fotterBackgroundColor: "white",
        color: "black",
    },
    primaryTheme: {
        headerBackgroundColor: "yellow",
        fotterBackgroundColor: "black",
        color: "white",
    },
    secondaryTheme: {
        headerBackgroundColor: "blue",
        fotterBackgroundColor: "green",
        color: "white",
    },
};

const initialState = {
    theme: themes.light,
    ThemeSelecter: () => { },
    CustomThemeSelecter: () => { },
};

const ThemeContext = createContext(initialState);

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(themes.light);

    const ThemeSelecter = (color) => {
        setTheme(themes[color]);
        
    }

    const CustomThemeSelecter = (CustomThemeSelecter) => {
        setTheme(CustomThemeSelecter);
    }

    return (
        <ThemeContext.Provider value={{ theme, ThemeSelecter, CustomThemeSelecter }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeProvider, ThemeContext };
