import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './NavbarItem.css'

const navbarItem = (props) => (
    <li className={ classes.NavbarItem }>
        <NavLink 
            to={ props.link } 
            exact={ props.exact } 
            activeClassName={ classes.active }>{ props.children }</NavLink>
    </li>
)

export default navbarItem