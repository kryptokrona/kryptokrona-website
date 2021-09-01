import * as React from 'react';
import Community from '../components/Community';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import Seo from "../components/seo"

const Homepage = () => {
    return(
        <Layout>
            <Seo></Seo>
            <PageHeader pageTitle='Community' pageText='Join the community and contribute to your future' emoji='❤️' />
            <Community/>
        </Layout>
    )
}

export default Homepage