import React from 'react'

import Brand from '../../../Brand/Brand'
import NavBarItems from '../NavbarItems/NavbarItems'
import classes from './SideDrawer.css'
import Aux from '../../../../hoc/Auxiliary/Auxiliary'

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]

    if(props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <Aux>
            <div className={ attachedClasses.join(' ') }>
                <Brand />
                <nav>
                    <NavBarItems />
                </nav>
            </div>

        </Aux>
    )
}

export default sideDrawer