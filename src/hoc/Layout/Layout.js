import React, { Component } from 'react'

import Aux from '../Auxiliary/Auxiliary'
import Navbar from '../../components/Navigation/Navbar/Navbar'

class Layout extends Component {

    render() {
        return (
            <Aux>
                <Navbar />
            </Aux>
        )
    }
}

export default Layout