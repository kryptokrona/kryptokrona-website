import * as React from 'react'
import Footer from './Footer'
import Menubar from './Navbar'

//As of now, A Global theme is importet and rendered through this file. 
import '../theme/theme.scss'

const Layout = (props) => {
    return(
        <div>
            <Menubar/>
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout