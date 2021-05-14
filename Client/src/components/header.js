import React from "react"

const Header = () => {
    return (
        <div style={{ backgroundColor: "#00737A" }}>
            <img src={"/Images/logo.png"} alt="logo" style={{ mixBlendMode: "luminosity", paddingLeft: "1em" }} />
            <p style={{ color: "white", opacity: ".5", paddingLeft: "1.5em", marginBottom: "0" }}>
                LitWiz Labs
            </p>
        </div>
    )
}

export default Header
