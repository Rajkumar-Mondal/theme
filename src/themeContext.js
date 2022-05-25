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
    Dark: () => { },
    light: () => { },
    Primarytheme: () => { },
    Secondarytheme: () => { },

};
const ThemeContext = React.createContext(initialState);

function ThemeProvider({ children }) {
    const [dark, setDark] = useState(false); 
    const [light, setLight] = useState(false); 
    const [primary, setPrimaryTheme] = useState(false); 
    const [secondary, setSecondary] = useState(false); 

    const Dark = () => {
        setLight(false);
        setPrimaryTheme(false);
        setSecondary(false);
        setDark(true);
    };

    const Light = () => {
        setPrimaryTheme(false);
        setSecondary(false);
        setDark(false);
        setLight(true);
    };
    
    const Primarytheme = () => {
        setSecondary(false);
        setDark(false);
        setLight(false);
        setPrimaryTheme(true);
    };
    
    const Secondarytheme = () => {
        setPrimaryTheme(false);
        setDark(false);
        setLight(false);
        setSecondary(true);
    };

    const themeChecker = () => {
        if (dark) {
            return themes.dark
        } else if (primary) {
            return themes.primaryTheme
        } else if (secondary) {
            return themes.secondaryTheme
        } else if (light) {
            return themes.light
        } else {
            return themes.light
        }
    }

    const theme = themeChecker();
    


    return (
        <ThemeContext.Provider
            value={{ theme , Dark , Light , Primarytheme , Secondarytheme}}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeProvider, ThemeContext };
