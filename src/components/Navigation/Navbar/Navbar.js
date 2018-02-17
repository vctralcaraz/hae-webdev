import React from 'react'

import NavbarItems from './NavbarItems/NavbarItems'
import Brand from '../../Brand/Brand'
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle'
import classes from './Navbar.css'

const navbar = (props) => (
    <header className={ classes.Navbar }>
        <DrawerToggle clicked={ props.drawerToggleClicked } />
        <Brand />
        <nav className={ classes.DesktopOnly }>
            <NavbarItems />
        </nav>
    </header>
)

export default navbar