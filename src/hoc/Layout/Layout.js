import React, { Component } from 'react'

import Aux from '../Auxiliary/Auxiliary'
import Navbar from '../../components/Navigation/Navbar/Navbar'
import SideDrawer from '../../components/Navigation/Navbar/SideDrawer/SideDrawer'
import classes from './Layout.css'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState(prevState => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render() {
        return (
            <Aux>
                <Navbar drawerToggleClicked={ this.sideDrawerToggleHandler } />
                <SideDrawer
                    open={ this.state.showSideDrawer }
                    closed={ this.sideDrawerClosedHandler } />
                <main className={ classes.Content }>
                    { this.props.children }
                </main>
            </Aux>
        )
    }
}

export default Layout