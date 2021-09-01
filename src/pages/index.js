import * as React from 'react';
import Layout from '../components/Layout';
import Information from '../components/Information';
import Landing from '../components/Landing';
import Contributors from '../components/Contributors';
import Seo from "../components/seo"

const Homepage = () => {
    return (

        <Layout>
            <Seo/>
            <Landing />
            <Information />
            <Contributors />          
        </Layout>
    )
}

export default Homepage