import * as React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

import '../theme.scss'

const Layout = (props) => {
    return (
        <div>
            <NavBar/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout