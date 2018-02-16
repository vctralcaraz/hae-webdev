import React from 'react'
import { Link } from 'react-router-dom'

import Aux from '../../hoc/Auxiliary/Auxiliary'
import classes from './Brand.css'

const brand = () => (
    <Aux>
        <Link to='/' exact className={ classes.NavbarBrand }>HAE Web Development</Link>
    </Aux>
)

export default brand