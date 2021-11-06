import * as React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

import '../theme.scss'
import { SEO } from './Seo'

const Layout = (props) => {
    return (
        <div>
            <SEO/>
            <NavBar/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout