import React, { useState } from "react";

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
};

const ThemeContext = React.createContext(initialState);

function ThemeProvider({ children }) {
    
    const [theme, setTheme] = useState(themes.light);

    const ThemeSelecter = (color) => {
        // setTheme(themes.color);
        if(color==="dark"){
            setTheme(themes.dark);
        } else if (color==="light") {
            setTheme(themes.light);
        } else if (color==="primaryTheme") {
            setTheme(themes.primaryTheme);
        } else if (color==="secondaryTheme") {
            setTheme(themes.secondaryTheme);
        } else {
            setTheme(themes.light);
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, ThemeSelecter }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeProvider, ThemeContext };
