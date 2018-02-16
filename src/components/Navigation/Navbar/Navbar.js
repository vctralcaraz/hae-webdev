import React from 'react'

import NavbarItems from './NavbarItems/NavbarItems'
import classes from './Navbar.css'

const navbar = (props) => (
    <header className={ classes.Navbar }>
        <nav>
            <NavbarItems />
        </nav>
    </header>
)

export default navbar