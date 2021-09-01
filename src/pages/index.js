import * as React from 'react';
import Layout from '../components/Layout';
import Information from '../components/Information';
import Landing from '../components/Landing';
import Contributors from '../components/Contributors';

const Homepage = () => {
    return (

        <Layout>
            <Landing />
            
            <Information />
            
            <Contributors />          
        </Layout>
    )
}

export default Homepage