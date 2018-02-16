import React from 'react'

import NavbarItem from './NavbarItem/NavbarItem'
import Brand from '../../../Brand/Brand'
import classes from './NavbarItems.css'

const navbarItems = () => (
    <ul className={ classes.NavbarItems }>
        <Brand />
        <NavbarItem link='/services' exact>Services</NavbarItem>
        <NavbarItem link='/bio' >Bios</NavbarItem>
        <NavbarItem link='/portfolio' >Portfolio</NavbarItem>
        <NavbarItem link='/contact' >Contact Us</NavbarItem>
    </ul>
)

export default navbarItems