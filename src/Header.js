import React from "react";
import { ThemeContext } from "./themeContext";
import ThemeChanger from "./ThemeChanger"


function Header() {
    const { theme } = React.useContext(ThemeContext)
    return (
        <div style={{ backgroundColor: theme.headerBackgroundColor, color: theme.color }}>
            <ThemeChanger />
        </div>
    );
}

export default Header;