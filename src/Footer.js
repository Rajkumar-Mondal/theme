import React from "react";
import { ThemeContext } from "./themeContext";
function Footer() {
    const { theme } = React.useContext(ThemeContext)
    return (
        <div style={{ backgroundColor: theme.fotterBackgroundColor, color: theme.color }}>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus, eligendi voluptatem amet libero animi. Ab alias corrupti dolores incidunt consectetur molestias dolorem reprehenderit cupiditate magni nemo. Itaque, dolore accusantium praesentium expedita similique rem, consequuntur quibusdam incidunt voluptas magnam voluptate provident labore, iste error nesciunt amet deserunt? Unde, recusandae odio.</h3>
        </div>
    );
}

export default Footer;