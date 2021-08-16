import * as React from 'react';
import Layout from '../components/Layout';
import Information from '../components/Information';
import Landing from '../components/Landing';

const Homepage = () => {
    return(
        <Layout>
            <Landing/>
            <Information/>
        </Layout>
    )
}

export default Homepage