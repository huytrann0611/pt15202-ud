import React from 'react'

const Header = () => {
    return (
        <header id="header">
            <div className="inner">
                <a href="index.html" className="logo">introspect</a>
                <nav id="nav">
                    <a href="index.html">Home</a>
                    <a href="generic.html">Generic</a>
                    <a href="elements.html">Elements</a>
                </nav>
            </div>
        </header>
    )
}

export default Header
