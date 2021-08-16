import * as React from 'react';
import Community from '../components/Community';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

const Homepage = () => {
    return(
        <Layout>
            <PageHeader pageTitle='Community' pageText='Join the community and contribute to your future' />
            <Community/>
        </Layout>
    )
}

export default Homepage